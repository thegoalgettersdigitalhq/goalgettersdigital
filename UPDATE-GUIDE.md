# GoalGetters Digital: Update Guide (no coding needed)

Everything you can change lives in ONE file: `data/site-data.js`.
Images live in the `images/` folder. You never touch the page files.

## Golden rules
1. Text goes inside "double quotes". Do not use a double quote inside your text (use a single quote ' instead).
2. Every item in a list ends with a comma, except the last one.
3. File names are lowercase with dashes, no spaces: `book-cover-1.jpg`. Capital letters break images on the live site.
4. Edit `data/site-data.js` in GitHub (open the file, click the pencil icon, edit, then "Commit changes"). Vercel updates the site in about a minute.
5. Easiest way: send me the new files and your current `data/site-data.js` in chat and say where each should go. I will return the finished files.

## Connect your contact form (Formspree), one time
1. Go to formspree.io and create a free account (use goalgetterdigitalhq@gmail.com so notifications reach you before your domain email exists).
2. Click New Form, name it "GoalGetters Website", and copy the form link. It looks like `https://formspree.io/f/xyzabcde`.
3. In `data/site-data.js`, find `endpoint:` under `forms` and replace the whole link. Commit.
4. In Formspree, open the form's Settings and set the email address that receives submissions.
5. Send a test message from your live site. Formspree asks you to confirm the first submission.

## Turn on tracking
In `data/site-data.js`, under `tracking`:
- GA4: paste your Measurement ID (starts with G-) into `ga4Id`.
- Meta Pixel: paste the numbers-only Pixel ID into `metaPixelId`.
- Search Console: easiest is to verify by DNS record at your domain registrar. Or choose "HTML file" verification, download the file Google gives you, and upload it to the root folder (next to index.html). The `searchConsoleVerification` field is optional.
Form sends count as conversions on the thank-you page automatically.

## Add a testimonial
1. (Optional) Upload a photo to `images/testimonials/` named like `jane-doe.jpg` (square, 200 x 200 px).
2. In `data/site-data.js`, find `testimonials: [` and put this between the brackets:
```
{ name: "Jane Doe", role: "Founder", company: "Her Brand", quote: "What she said.", image: "images/testimonials/jane-doe.jpg", service: "book-cover-design", category: "book-and-author" },
```
Leave `service` and `category` as "" to show it on the homepage only. No photo? Delete the `image:` part.

## Add a portfolio item
1. Upload `images/portfolio/project-name.jpg` (1200 x 900 px, under 250 KB).
2. Put this inside `portfolio: [ ]`:
```
{ title: "Project name", description: "One line about it.", image: "images/portfolio/project-name.jpg", service: "book-cover-design", category: "book-and-author", link: "" },
```
It appears on the homepage and on the matching service page.

## Add a video
Paste a normal YouTube or Vimeo link inside `videos: [ ]`:
```
{ title: "Video title", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", service: "ai-video-trailers", category: "creative-and-design", featured: true },
```

## Replace an image
Upload a new file with the EXACT same name and folder as the old one, for example `images/services/book-cover-design.jpg`. Choose "replace". Recommended sizes: service and category images 1200 x 675 px JPG under 200 KB; team photos 600 x 600 px under 120 KB.

## Add a team member
1. Upload `images/team/full-name.jpg`.
2. Put this inside `team: [ ]` (the Team section appears automatically once there is one person):
```
{ name: "Full Name", role: "Job title", bio: "One or two sentences.", image: "images/team/full-name.jpg" },
```

## Add a new service
1. Upload `images/services/your-slug.jpg`. The slug is the lowercase-dashed name, for example `shopify-audit`.
2. Copy any block in `services: [ ... ]`, paste it after the last service (add a comma after the previous block), and change every field. `category` must be one of: ecommerce, book-and-author, streamer-solutions, creative-and-design, growth-and-automation. `related` must be 2 or 3 existing service slugs.
3. Each service also needs its own page file at `services/<category>/<slug>.html`. Copy any existing file in that folder, rename it, and change only the `<title>` and the description line. Or send me the new service and I will give you the finished file, plus a refreshed `sitemap.xml`.

## Add or change contact details and social links
Edit the `contact` and `social` sections. Leave a value as "" to hide it. Add a WhatsApp number (digits only, with country code) or a booking link and the buttons appear on the Contact page.

## If the site shows "Site data could not load"
A comma, quote or bracket in `data/site-data.js` is wrong. Undo your last change in GitHub (History, then Revert) or send me the file.

## Buying your domain later
Domain: goalgettersdigital.online is already set in `data/site-data.js`, `sitemap.xml` and `robots.txt`. In Vercel, open your project, then Settings, then Domains, and add it, then follow the DNS steps shown.
