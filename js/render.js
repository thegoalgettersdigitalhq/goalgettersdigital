/* GoalGetters Digital - shared templates. Builds every page from data/site-data.js.
   You should never need to edit this file to add content. */
(function () {
  "use strict";
  var S = window.SITE || {};
  var B = S.brand || {}, C = S.contact || {}, SOC = S.social || {}, D = S.defaults || {};
  var cats = Array.isArray(S.categories) ? S.categories : [];
  var svcs = Array.isArray(S.services) ? S.services : [];
  var PH = B.placeholderImage || "images/placeholders/placeholder.svg";

  function arr(v) { return Array.isArray(v) ? v : []; }
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function find(list, slug) { for (var i = 0; i < list.length; i++) { if (list[i].slug === slug) { return list[i]; } } return null; }
  function catUrl(c) { return "services/" + c.slug; }
  function svcUrl(s) { return "services/" + s.category + "/" + s.slug; }
  function quoteUrl(slug) { return "contact?quote=1" + (slug ? "&service=" + encodeURIComponent(slug) : ""); }

  function img(src, alt, cls) {
    return '<img class="' + esc(cls || "") + '" src="' + esc(src || PH) + '" alt="' + esc(alt || "") +
      '" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=\'' + esc(PH) + '\'">';
  }

  var ICONS = {
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 11.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 2-1.5L21 7H6"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V4.5M9 7h7"/>',
    stream: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.7-1.6-.7-2.5.7-1.5 1.7-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    growth: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'
  };
  function icon(name) {
    return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || ICONS.growth) + "</svg>";
  }

  /* ---------- small building blocks ---------- */
  function crumbs(list) {
    return '<nav class="crumbs" aria-label="Breadcrumb"><ol>' + list.map(function (c) {
      return "<li>" + (c[1] ? '<a href="' + esc(c[1]) + '">' + esc(c[0]) + "</a>" : '<span aria-current="page">' + esc(c[0]) + "</span>") + "</li>";
    }).join("") + "</ol></nav>";
  }
  function soon(title, text) { return '<div class="soon"><strong>' + esc(title) + "</strong>" + esc(text) + "</div>"; }
  function faqHtml(list) {
    list = arr(list).filter(function (f) { return f && f.q; });
    if (!list.length) { return ""; }
    return '<div class="faq">' + list.map(function (f) { return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>"; }).join("") + "</div>";
  }
  function stepsHtml(list) {
    list = arr(list);
    var n = Math.min(Math.max(list.length, 3), 5);
    return '<ol class="steps n' + n + '">' + list.map(function (s) { return "<li><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></li>"; }).join("") + "</ol>";
  }
  function svcCard(s, withImg) {
    var pic = withImg ? img(s.image, s.name, "thumb") : "";
    return '<article class="card' + (withImg ? " cat" : "") + '">' + pic + (withImg ? '<div class="cat-body">' : "") +
      '<h3><a href="' + svcUrl(s) + '">' + esc(s.name) + "</a></h3><p>" + esc(s.headline) + '</p><a class="more" href="' + svcUrl(s) + '">Learn more<span class="sr"> about ' + esc(s.name) + "</span></a>" + (withImg ? "</div>" : "") + "</article>";
  }
  function catCard(c) {
    return '<a class="card cat" href="' + catUrl(c) + '">' + img(c.image, c.name, "thumb") + '<div class="cat-body"><h3>' + esc(c.name) + "</h3><p>" + esc(c.short) + '</p><span class="more">View services</span></div></a>';
  }
  function cta(title, text, slug) {
    return '<section class="cta"><div class="container"><h2>' + esc(title) + "</h2><p>" + esc(text) + '</p><a class="btn btn-yellow" href="' + quoteUrl(slug) + '">Get a Quote</a></div></section>';
  }
  function section(cls, inner) { return '<section class="section ' + cls + '"><div class="container">' + inner + "</div></section>"; }

  /* ---------- videos, portfolio, testimonials ---------- */
  function embedUrl(u) {
    u = String(u || "").trim();
    var m = u.match(/(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    if (m) { return "https://www.youtube-nocookie.com/embed/" + m[1]; }
    m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (m) { return "https://player.vimeo.com/video/" + m[1]; }
    return "";
  }
  function videoCard(v) {
    if (!v) { return ""; }
    var inner = "";
    if (v.file) {
      inner = '<video controls playsinline preload="metadata" aria-label="' + esc(v.title || "Video") + '"' + (v.poster ? ' poster="' + esc(v.poster) + '"' : "") +
        '><source src="' + esc(v.file) + '" type="video/mp4">Your browser cannot play this video.</video>';
    } else {
      var src = embedUrl(v.url);
      if (!src) { return ""; }
      inner = '<iframe src="' + esc(src) + '" title="' + esc(v.title || "Video") + '" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    }
    return '<div><div class="video">' + inner + "</div>" + (v.title ? "<p><strong>" + esc(v.title) + "</strong></p>" : "") + "</div>";
  }
  function portfolioCard(p) {
    if (!p || !p.title) { return ""; }
    var inner = img(p.image, p.title, "thumb") + "<h3>" + esc(p.title) + "</h3>" + (p.description ? "<p>" + esc(p.description) + "</p>" : "");
    if (p.link) { inner += '<a class="more" href="' + esc(p.link) + '" rel="noopener">View project</a>'; }
    return '<article class="card">' + inner + "</article>";
  }
  function testimonialCard(t) {
    if (!t || !t.quote) { return ""; }
    var who = [t.role, t.company].filter(Boolean).join(", ");
    return '<figure class="card quote" style="margin:0"><blockquote style="margin:0 0 16px"><p>' + esc(t.quote) + "</p></blockquote><footer>" +
      (t.image ? img(t.image, t.name || "Client") : "") + "<span><b>" + esc(t.name || "Client") + "</b>" + esc(who) + "</span></footer></figure>";
  }
  function gridOf(list, fn, cols) {
    var html = list.map(fn).join("");
    return html ? '<div class="grid ' + (cols || "c3") + '">' + html + "</div>" : "";
  }
  function forService(item, svc) { return item && (item.service === svc.slug); }
  function forCategory(item, svc) { return item && !item.service && item.category === svc.category; }

  /* ---------- header and footer ---------- */
  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) { return; }
    var items = cats.map(function (c) { return '<li><a href="' + catUrl(c) + '">' + esc(c.name) + "</a></li>"; }).join("");
    var chev = '<svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l5 5 5-5"/></svg>';
    el.className = "site-header";
    el.innerHTML = '<div class="container hdr">' +
      '<a class="brand" href="./" aria-label="' + esc(B.name) + ' home"><img src="' + esc(B.logo) + '" alt="' + esc(B.name) + '" width="' + (B.logoWidth || 96) + '" height="' + (B.logoHeight || 46) + '" onerror="this.onerror=null;this.src=\'' + esc(PH) + '\'"></a>' +
      '<nav id="nav" class="nav" aria-label="Main"><ul>' +
      '<li><a href="./" data-nav="home">Home</a></li>' +
      '<li class="dd"><a href="services" data-nav="services">Services</a><button type="button" class="dd-btn" aria-expanded="false" aria-label="Show service categories">' + chev + '</button><ul class="dd-menu">' + items + "</ul></li>" +
      '<li><a href="about" data-nav="about">About</a></li><li><a href="contact" data-nav="contact">Contact</a></li></ul></nav>' +
      '<div class="hdr-actions"><a class="btn btn-yellow quote-btn" href="' + quoteUrl() + '">Get a Quote</a>' +
      '<button type="button" class="burger" aria-expanded="false" aria-controls="nav" aria-label="Open menu"><span></span></button></div></div>';
  }

  function socialLinks() {
    var names = { facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", x: "X", linkedin: "LinkedIn", twitch: "Twitch", discord: "Discord" };
    return Object.keys(names).filter(function (k) { return SOC[k]; }).map(function (k) {
      return '<li><a href="' + esc(SOC[k]) + '" rel="noopener" target="_blank">' + names[k] + "</a></li>";
    }).join("");
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) { return; }
    var soc = socialLinks();
    el.className = "site-footer";
    el.innerHTML = '<div class="container"><div class="foot">' +
      '<div><img class="logo" src="' + esc(B.logo) + '" alt="' + esc(B.name) + '" width="' + (B.logoWidth || 96) + '" height="' + (B.logoHeight || 46) + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + esc(PH) + '\'"><p>' + esc(B.description) + "</p></div>" +
      '<div><h2>Services</h2><ul>' + cats.map(function (c) { return '<li><a href="' + catUrl(c) + '">' + esc(c.name) + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h2>Company</h2><ul><li><a href="./">Home</a></li><li><a href="services">All services</a></li><li><a href="about">About</a></li><li><a href="contact">Contact</a></li><li><a href="' + quoteUrl() + '">Get a Quote</a></li></ul></div>' +
      '<div><h2>Get in touch</h2><ul>' + (C.email ? '<li><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>" : "") +
      (C.location ? "<li>" + esc(C.location) + "</li>" : "") + (C.responseTime ? "<li>" + esc(C.responseTime) + "</li>" : "") + soc + "</ul></div>" +
      '</div><p class="copy">&copy; ' + new Date().getFullYear() + " " + esc(B.name) + ". All rights reserved.</p></div>";
  }

  /* ---------- forms ---------- */
  function renderForm(o) {
    o = o || {};
    var compact = !!o.compact;
    var catOpts = '<option value="">Select a category</option>' + cats.map(function (c) { return '<option value="' + esc(c.name) + '" data-slug="' + esc(c.slug) + '">' + esc(c.name) + "</option>"; }).join("");
    var budget = arr((S.forms || {}).budgetRanges).map(function (b) { return '<option value="' + esc(b) + '">' + esc(b) + "</option>"; }).join("");
    var h = '<form class="form js-form" method="post" novalidate><input type="hidden" name="_subject" value="New quote request - ' + esc(B.name) + '">' +
      '<input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<div class="row"><div><label for="f-name-' + esc(o.id) + '">Your name</label><input id="f-name-' + esc(o.id) + '" name="name" type="text" required autocomplete="name"></div>' +
      '<div><label for="f-email-' + esc(o.id) + '">Email address</label><input id="f-email-' + esc(o.id) + '" name="email" type="email" required autocomplete="email"></div></div>';
    if (compact) {
      h += '<input type="hidden" name="service_category" value="' + esc(o.categoryName || "") + '"><input type="hidden" name="service_needed" value="' + esc(o.serviceName || "") + '">';
    } else {
      h += '<div class="row"><div><label for="f-cat-' + esc(o.id) + '">Service category</label><select id="f-cat-' + esc(o.id) + '" name="service_category" class="js-cat">' + catOpts + "</select></div>" +
        '<div><label for="f-svc-' + esc(o.id) + '">Service needed</label><select id="f-svc-' + esc(o.id) + '" name="service_needed" class="js-svc"><option value="">Choose a category first</option></select></div></div>' +
        (budget ? '<div><label for="f-bud-' + esc(o.id) + '">Budget range <span class="opt">(optional)</span></label><select id="f-bud-' + esc(o.id) + '" name="budget">' + '<option value="">Prefer not to say</option>' + budget + "</select></div>" : "");
    }
    h += '<div><label for="f-msg-' + esc(o.id) + '">How can we help?</label><textarea id="f-msg-' + esc(o.id) + '" name="message" required></textarea></div>' +
      '<button class="btn btn-blue" type="submit">Send my request</button><p class="form-status" role="status" aria-live="polite"></p></form>';
    return h;
  }

  /* ---------- pages ---------- */
  function pageHome() {
    var H = S.home || {};
    var feat = arr(H.featured).map(function (s) { return find(svcs, s); }).filter(Boolean);
    var heroSrc = H.heroImage === undefined ? "images/hero/home-hero.jpg" : H.heroImage;
    var html = '<section class="hero"><div class="container hero-grid"><div><h1>' + esc(H.heroHeadline || B.tagline) + '</h1><p class="lead">' + esc(H.heroText) +
      '</p><div class="btn-row"><a class="btn btn-yellow" href="' + quoteUrl() + '">Get a Quote</a><a class="btn btn-line" href="services">Explore Services</a></div></div>' +
      '<div class="hero-mark" aria-hidden="true">' + (heroSrc ? '<img class="hero-pic" src="' + esc(heroSrc) + '" alt="" width="1200" height="1000" fetchpriority="high" onerror="this.style.display=\'none\'">' : '') + '<svg viewBox="0 0 200 160" fill="none"><path d="M20 40h40l30 42L150 5h32L100 120H72z" fill="#fff" fill-opacity=".16"/></svg><p>Set the goal.<br>Reach the goal.</p><div class="bars"><i></i><i></i></div></div></div></section>';
    html += section("", '<div class="section-head"><h2>Choose the help that fits you</h2><p class="lead">Pick the group that sounds like you and see the services built for it.</p></div><div class="grid c5">' + cats.map(catCard).join("") + "</div>");
    if (feat.length) {
      html += section("soft", '<div class="section-head"><h2>Featured services</h2><p class="lead">A few of the ways we help clients hit their goals.</p></div><div class="grid c3">' + feat.map(function (s) { return svcCard(s, true); }).join("") + '</div><div class="btn-row"><a class="btn btn-line" href="services">See all services</a></div>');
    }
    html += section(feat.length ? "" : "soft", '<div class="section-head"><h2>How we work</h2><p class="lead">A simple process, so you always know what comes next.</p></div>' + stepsHtml(D.process));
    var port = arr(S.portfolio), tests = arr(S.testimonials), vids = arr(S.videos);
    var proof = "";
    var pg = gridOf(port, portfolioCard, "c3"); if (pg) { proof += '<h3 class="sub">Recent work</h3>' + pg; }
    var vg = gridOf(vids.filter(function (v) { return v.featured !== false; }), videoCard, "c2"); if (vg) { proof += '<h3 class="sub">Watch our work</h3>' + vg; }
    var tg = gridOf(tests, testimonialCard, "c3"); if (tg) { proof += '<h3 class="sub">What clients say</h3>' + tg; }
    html += section("soft", '<div class="section-head"><h2>Our work and results</h2></div>' +
      (proof || soon("Client work and testimonials are coming soon", "We are adding portfolio samples, videos and client feedback. Ask us for relevant examples when you request a quote.")));
    html += cta("Ready to hit your goals?", "Tell us what you are working toward. " + (C.responseTime || ""), "");
    return { html: html, title: B.name + " | Digital Marketing That Helps You Hit Your Goals", desc: B.description };
  }

  function pageServices() {
    var html = '<section class="page-hero"><div class="container">' + crumbs([["Home", "./"], ["Services", ""]]) + "<h1>Our services</h1>" +
      '<p class="lead" style="max-width:720px">We organize our work into five categories, each built for a specific kind of client. Choose yours to see the services and how they help.</p></div></section>' +
      section("", '<div class="grid c5">' + cats.map(catCard).join("") + "</div>") +
      cta("Not sure where to start?", "Tell us your goal and we will point you to the right service.", "");
    return { html: html, title: "Our Services | " + B.name, desc: "Explore GoalGetters Digital services for e-commerce owners, authors, streamers, brands and growing businesses." };
  }

  function pageCategory(c) {
    var list = svcs.filter(function (s) { return s.category === c.slug; });
    var html = '<section class="page-hero"><div class="container"><div class="split has-img"><div>' + crumbs([["Home", "./"], ["Services", "services"], [c.name, ""]]) +
      "<h1>" + esc(c.headline) + '</h1><p class="lead">' + esc(c.intro) + '</p><div class="btn-row"><a class="btn btn-yellow" href="' + quoteUrl() + '">Get a Quote</a></div></div>' +
      img(c.image, c.name, "hero-img") + "</div></div></section>";
    html += section("", '<div class="section-head"><h2>' + esc(c.name) + '</h2></div>' + (list.length ? '<div class="grid c3">' + list.map(function (s) { return svcCard(s); }).join("") + "</div>" : soon("Services coming soon", "We are adding services to this category.")));
    if (arr(c.why).length) {
      html += section("soft", '<div class="section-head"><h2>Why choose us for this</h2></div><div class="grid c3">' + arr(c.why).map(function (w) { return '<div class="card"><h3>' + esc(w.title) + "</h3><p>" + esc(w.text) + "</p></div>"; }).join("") + "</div>");
    }
    var f = faqHtml(c.faq);
    if (f) { html += section("", '<div class="section-head"><h2>Common questions</h2></div><div class="narrow">' + f + "</div>"); }
    html += cta("Let's talk about your goals", "Request a quote for " + c.name + " and we will reply within 24 hours.", "");
    return { html: html, title: c.name + " | " + B.name, desc: c.intro };
  }

  function pageService(s) {
    var c = find(cats, s.category) || { name: "Services", slug: "" };
    var rel = arr(s.related).map(function (r) { return find(svcs, r); }).filter(Boolean).slice(0, 3);
    var html = '<section class="page-hero"><div class="container"><div class="split has-img"><div>' +
      crumbs([["Home", "./"], ["Services", "services"], [c.name, c.slug ? catUrl(c) : ""], [s.name, ""]]) +
      "<h1>" + esc(s.headline) + '</h1><p class="lead">' + esc(s.summary) + '</p><div class="btn-row"><a class="btn btn-yellow" href="' + quoteUrl(s.slug) + '">Get a Quote</a></div></div>' +
      img(s.image, s.name, "hero-img") + "</div></div></section>";
    var inc = arr(s.included);
    if (inc.length) {
      html += section("", '<div class="section-head"><h2>What is included</h2></div><ul class="checks two">' + inc.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>");
    }
    html += section("soft", '<div class="section-head"><h2>How it works</h2></div>' + stepsHtml(arr(s.process).length ? s.process : D.process));
    var ex = "";
    var pg = gridOf(arr(S.portfolio).filter(function (p) { return forService(p, s); }), portfolioCard, "c3"); if (pg) { ex += pg; }
    var vg = gridOf(arr(S.videos).filter(function (v) { return forService(v, s) || forCategory(v, s); }), videoCard, "c2"); if (vg) { ex += '<div style="margin-top:20px"></div>' + vg; }
    html += section("", '<div class="section-head"><h2>Examples</h2></div>' + (ex || soon("Examples coming soon", "We are adding samples for this service. Ask us for relevant work when you request a quote.")));
    var tg = gridOf(arr(S.testimonials).filter(function (t) { return forService(t, s) || forCategory(t, s); }), testimonialCard, "c3");
    if (tg) { html += section("soft", '<div class="section-head"><h2>What clients say</h2></div>' + tg); }
    html += section(tg ? "" : "soft", '<div class="price"><h2>Pricing</h2><h3>' + esc(s.pricingTitle || D.pricingTitle) + "</h3><p>" + esc(s.pricingText || D.pricingText) + '</p><a class="btn btn-yellow" href="' + quoteUrl(s.slug) + '">Get a Quote</a></div>');
    var f = faqHtml(arr(s.faq).length ? s.faq : D.faq);
    if (f) { html += section(tg ? "soft" : "", '<div class="section-head"><h2>Frequently asked questions</h2></div><div class="narrow">' + f + "</div>"); }
    if (rel.length) { html += section(tg ? "" : "soft", '<div class="section-head"><h2>Related services</h2></div><div class="grid c3">' + rel.map(function (s) { return svcCard(s); }).join("") + "</div>"); }
    html += '<section class="section"><div class="container narrow"><div class="section-head"><h2>Request a quote for ' + esc(s.name) + '</h2><p class="lead">' + esc(C.responseTime || "") + '</p></div><div class="formbox">' +
      renderForm({ compact: true, id: "svc", categoryName: c.name, serviceName: s.name }) + "</div></div></section>";
    return { html: html, title: (s.seoTitle || s.name) + " | " + B.name, desc: s.summary };
  }

  function pageAbout() {
    var A = S.about || {};
    var html = '<section class="page-hero"><div class="container">' + crumbs([["Home", "./"], ["About", ""]]) + "<h1>About " + esc(B.name) + "</h1></div></section>";
    html += section("", '<div class="narrow"><h2>The story behind the name</h2>' + arr(A.story).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>");
    if (arr(A.values).length) {
      html += section("soft", '<div class="section-head"><h2>What we stand for</h2></div><div class="grid c4">' + A.values.map(function (v) { return '<div class="card"><h3>' + esc(v.title) + "</h3><p>" + esc(v.text) + "</p></div>"; }).join("") + "</div>");
    }
    if (A.howWeWork) { html += section("", '<div class="narrow"><h2>How we work with clients</h2><p>' + esc(A.howWeWork) + "</p></div>"); }
    var team = arr(S.team).filter(function (m) { return m && m.name; });
    if (team.length) {
      html += section("soft", '<div class="section-head"><h2>Meet the team</h2></div><div class="grid c3">' + team.map(function (m) {
        return '<article class="card">' + img(m.image, m.name, "thumb") + "<h3>" + esc(m.name) + "</h3>" + (m.role ? "<p><strong>" + esc(m.role) + "</strong></p>" : "") + (m.bio ? "<p>" + esc(m.bio) + "</p>" : "") + "</article>";
      }).join("") + "</div>");
    }
    html += cta("Let's get in touch", "Tell us about your goals and we will reply within 24 hours.", "");
    return { html: html, title: "About Us | " + B.name, desc: "Meet GoalGetters Digital, the remote team behind marketing, creative and automation services built around your goals." };
  }

  function pageContact() {
    var quote = /(^|[?&])quote=1/.test(location.search);
    var links = "";
    if (C.email) { links += '<li><b>Email</b><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>"; }
    if (C.secondaryEmail) { links += '<li><b>Alternate email</b><a href="mailto:' + esc(C.secondaryEmail) + '">' + esc(C.secondaryEmail) + "</a></li>"; }
    if (C.whatsapp) { links += '<li><b>WhatsApp</b><a href="https://wa.me/' + esc(String(C.whatsapp).replace(/\D/g, "")) + '" rel="noopener">Message us on WhatsApp</a></li>'; }
    if (C.bookingUrl) { links += '<li><b>Discovery call</b><a href="' + esc(C.bookingUrl) + '" rel="noopener">Book a free call</a></li>'; }
    if (C.location) { links += "<li><b>Where we work</b>" + esc(C.location) + "</li>"; }
    if (C.responseTime) { links += "<li><b>Response time</b>" + esc(C.responseTime) + "</li>"; }
    var soc = socialLinks();
    var html = '<section class="page-hero"><div class="container">' + crumbs([["Home", "./"], ["Contact", ""]]) + "<h1>" + (quote ? "Get a quote" : "Contact us") + '</h1><p class="lead" style="max-width:680px">Tell us what you need. A few details is enough to start. ' + esc(C.responseTime || "") + "</p></div></section>" +
      section("", '<div class="contact-grid"><div class="formbox">' + renderForm({ id: "contact" }) + '</div><aside><h2>Other ways to reach us</h2><ul class="info-list">' + links + "</ul>" + (soc ? '<h3 class="sub">Follow us</h3><ul class="info-list">' + soc + "</ul>" : "") + "</aside></div>");
    return { html: html, title: "Contact and Get a Quote | " + B.name, desc: "Request a quote from GoalGetters Digital. Tell us your goal and we will reply within 24 hours." };
  }

  function pageThanks() {
    return { noindex: true, title: "Thank You | " + B.name, desc: "Thank you for contacting " + B.name + ".",
      html: '<section class="center-page"><div class="container narrow"><h1>Thank you. We have your request.</h1><p class="lead">' + esc(C.responseTime || "") + "</p>" +
        '<h2 class="sub">What happens next</h2><ol class="steps n3" style="text-align:left"><li><h3>We review</h3><p>We read your request and check what you need.</p></li><li><h3>We reply</h3><p>You hear from us by email with questions or next steps.</p></li><li><h3>You get a quote</h3><p>We send a clear scope and price so you can decide.</p></li></ol>' +
        '<div class="btn-row" style="justify-content:center"><a class="btn btn-blue" href="./">Back to home</a><a class="btn btn-line" href="services">Explore services</a></div></div></section>' };
  }

  function page404() {
    return { noindex: true, title: "Page Not Found | " + B.name, desc: "This page could not be found.",
      html: '<section class="center-page"><div class="container narrow"><div class="big404" aria-hidden="true">4<span>0</span>4</div><h1>We could not find that page</h1><p class="lead">The link may be old or mistyped. Head back to the homepage or browse our services.</p>' +
        '<div class="btn-row" style="justify-content:center"><a class="btn btn-blue" href="./">Back to homepage</a><a class="btn btn-line" href="services">Browse services</a></div></div></section>' };
  }

  /* ---------- meta tags ---------- */
  function setMeta(sel, attr, val, create) {
    var el = document.head.querySelector(sel);
    if (!el && create) {
      el = document.createElement(create.tag);
      Object.keys(create.attrs).forEach(function (k) { el.setAttribute(k, create.attrs[k]); });
      document.head.appendChild(el);
    }
    if (el) { el.setAttribute(attr, val); }
  }
  function applyMeta(p) {
    var path = location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    if (path.length > 1) { path = path.replace(/\/$/, ""); }
    var full = String(B.domain || "").replace(/\/$/, "") + path;
    var imgUrl = String(B.domain || "").replace(/\/$/, "") + "/" + (B.ogImage || "");
    document.title = p.title;
    setMeta('meta[name="description"]', "content", p.desc, { tag: "meta", attrs: { name: "description" } });
    setMeta('link[rel="canonical"]', "href", full, { tag: "link", attrs: { rel: "canonical" } });
    setMeta('meta[property="og:title"]', "content", p.title, { tag: "meta", attrs: { property: "og:title" } });
    setMeta('meta[property="og:description"]', "content", p.desc, { tag: "meta", attrs: { property: "og:description" } });
    setMeta('meta[property="og:url"]', "content", full, { tag: "meta", attrs: { property: "og:url" } });
    setMeta('meta[property="og:image"]', "content", imgUrl, { tag: "meta", attrs: { property: "og:image" } });
    setMeta('meta[property="og:type"]', "content", "website", { tag: "meta", attrs: { property: "og:type" } });
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image", { tag: "meta", attrs: { name: "twitter:card" } });
    var rb = document.head.querySelector('meta[name="robots"]');
    if (rb && !p.noindex) { rb.parentNode.removeChild(rb); }
    if (p.noindex) { setMeta('meta[name="robots"]', "content", "noindex, follow", { tag: "meta", attrs: { name: "robots" } }); }
    var fav = document.head.querySelector('link[rel="icon"]');
    if (!fav) { fav = document.createElement("link"); fav.rel = "icon"; document.head.appendChild(fav); }
    fav.href = B.favicon || "";
    if (!document.getElementById("ld-org")) {
      var ld = document.createElement("script");
      ld.type = "application/ld+json"; ld.id = "ld-org";
      ld.text = JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: B.name, url: B.domain, logo: String(B.domain || "").replace(/\/$/, "") + "/" + B.logo, email: C.email || undefined });
      document.head.appendChild(ld);
    }
  }

  /* ---------- run ---------- */
  function run() {
    var main = document.getElementById("main");
    if (!main) { return; }
    if (!window.SITE) {
      main.innerHTML = '<div class="container" style="padding:60px 20px"><h1>Site data could not load</h1><p>Check data/site-data.js for a missing comma, quote or bracket.</p></div>';
      return;
    }
    var type = main.getAttribute("data-page") || "home";
    var parts = location.pathname.replace(/\.html$/, "").split("/").filter(Boolean);
    var out;
    try {
      if (type === "home") { out = pageHome(); }
      else if (type === "services") { out = pageServices(); }
      else if (type === "about") { out = pageAbout(); }
      else if (type === "contact") { out = pageContact(); }
      else if (type === "thanks") { out = pageThanks(); }
      else if (type === "404") { out = page404(); }
      else if (type === "category") {
        var c = parts[0] === "services" ? find(cats, parts[1]) : null;
        out = c ? pageCategory(c) : page404();
      } else if (type === "service") {
        var s = parts[0] === "services" ? find(svcs, parts[2]) : null;
        out = (s && s.category === parts[1]) ? pageService(s) : page404();
      } else { out = page404(); }
      renderHeader();
      main.innerHTML = out.html;
      renderFooter();
      applyMeta(out);
    } catch (e) {
      main.innerHTML = '<div class="container" style="padding:60px 20px"><h1>' + esc(B.name) + '</h1><p>This page could not load. Please email <a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a>.</p></div>";
    }
    document.documentElement.setAttribute("data-rendered", "1");
  }
  run();
})();
