/* =====================================================================
   GOALGETTERS DIGITAL - SITE DATA
   This is the ONLY file you edit to change website content.
   Rules: keep every comma, quote and bracket exactly as shown.
   Text goes inside "double quotes". Empty text is "" and empty lists are [].
   ===================================================================== */
window.SITE = {

  /* ---------- BRAND ---------- */
  brand: {
    name: "GoalGetters Digital",
    tagline: "Digital marketing that helps you hit your goals.",
    description: "GoalGetters Digital is a remote digital marketing team helping e-commerce owners, authors, streamers and growing businesses win online.",
    domain: "https://goalgettersdigital.online",
    logo: "images/logo/logo.png",
    logoWidth: 900,
    logoHeight: 435,
    favicon: "images/logo/favicon.png",
    ogImage: "images/og/og-image.png",
    placeholderImage: "images/placeholders/placeholder.svg"
  },

  /* ---------- CONTACT DETAILS ---------- */
  contact: {
    email: "info@goalgettersdigital.online",
    secondaryEmail: "goalgetterdigitalhq@gmail.com",
    whatsapp: "",          /* digits only with country code, e.g. 2348012345678. Empty = hidden */
    bookingUrl: "",        /* paste a Calendly or Cal.com link. Empty = hidden */
    location: "We work remotely with clients worldwide.",
    responseTime: "We reply within 24 hours."
  },

  /* ---------- SOCIAL LINKS (empty = hidden) ---------- */
  social: {
    facebook: "https://www.facebook.com/@goalgettersdigitalhq",
    instagram: "",
    tiktok: "",
    youtube: "",
    x: "",
    linkedin: "",
    twitch: "",
    discord: ""
  },

  /* ---------- TRACKING IDs (empty = switched off) ---------- */
  tracking: {
    ga4Id: "",                       /* looks like G-XXXXXXXXXX */
    metaPixelId: "",                 /* numbers only, e.g. 123456789012345 */
    searchConsoleVerification: ""    /* the content value from Google's meta tag (optional) */
  },

  /* ---------- FORMS ---------- */
  forms: {
    endpoint: "https://formspree.io/f/YOUR_FORM_ID",   /* replace YOUR_FORM_ID (see UPDATE-GUIDE.md) */
    budgetRanges: ["Not sure yet", "Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000+"]
  },

  /* ---------- DEFAULTS USED BY EVERY SERVICE PAGE ---------- */
  defaults: {
    process: [
      { title: "Discover", text: "We learn your goals, your audience and what success looks like." },
      { title: "Plan", text: "We agree on scope, timeline and deliverables so there are no surprises." },
      { title: "Create", text: "We build and refine your work, with your feedback along the way." },
      { title: "Launch and track", text: "We go live and measure results so you can see what is working." }
    ],
    faq: [
      { q: "How long does it take?", a: "Timelines depend on the scope of your project. We confirm a clear schedule in your quote before any work starts." },
      { q: "How many revisions are included?", a: "Every project includes revision rounds so we can refine the work with your feedback. We confirm the exact number in your quote." },
      { q: "What do you need from me?", a: "A short brief about your goals, plus any existing assets such as logos, links or account access. We guide you through the rest." }
    ],
    pricingTitle: "Request a custom quote",
    pricingText: "Every project is different, so we price based on your goals, scope and timeline. Tell us what you need and we will reply within 24 hours with clear next steps."
  },

  /* ---------- HOMEPAGE ---------- */
  home: {
    heroHeadline: "Digital marketing that helps you hit your goals.",
    heroText: "GoalGetters Digital is a remote team of marketers, designers and automation specialists helping store owners, authors, streamers and growing businesses win online.",
    featured: ["ecommerce-marketing", "book-cover-design", "twitch-channel-growth", "ai-video-trailers", "seo-and-optimization", "ai-automation"]
  },

  /* ---------- ABOUT PAGE ---------- */
  about: {
    story: [
      "Every client comes to us with a goal: more sales, a published book, a growing channel, a business that runs more smoothly. The name GoalGetters says what we are here to do.",
      "Our logo tells the same story. The check mark stands for a goal set and the golden dot stands for a goal reached. We build marketing, creative and automation work around that idea.",
      "We are a remote team, so we work with clients around the world. Whatever your time zone, you get clear communication and a clear plan."
    ],
    values: [
      { title: "Results first", text: "Every recommendation ties back to your goals, not to vanity numbers." },
      { title: "Plain talk", text: "No jargon. You always know what we are doing and why." },
      { title: "Reliable delivery", text: "We agree on scope and timelines up front, then keep to them." },
      { title: "True partnership", text: "We treat your goals as our own and tell you honestly what will work." }
    ],
    howWeWork: "You tell us your goal. We reply within 24 hours with questions and next steps, agree a clear scope and quote, then deliver in stages so you can give feedback along the way."
  },

  /* ---------- TEAM (empty list = the team section is hidden) ----------
     To add a person, copy a block below, paste it inside the [ ] and upload their photo to images/team/
     { name: "Full Name", role: "Job title", bio: "One or two sentences.", image: "images/team/full-name.jpg" },
  */
  team: [],

  /* ---------- TESTIMONIALS (empty list = hidden / coming soon) ----------
     { name: "Client Name", role: "Role", company: "Company", quote: "What they said.", image: "images/testimonials/client-name.jpg", service: "book-cover-design", category: "book-and-author" },
     "service" and "category" are optional. Leave them "" to show the testimonial on the homepage only.
  */
  testimonials: [],

  /* ---------- PORTFOLIO (empty list = coming soon) ----------
     { title: "Project name", description: "One line about it.", image: "images/portfolio/project-name.jpg", service: "book-cover-design", category: "book-and-author", link: "" },
  */
  portfolio: [
    { title: "Tech store website design", description: "E-commerce store homepage design.", image: "images/portfolio/tech-store-website-design.jpg", service: "ecommerce-website-development", category: "ecommerce", link: "" },
    { title: "Custom clothing store design", description: "E-commerce store homepage design for a custom clothing brand.", image: "images/portfolio/custom-clothing-store-design.jpg", service: "ecommerce-website-development", category: "ecommerce", link: "" },
    { title: "Website landing page design", description: "Landing page design for a website build.", image: "images/portfolio/website-landing-page-design.jpg", service: "ecommerce-website-development", category: "ecommerce", link: "" },
    { title: "Online store order notifications", description: "Order alerts from a client's Shopify store.", image: "images/portfolio/shopify-order-notifications.jpg", service: "ecommerce-marketing", category: "ecommerce", link: "" },
    { title: "Store sales dashboard", description: "Sales overview from a client's Shopify store.", image: "images/portfolio/shopify-sales-dashboard.jpg", service: "ecommerce-marketing", category: "ecommerce", link: "" },
    { title: "Store homepage redesign", description: "Before and after of a store homepage redesign.", image: "images/portfolio/store-redesign-before-after-1.jpg", service: "ecommerce-store-design", category: "ecommerce", link: "" },
    { title: "Mobile store redesign", description: "Before and after of a mobile store redesign.", image: "images/portfolio/store-redesign-before-after-2.jpg", service: "ecommerce-store-design", category: "ecommerce", link: "" },
    { title: "Meta ads campaign setup", description: "Estimated results shown in Meta Ads Manager for a client's post.", image: "images/portfolio/meta-ads-estimated-results.jpg", service: "google-meta-ads-management", category: "ecommerce", link: "" },
    { title: "YouTube channel analytics", description: "Channel analytics from a creator client.", image: "images/portfolio/youtube-channel-analytics.jpg", service: "clip-editing", category: "streamer-solutions", link: "" },
    { title: "Twitch Partner invitation", description: "Partner Program invitation received by a streamer client.", image: "images/portfolio/twitch-partner-invite.jpg", service: "twitch-channel-growth", category: "streamer-solutions", link: "" }
  ],

  /* ---------- VIDEOS (empty list = hidden / coming soon) ----------
     Paste a normal YouTube or Vimeo link, or use a hosted file: file: "videos/name.mp4", poster: "videos/name.jpg" (instead of url).
     { title: "Video title", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", service: "ai-video-trailers", category: "creative-and-design", featured: true },
  */
  videos: [
    { title: "Online store website walkthrough", file: "videos/ecommerce-store-demo.mp4", poster: "videos/ecommerce-store-demo.jpg", service: "ecommerce-website-development", category: "ecommerce", featured: true },
    { title: "Website design walkthrough", file: "videos/website-development-demo.mp4", poster: "videos/website-development-demo.jpg", service: "ecommerce-website-development", category: "ecommerce", featured: true }
  ],

  /* ---------- CATEGORIES ---------- */
  categories: [
    {
      slug: "ecommerce",
      name: "E-commerce Solutions",
      short: "More sales, a better store and accurate tracking.",
      icon: "cart",
      audience: "Store owners",
      headline: "E-commerce solutions that grow your sales",
      intro: "From store design to ads and tracking, we help online store owners attract more buyers and understand exactly what drives revenue.",
      image: "images/categories/ecommerce.jpg",
      why: [
        { title: "Built around sales", text: "Every recommendation ties back to revenue, not vanity metrics." },
        { title: "Tracking first", text: "We make sure your data is accurate before we scale your ad spend." },
        { title: "One team", text: "Design, ads, email and tracking work together instead of in silos." }
      ],
      faq: [
        { q: "Which platforms do you work with?", a: "We work with Shopify, WooCommerce and other major platforms. Tell us what you use or what you are considering and we will advise." },
        { q: "Can you work on my existing store?", a: "Yes. We can improve a live store step by step without disrupting your sales." },
        { q: "Do I need a large budget?", a: "No. We scope every project to your stage and budget. Request a quote and we will propose options." },
        { q: "How soon will I hear back?", a: "We reply to every enquiry within 24 hours." }
      ]
    },
    {
      slug: "book-and-author",
      name: "Book and Author Services",
      short: "Write, polish, design and market your book.",
      icon: "book",
      audience: "Authors and publishers",
      headline: "Everything you need to write, publish and sell your book",
      intro: "Whether you are still writing or ready to launch, we help authors and publishers polish, design, publish and market books that find their readers.",
      image: "images/categories/book-and-author.jpg",
      why: [
        { title: "Made for authors", text: "We understand genres, readers and the realities of self-publishing." },
        { title: "Start anywhere", text: "Need only a cover or a full launch campaign? Pick the services you need." },
        { title: "A clear process", text: "You always know what happens next, from manuscript to launch day." }
      ],
      faq: [
        { q: "Can I hire you for just one part?", a: "Yes. Use a single service or combine several. We will recommend what fits your stage." },
        { q: "Do you work with all genres?", a: "Yes. We match the approach to your genre and your readers." },
        { q: "Can you help if I have not finished writing?", a: "Yes. We can support you from first draft through to launch." }
      ]
    },
    {
      slug: "streamer-solutions",
      name: "Streamer Solutions",
      short: "Grow your channel, brand it and land sponsors.",
      icon: "stream",
      audience: "Streamers and content creators",
      headline: "Level up your channel",
      intro: "Branding, growth, clips, community and sponsorship tools for streamers and content creators who want to be taken seriously.",
      image: "images/categories/streamer-solutions.jpg",
      why: [
        { title: "Creator first", text: "We design for how streamers and communities actually work." },
        { title: "Energy with polish", text: "Eye-catching visuals that still look professional to viewers and sponsors." },
        { title: "Whole-channel thinking", text: "Branding, clips, community and growth work together." }
      ],
      faq: [
        { q: "Do you work with YouTube and Kick creators too?", a: "Yes. Most of our services apply to any platform, not only Twitch." },
        { q: "Will my branding work across platforms?", a: "Yes. We deliver files sized for Twitch, YouTube, Discord and social media." },
        { q: "Can I start with just one service?", a: "Absolutely. Many creators start with branding or clips and add more later." }
      ]
    },
    {
      slug: "creative-and-design",
      name: "Creative and Design",
      short: "Graphics, video and branding that stand out.",
      icon: "palette",
      audience: "Small businesses and brands",
      headline: "Creative work that makes your brand hard to ignore",
      intro: "Graphics, video, motion and brand identity for businesses that want to look credible and get noticed.",
      image: "images/categories/creative-and-design.jpg",
      why: [
        { title: "Brand consistent", text: "Everything we make follows one clear look and feel." },
        { title: "Video ready", text: "Short-form video and motion built for today's feeds." },
        { title: "Flexible", text: "Order a single asset or a complete identity package." }
      ],
      faq: [
        { q: "What files will I receive?", a: "Web, print and social-ready formats, plus editable files where they apply. We confirm this in your quote." },
        { q: "Can you match my existing brand?", a: "Yes. Send us your logo, colors and fonts and we will keep everything consistent." },
        { q: "Do you offer ongoing design support?", a: "Yes. Ask about monthly support when you request your quote." }
      ]
    },
    {
      slug: "growth-and-automation",
      name: "Growth and Automation",
      short: "SEO, automation and analytics for growing businesses.",
      icon: "growth",
      audience: "Business owners",
      headline: "Systems that help your business grow while you work",
      intro: "SEO, AI automation, CRM and analytics that bring in more leads and save you hours every week.",
      image: "images/categories/growth-and-automation.jpg",
      why: [
        { title: "Practical, not jargon", text: "Plain-language plans you can act on." },
        { title: "Measured results", text: "Everything is tracked so you can see progress." },
        { title: "Automation that fits", text: "We automate what saves time and leave the rest alone." }
      ],
      faq: [
        { q: "How long does SEO take?", a: "SEO is a long-term channel. We explain what to expect and report progress regularly." },
        { q: "Do I need to buy new software?", a: "Often we can use tools you already have. We recommend only what is needed." },
        { q: "Can you connect my existing tools?", a: "In most cases, yes. Tell us what you use and we will check." }
      ]
    }
  ],

  /* ---------- SERVICES ----------
     To add a service, copy one block, paste it at the end of the list (add a comma after the block before it),
     change every field, and upload images/services/<slug>.jpg
     category = the slug of one category above. related = slugs of 2 or 3 other services.
     Optional extras per service: faq: [ { q: "", a: "" } ], process: [ { title: "", text: "" } ],
     pricingTitle: "", pricingText: ""
  */
  services: [
    /* ===== E-COMMERCE SOLUTIONS ===== */
    {
      slug: "ecommerce-marketing", category: "ecommerce", name: "E-commerce Marketing",
      headline: "Turn store visitors into repeat customers",
      seoTitle: "E-commerce Marketing Services",
      summary: "Traffic that does not convert wastes budget. We build a plan across search, social, ads and email that brings in buyers and keeps them coming back.",
      included: ["Store and audience review", "Channel strategy for ads, email, social and SEO", "Campaign setup and creative direction", "Monthly performance reporting", "Ongoing optimization recommendations"],
      related: ["google-meta-ads-management", "email-sms-marketing", "conversion-tracking-meta-pixel"],
      image: "images/services/ecommerce-marketing.jpg"
    },
    {
      slug: "ecommerce-website-development", category: "ecommerce", name: "E-commerce Website Development",
      headline: "An online store built to sell, not just to look good",
      seoTitle: "E-commerce Website Development",
      summary: "A slow or clumsy store loses sales. We build fast, mobile-friendly online stores on the platform that suits your products and budget.",
      included: ["Platform recommendation and setup", "Product, collection and checkout configuration", "Payment and shipping setup", "Mobile-first, speed-optimized build", "Analytics and pixel installation", "Launch testing and handover"],
      related: ["ecommerce-store-design", "conversion-tracking-meta-pixel", "product-photography"],
      image: "images/services/ecommerce-website-development.jpg"
    },
    {
      slug: "ecommerce-store-design", category: "ecommerce", name: "E-commerce Store Design",
      headline: "Store design that makes shoppers want to buy",
      seoTitle: "Shopify and E-commerce Store Design",
      summary: "Shoppers leave stores that feel confusing or untrustworthy. We redesign your layout, product pages and checkout flow so buying feels easy.",
      included: ["Store and competitor review", "Homepage and navigation design", "Product page layout", "Cart and checkout flow improvements", "Mobile design review"],
      related: ["ecommerce-website-development", "conversion-tracking-meta-pixel", "product-photography"],
      image: "images/services/ecommerce-store-design.jpg"
    },
    {
      slug: "conversion-tracking-meta-pixel", category: "ecommerce", name: "Conversion Tracking and Meta Pixel Setup",
      headline: "Know exactly which ads make you money",
      seoTitle: "Conversion Tracking and Meta Pixel Setup",
      summary: "Without accurate tracking, ad budgets are guesses. We set up Meta Pixel, GA4 and conversion events so every sale is tied to its source.",
      included: ["Meta Pixel setup", "GA4 and Google Tag Manager configuration", "Purchase, add-to-cart and checkout event tracking", "Testing and verification of every event", "A simple tracking report you can read"],
      related: ["google-meta-ads-management", "analytics-and-tracking-dashboards", "ecommerce-store-design"],
      image: "images/services/conversion-tracking-meta-pixel.jpg"
    },
    {
      slug: "google-meta-ads-management", category: "ecommerce", name: "Google and Meta Ads Management",
      headline: "Ads that bring buyers, not just clicks",
      seoTitle: "Google and Meta Ads Management",
      summary: "Unmanaged ads burn through budget. We plan, launch and optimize Google and Meta campaigns around your sales goals and track every result.",
      included: ["Account and campaign audit", "Audience and offer strategy", "Ad creative and copy", "Campaign setup and daily monitoring", "Monthly reporting with clear next steps"],
      related: ["conversion-tracking-meta-pixel", "ecommerce-marketing", "short-form-video-ads"],
      image: "images/services/google-meta-ads-management.jpg"
    },
    {
      slug: "email-sms-marketing", category: "ecommerce", name: "Email and SMS Marketing",
      headline: "Bring customers back with messages they open",
      seoTitle: "Email and SMS Marketing for Online Stores",
      summary: "Most first-time buyers never return. We build email and SMS flows that recover abandoned carts, welcome new customers and drive repeat orders.",
      included: ["Welcome and abandoned-cart flows", "Post-purchase and win-back flows", "Campaign design and copywriting", "List growth and signup forms", "Reporting and optimization"],
      related: ["ecommerce-marketing", "crm-setup", "ai-automation"],
      image: "images/services/email-sms-marketing.jpg"
    },
    {
      slug: "product-photography", category: "ecommerce", name: "Product Photography",
      headline: "Product photos that help your products sell",
      seoTitle: "Product Photography for Online Stores",
      summary: "Weak photos cost sales. We deliver clean, consistent product imagery that builds trust and shows your products at their best.",
      included: ["Shot list and style guide", "Product images on clean or lifestyle backgrounds", "Retouching and color correction", "Web-optimized files for your store", "Social-ready crops"],
      related: ["ecommerce-store-design", "ecommerce-website-development", "graphic-design"],
      faq: [
        { q: "How does it work if we are in different countries?", a: "We agree the best approach for your products during the quote. That could be shipping samples, editing photos you already have, or a mix of both." },
        { q: "How long does it take?", a: "It depends on the number of products. We confirm a clear schedule in your quote before any work starts." },
        { q: "How many revisions are included?", a: "Every project includes revision rounds. We confirm the exact number in your quote." }
      ],
      image: "images/services/product-photography.jpg"
    },

    /* ===== BOOK AND AUTHOR SERVICES ===== */
    {
      slug: "book-marketing", category: "book-and-author", name: "Book Marketing",
      headline: "Get your book in front of readers who will buy it",
      seoTitle: "Book Marketing for Authors",
      summary: "Great books go unnoticed without a plan. We build a marketing strategy and campaigns that put your book in front of the right readers.",
      included: ["Reader and genre research", "Marketing plan and calendar", "Social media and content support", "Ad campaign setup", "Progress reporting"],
      related: ["book-launch-campaigns", "author-websites", "ai-book-trailers"],
      image: "images/services/book-marketing.jpg"
    },
    {
      slug: "book-writing-and-editing", category: "book-and-author", name: "Book Writing and Editing",
      headline: "Write it, polish it, finish it",
      seoTitle: "Book Writing and Editing Services",
      summary: "A manuscript needs more than a first draft. Our writers and editors help you shape, edit and polish your book so it is ready for readers.",
      included: ["Manuscript assessment", "Developmental editing", "Line editing and copyediting", "Proofreading", "Writing support on request"],
      related: ["book-cover-design", "amazon-kdp-publishing", "book-marketing"],
      image: "images/services/book-writing-and-editing.jpg"
    },
    {
      slug: "book-cover-design", category: "book-and-author", name: "Book Cover Design",
      headline: "A cover that makes readers pick up your book",
      seoTitle: "Book Cover Design for Authors",
      summary: "Readers judge a book by its cover. We design genre-ready covers for print and digital that stand out as thumbnails and on the shelf.",
      included: ["Genre and competitor research", "Front cover concepts", "Full wrap with spine and back cover for print", "eBook cover files", "Revision rounds"],
      related: ["amazon-kdp-publishing", "book-marketing", "ai-book-trailers"],
      image: "images/services/book-cover-design.jpg"
    },
    {
      slug: "ai-book-trailers", category: "book-and-author", name: "AI Book Trailers",
      headline: "A trailer that makes your story hard to scroll past",
      seoTitle: "AI Book Trailers",
      summary: "Text posts rarely sell books. We turn your story into a short cinematic trailer made for social media, your author page and ads.",
      included: ["Concept and script from your book", "AI-generated visuals and motion", "Music and voiceover", "Cuts for Reels, TikTok, YouTube and your website", "Revision rounds"],
      related: ["book-launch-campaigns", "book-marketing", "ai-video-trailers"],
      image: "images/services/ai-book-trailers.jpg"
    },
    {
      slug: "author-websites", category: "book-and-author", name: "Author Websites",
      headline: "A home for your books and your readers",
      seoTitle: "Author Website Design",
      summary: "Readers who love your book will look you up. We build a clean author website with your books, bio, email signup and buy links.",
      included: ["Home, About, Books and Contact pages", "Email list signup", "Retailer buy links", "Fast, mobile-first design", "Search engine basics"],
      related: ["book-marketing", "book-cover-design", "seo-and-optimization"],
      image: "images/services/author-websites.jpg"
    },
    {
      slug: "amazon-kdp-publishing", category: "book-and-author", name: "Amazon KDP Publishing and Formatting",
      headline: "Publish on Amazon the right way",
      seoTitle: "Amazon KDP Publishing and Formatting",
      summary: "Formatting mistakes and listing errors hurt sales. We format your book and set up your KDP listing correctly for ebook, paperback and hardcover.",
      included: ["Interior formatting for print and ebook", "KDP account and listing setup", "Categories and keywords", "Cover file preparation", "Final proof check"],
      related: ["book-cover-design", "book-writing-and-editing", "book-launch-campaigns"],
      image: "images/services/amazon-kdp-publishing.jpg"
    },
    {
      slug: "book-launch-campaigns", category: "book-and-author", name: "Book Launch Campaigns",
      headline: "A launch week that gets your book noticed",
      seoTitle: "Book Launch Campaigns",
      summary: "A quiet launch is hard to recover from. We plan and run a coordinated campaign across email, social and ads to build momentum from day one.",
      included: ["Launch timeline and plan", "Pre-launch audience building", "Launch graphics and social content", "Ad and email support", "Post-launch review"],
      related: ["book-marketing", "ai-book-trailers", "amazon-kdp-publishing"],
      image: "images/services/book-launch-campaigns.jpg"
    },

    /* ===== STREAMER SOLUTIONS ===== */
    {
      slug: "twitch-channel-growth", category: "streamer-solutions", name: "Twitch Channel Growth and Social Promotion",
      headline: "Grow your Twitch channel with a plan, not luck",
      seoTitle: "Twitch Channel Growth and Social Promotion",
      summary: "Great streams stay unseen without promotion. We build a growth plan and promote your channel across social platforms to reach new viewers.",
      included: ["Channel audit", "Content and schedule strategy", "Social promotion plan", "Cross-platform posting support", "Monthly progress review"],
      related: ["clip-editing", "channel-branding", "discord-server-setup"],
      image: "images/services/twitch-channel-growth.jpg"
    },
    {
      slug: "channel-branding", category: "streamer-solutions", name: "Channel Branding",
      headline: "A channel that looks like a real brand",
      seoTitle: "Twitch Channel Branding: Panels, Banners and Emotes",
      summary: "Mismatched graphics make a channel look amateur. We create panels, banners and emotes that give your stream a consistent, professional identity.",
      included: ["Profile banner and offline screen", "Info panels", "Emotes and badges", "Brand colors and style guide", "Files sized for Twitch, YouTube and Discord"],
      related: ["stream-overlays-and-alerts", "discord-server-setup", "media-kits-and-sponsorship-decks"],
      image: "images/services/channel-branding.jpg"
    },
    {
      slug: "stream-overlays-and-alerts", category: "streamer-solutions", name: "Stream Overlays and Alerts",
      headline: "Overlays and alerts that keep viewers engaged",
      seoTitle: "Custom Stream Overlays and Alerts",
      summary: "Generic overlays blend in. We design custom overlays, scenes and alerts that match your brand and work with your streaming software.",
      included: ["Starting, BRB and ending scenes", "Webcam and game overlays", "Custom alerts", "Setup files for OBS and Streamlabs", "A simple setup guide"],
      related: ["channel-branding", "clip-editing", "motion-graphics"],
      image: "images/services/stream-overlays-and-alerts.jpg"
    },
    {
      slug: "clip-editing", category: "streamer-solutions", name: "Clip Editing for YouTube and TikTok",
      headline: "Turn stream highlights into content that spreads",
      seoTitle: "Clip Editing for YouTube and TikTok",
      summary: "Your best moments disappear when the stream ends. We edit highlights into short clips and videos for YouTube and TikTok.",
      included: ["Highlight selection", "Vertical and horizontal edits", "Captions and effects", "Branded intro and outro", "Platform-ready exports"],
      related: ["twitch-channel-growth", "short-form-video-ads", "channel-branding"],
      image: "images/services/clip-editing.jpg"
    },
    {
      slug: "discord-server-setup", category: "streamer-solutions", name: "Discord Server Setup",
      headline: "A Discord community people want to join",
      seoTitle: "Discord Server Setup for Streamers and Brands",
      summary: "An empty or messy server feels dead. We set up roles, channels, rules and bots so your community is organized and welcoming from day one.",
      included: ["Channel and category structure", "Roles and permissions", "Rules and welcome flow", "Bot setup", "Server branding"],
      related: ["channel-branding", "twitch-channel-growth", "ai-automation"],
      image: "images/services/discord-server-setup.jpg"
    },
    {
      slug: "media-kits-and-sponsorship-decks", category: "streamer-solutions", name: "Media Kits and Sponsorship Pitch Decks",
      headline: "Pitch sponsors with confidence",
      seoTitle: "Media Kits and Sponsorship Pitch Decks for Creators",
      summary: "Brands pass on creators who cannot show their value. We build a professional media kit and pitch deck that presents your audience, content and rates.",
      included: ["Media kit design", "Sponsorship pitch deck", "Audience and content highlights", "Rate card layout", "Editable files for future updates"],
      related: ["channel-branding", "graphic-design", "twitch-channel-growth"],
      image: "images/services/media-kits-and-sponsorship-decks.jpg"
    },

    /* ===== CREATIVE AND DESIGN ===== */
    {
      slug: "graphic-design", category: "creative-and-design", name: "Graphic Design",
      headline: "Design that makes your brand look credible",
      seoTitle: "Graphic Design Services",
      summary: "Inconsistent visuals weaken trust. We create social graphics, ads, flyers and marketing materials that look professional and on brand.",
      included: ["Social media graphics", "Ad and banner creatives", "Flyers, brochures and presentations", "Brand-consistent templates", "Print and web ready files"],
      related: ["logo-and-brand-identity", "short-form-video-ads", "motion-graphics"],
      image: "images/services/graphic-design.jpg"
    },
    {
      slug: "ai-video-trailers", category: "creative-and-design", name: "AI Video Trailers",
      headline: "Videos that show your product in action",
      seoTitle: "AI Video Trailers for Products and Marketing",
      summary: "Static images struggle to hold attention. We produce AI-powered video trailers that present your product or brand in a few punchy seconds.",
      included: ["Concept and script", "AI-generated visuals and motion", "Music and voiceover", "Cuts for social, ads and your website", "Revision rounds"],
      related: ["short-form-video-ads", "motion-graphics", "ai-book-trailers"],
      image: "images/services/ai-video-trailers.jpg"
    },
    {
      slug: "logo-and-brand-identity", category: "creative-and-design", name: "Logo and Brand Identity",
      headline: "A brand identity people remember",
      seoTitle: "Logo and Brand Identity Design",
      summary: "A forgettable logo makes a business easy to ignore. We design logos and complete identity systems with colors, fonts and usage rules.",
      included: ["Discovery and brand questions", "Logo concepts", "Color palette and typography", "Logo files in every format you need", "Brand guidelines"],
      related: ["graphic-design", "motion-graphics", "channel-branding"],
      image: "images/services/logo-and-brand-identity.jpg"
    },
    {
      slug: "motion-graphics", category: "creative-and-design", name: "Motion Graphics",
      headline: "Add motion that holds attention",
      seoTitle: "Motion Graphics and Animated Logos",
      summary: "Still visuals get scrolled past. We animate logos, titles, explainers and social content to catch the eye and communicate faster.",
      included: ["Animated logos and intros", "Title and lower-third animations", "Explainer and social animations", "Brand-matched style", "Exports for every platform"],
      related: ["short-form-video-ads", "ai-video-trailers", "stream-overlays-and-alerts"],
      image: "images/services/motion-graphics.jpg"
    },
    {
      slug: "short-form-video-ads", category: "creative-and-design", name: "Short-Form Video Ads",
      headline: "Short videos built to stop the scroll",
      seoTitle: "Short-Form Video Ads for Reels, TikTok and Shorts",
      summary: "Weak ad creative wastes ad spend. We make short vertical video ads for Reels, TikTok and Shorts designed to hook viewers and drive action.",
      included: ["Hook and script development", "Vertical video production and editing", "Captions and sound design", "Multiple versions for testing", "Platform-ready exports"],
      related: ["google-meta-ads-management", "ai-video-trailers", "motion-graphics"],
      image: "images/services/short-form-video-ads.jpg"
    },

    /* ===== GROWTH AND AUTOMATION ===== */
    {
      slug: "seo-and-optimization", category: "growth-and-automation", name: "SEO and Optimization",
      headline: "Get found by people already searching for you",
      seoTitle: "SEO and Website Optimization Services",
      summary: "If customers cannot find you on Google, they find your competitors. We improve your site's technical health, content and search rankings.",
      included: ["Technical SEO audit", "Keyword research", "On-page optimization", "Content recommendations", "Monthly progress reporting"],
      related: ["local-seo-google-business-profile", "analytics-and-tracking-dashboards", "author-websites"],
      image: "images/services/seo-and-optimization.jpg"
    },
    {
      slug: "local-seo-google-business-profile", category: "growth-and-automation", name: "Local SEO and Google Business Profile",
      headline: "Show up when local customers search",
      seoTitle: "Local SEO and Google Business Profile Optimization",
      summary: "Local customers choose the businesses they see first. We optimize your Google Business Profile and local listings to win nearby searches.",
      included: ["Google Business Profile setup and optimization", "Local keyword research", "Citation and listing cleanup", "Review strategy", "Local performance reporting"],
      related: ["seo-and-optimization", "analytics-and-tracking-dashboards", "ai-chatbots-and-lead-follow-up"],
      image: "images/services/local-seo-google-business-profile.jpg"
    },
    {
      slug: "ai-automation", category: "growth-and-automation", name: "AI Automation",
      headline: "Automate the work that slows you down",
      seoTitle: "AI Automation for Small Businesses",
      summary: "Repetitive tasks eat hours every week. We map your workflows and automate them with AI and no-code tools so your team can focus on growth.",
      included: ["Workflow review", "Automation design", "Tool integration", "Testing and documentation", "Team walkthrough"],
      related: ["ai-chatbots-and-lead-follow-up", "crm-setup", "email-sms-marketing"],
      image: "images/services/ai-automation.jpg"
    },
    {
      slug: "ai-chatbots-and-lead-follow-up", category: "growth-and-automation", name: "AI Chatbots and Lead Follow-Up",
      headline: "Answer every lead the moment it arrives",
      seoTitle: "AI Chatbots and Lead Follow-Up",
      summary: "Slow replies lose customers. We set up AI chatbots and automatic follow-up so every inquiry gets a fast, helpful response.",
      included: ["Chatbot conversation design", "Website or social media installation", "Lead capture and routing", "Automated follow-up sequences", "Testing and handover"],
      related: ["ai-automation", "crm-setup", "local-seo-google-business-profile"],
      image: "images/services/ai-chatbots-and-lead-follow-up.jpg"
    },
    {
      slug: "crm-setup", category: "growth-and-automation", name: "CRM Setup",
      headline: "One place for every customer and lead",
      seoTitle: "CRM Setup and Customization",
      summary: "Leads get lost in spreadsheets and inboxes. We set up a CRM that tracks every contact, deal and follow-up in one clear system.",
      included: ["CRM selection and setup", "Pipeline and stage design", "Data import and cleanup", "Email and form integration", "Team training"],
      related: ["ai-chatbots-and-lead-follow-up", "ai-automation", "email-sms-marketing"],
      image: "images/services/crm-setup.jpg"
    },
    {
      slug: "analytics-and-tracking-dashboards", category: "growth-and-automation", name: "Analytics and Tracking Dashboards",
      headline: "See what is working in one dashboard",
      seoTitle: "Analytics and Tracking Dashboards (GA4 and Tag Manager)",
      summary: "Scattered numbers hide what drives results. We set up GA4 and Tag Manager and build clear dashboards for the metrics that matter.",
      included: ["GA4 property setup", "Google Tag Manager configuration", "Conversion and event tracking", "Custom reporting dashboard", "Walkthrough of your numbers"],
      related: ["conversion-tracking-meta-pixel", "seo-and-optimization", "google-meta-ads-management"],
      image: "images/services/analytics-and-tracking-dashboards.jpg"
    }
  ]
};
