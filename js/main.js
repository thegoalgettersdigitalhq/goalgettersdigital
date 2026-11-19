/* GoalGetters Digital - behavior: menu, forms, tracking. No edits needed. */
(function () {
  "use strict";
  var S = window.SITE || {};
  var T = S.tracking || {};
  var cats = Array.isArray(S.categories) ? S.categories : [];
  var svcs = Array.isArray(S.services) ? S.services : [];

  /* ---------- tracking (only loads what has an ID) ---------- */
  function track(name, params) {
    try { if (typeof window.gtag === "function") { window.gtag("event", name, params || {}); } } catch (e) { /* ignore */ }
  }
  function loadTracking() {
    try {
      if (T.ga4Id && /^G-[A-Z0-9]+$/i.test(T.ga4Id)) {
        var g = document.createElement("script");
        g.async = true; g.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(T.ga4Id);
        document.head.appendChild(g);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag("js", new Date());
        window.gtag("config", T.ga4Id);
      }
      if (T.metaPixelId && /^\d+$/.test(T.metaPixelId)) {
        /* standard Meta Pixel loader */
        (function (f, b, e, v, n, t, s) {
          if (f.fbq) { return; }
          n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
          if (!f._fbq) { f._fbq = n; }
          n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
          t = b.createElement(e); t.async = true; t.src = v;
          s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
        window.fbq("init", T.metaPixelId);
        window.fbq("track", "PageView");
      }
      if (T.searchConsoleVerification) {
        var m = document.createElement("meta");
        m.name = "google-site-verification"; m.content = T.searchConsoleVerification;
        document.head.appendChild(m);
      }
    } catch (e) { /* tracking must never break the page */ }
  }

  /* ---------- menu ---------- */
  function setupNav() {
    var path = location.pathname.replace(/\.html$/, "").replace(/\/$/, "");
    var key = path === "" || path === "/index" ? "home" : path.split("/")[1];
    var links = document.querySelectorAll("[data-nav]");
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute("data-nav") === key) { links[i].setAttribute("aria-current", "page"); }
    }
    var skip = document.querySelector(".skip");
    if (skip) { skip.setAttribute("href", location.pathname + location.search + "#main"); }
  }
  function closeMenus() {
    var nav = document.getElementById("nav"), burger = document.querySelector(".burger");
    if (nav) { nav.classList.remove("open"); }
    if (burger) { burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Open menu"); }
    var dds = document.querySelectorAll(".dd.open");
    for (var i = 0; i < dds.length; i++) {
      dds[i].classList.remove("open");
      var b = dds[i].querySelector(".dd-btn"); if (b) { b.setAttribute("aria-expanded", "false"); }
    }
  }
  document.addEventListener("click", function (e) {
    var t = e.target;
    var burger = t.closest ? t.closest(".burger") : null;
    if (burger) {
      var nav = document.getElementById("nav");
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      return;
    }
    var ddb = t.closest ? t.closest(".dd-btn") : null;
    if (ddb) {
      var li = ddb.parentNode;
      var isOpen = li.classList.toggle("open");
      ddb.setAttribute("aria-expanded", isOpen ? "true" : "false");
      return;
    }
    if (!(t.closest && t.closest(".site-header"))) { closeMenus(); }
    var a = t.closest ? t.closest("a.btn") : null;
    if (a) { track("cta_click", { link_text: (a.textContent || "").trim(), link_url: a.getAttribute("href") || "" }); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenus(); } });

  /* ---------- forms ---------- */
  function fillServices(form, catName, selected) {
    var sel = form.querySelector(".js-svc");
    if (!sel) { return; }
    var slug = "";
    for (var i = 0; i < cats.length; i++) { if (cats[i].name === catName) { slug = cats[i].slug; } }
    if (!slug) { sel.innerHTML = '<option value="">Choose a category first</option>'; return; }
    var html = '<option value="">Select a service</option>';
    svcs.filter(function (s) { return s.category === slug; }).forEach(function (s) {
      html += '<option value="' + s.name.replace(/"/g, "&quot;") + '"' + (s.name === selected ? " selected" : "") + ">" + s.name.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</option>";
    });
    html += '<option value="Not sure yet">Not sure yet</option>';
    sel.innerHTML = html;
  }
  function setupForms() {
    var forms = document.querySelectorAll(".js-form");
    var qs = new URLSearchParams(location.search);
    var pre = null;
    var want = qs.get("service");
    for (var k = 0; k < svcs.length; k++) { if (svcs[k].slug === want) { pre = svcs[k]; } }
    for (var i = 0; i < forms.length; i++) {
      (function (form) {
        var cat = form.querySelector(".js-cat");
        if (!cat) { return; }
        cat.addEventListener("change", function () { fillServices(form, cat.value, ""); });
        if (pre) {
          for (var j = 0; j < cats.length; j++) { if (cats[j].slug === pre.category) { cat.value = cats[j].name; } }
          fillServices(form, cat.value, pre.name);
        }
      })(forms[i]);
    }
  }
  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (!f.classList || !f.classList.contains("js-form")) { return; }
    e.preventDefault();
    var status = f.querySelector(".form-status"), btn = f.querySelector('button[type="submit"]');
    function say(msg, cls) { if (status) { status.textContent = msg; status.className = "form-status " + (cls || ""); } }
    var email = (S.contact || {}).email || "";
    var name = f.querySelector('[name="name"]'), mail = f.querySelector('[name="email"]'), msg = f.querySelector('[name="message"]');
    if (!name.value.trim() || !mail.value.trim() || !msg.value.trim()) { say("Please fill in your name, email and message.", "err"); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail.value.trim())) { say("Please enter a valid email address.", "err"); mail.focus(); return; }
    var ep = (S.forms || {}).endpoint || "";
    if (!ep || ep.indexOf("YOUR_FORM_ID") > -1) { say("This form is not connected yet. Please email us at " + email + " instead.", "err"); return; }
    if (f.querySelector('[name="_gotcha"]').value) { return; }
    btn.disabled = true; say("Sending...", "");
    fetch(ep, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } }).then(function (r) {
      if (!r.ok) { throw new Error("bad response"); }
      try { sessionStorage.setItem("gg_lead", "1"); } catch (x) { /* ignore */ }
      window.location.href = "thank-you";
    }).catch(function () {
      btn.disabled = false;
      say("Sorry, that did not send. Please try again or email us at " + email + ".", "err");
    });
  });

  /* ---------- conversion on the thank-you page ---------- */
  function thankYouConversion() {
    var main = document.getElementById("main");
    if (!main || main.getAttribute("data-page") !== "thanks") { return; }
    try {
      if (sessionStorage.getItem("gg_lead") === "1") {
        sessionStorage.removeItem("gg_lead");
        track("generate_lead", { form_name: "quote_request" });
        if (typeof window.fbq === "function") { window.fbq("track", "Lead"); }
      }
    } catch (e) { /* ignore */ }
  }

  loadTracking();
  setupNav();
  setupForms();
  thankYouConversion();
})();
