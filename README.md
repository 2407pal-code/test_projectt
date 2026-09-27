# 🛋️ Gayatri Furnitures — Official Website

> *"Furniture for a lifetime"*

Welcome to the official repository for **Gayatri Furnitures**, a playful, vibrant, and interactive single-page web application showcasing bespoke furniture craftsmanship, brand heritage, and direct customer inquiry channels.

Founded by **Hrithik Dhiman**, Gayatri Furnitures combines generational woodworking expertise with modern, handcrafted home design.

---

## 📸 Overview

The website is designed with a lively, retro-modern, pop-neubrutalist aesthetic featuring handcrafted vector illustrations, dynamic scene animations, lightweight client-side routing, and an asynchronous contact inquiry workflow.

### 🌟 Key Highlights

- **Custom SVG Scenery & Micro-Animations:** Extensive inline SVG artwork depicting cherry blossom trees, bookshelves, reading nooks, cozy beds, dining sets, houses, mountain ridges, and animated roadside commuters (bicyclists and dog walkers).
- **Client-Side Hash Routing:** Seamless zero-reload navigation switching between the **Home View** (`#home` / default), **Contact Section** (`#contact`), and the **About Us View** (`#about`).
- **Dynamic Letter-by-Letter Title Waves:** JavaScript-powered animated typographic greeting with smooth delay staggering.
- **Asynchronous Contact Inquiries:** Full-featured inquiry form integrated with [FormSubmit.co](https://formsubmit.co) AJAX endpoint, anti-bot honeypot protection, customer preference selectors (Email, Phone, WhatsApp), and polite in-place confirmation messaging.
- **Accessibility & Motion Preferences:** Fully respects `prefers-reduced-motion` to tone down keyframe animations for vestibular-sensitive users, coupled with semantic HTML5 elements and ARIA live regions.
- **Zero External Dependencies:** Built purely using vanilla web technologies without heavyweight frameworks or bloated libraries.

---

## 📁 Repository Structure

```text
website making/
├── index99333333.html    # Core single-page web application (HTML, CSS, JS & SVG assets)
└── README.md             # Project documentation and architectural overview
```

> **Note:** The main entry point file is currently named [`index99333333.html`](file:///c:/Users/Lenovo/Downloads/website%20making/index99333333.html). If hosting on static providers (e.g., GitHub Pages, Netlify, Vercel, Apache, Nginx), you can duplicate or rename this file to `index.html` for standard root resolution.

---

## 🎨 Design System & Visual Identity

### Color Palette

The interface is styled using CSS custom variables defining high-contrast, playful cartoon-inspired tones:

| Token | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `--sky` | `#8fd3ff` | Daytime sky backdrop |
| `--sun` | `#ffd23f` | Sun element, pill badges, and active inputs |
| `--hill` / `--hill2` | `#3fbf6f` / `#2a9d5c` | Rolling landscape and mountain contours |
| `--body` | `#ff6b8a` | Buttons, accent highlights, and floral details |
| `--ink` | `#2b2d42` | Neubrutalist thick borders, text, and outlines |
| `--wood` / `--wood2` | `#c98b5a` / `#a5683d` | Furniture structures and wood finishes |
| `--teal` | `#3bb3a7` | Furniture upholstery and window accents |
| `--blue` | `#4d9de0` | Cushions, blankets, and character clothing |

### Typography & Aesthetics
- **Font Family:** `Fredoka` (Google Fonts) with fallbacks to `ui-rounded`, `system-ui`, and `sans-serif`.
- **Styling Style:** Neubrutalist pop design featuring `3px`–`4px` solid `--ink` borders, crisp non-blurred drop shadows (`box-shadow: 4px 4px 0 var(--ink)`), rounded pills, and tactile `:active` button click transformations.

---

## ⚙️ Architecture & Features

### 1. Interactive Scenes & Animations
- **Letter Waves:** The `<h1>` title dynamically breaks letters into `<span>` wrappers with progressive CSS `animation-delay` offsets.
- **Ambient Elements:** Rotating sun rays (`@keyframes spin`), drifting clouds (`@keyframes drift`), and falling cherry blossoms (`@keyframes petalfall`).
- **Living Illustrations:** Character breathing animations (`@keyframes breathe`), floating sleep z's (`@keyframes zz`), swaying papers (`@keyframes sway`), and cycling pedal mechanics (`@keyframes stride`).

### 2. Client-Side Hash Router
The application uses a lightweight vanilla JavaScript router listening to the `hashchange` event:
- `#home` / default: Reveals `#home-view`, updates document title, and shows hero and contact form.
- `#contact`: Scrolls smoothly to the inquiry card.
- `#about`: Unhides `#about-view`, displays founder biography, 1500+ satisfied customer badge, mountain silhouettes, and community road animation.

### 3. Contact Form & Anti-Spam
- **Endpoint:** `https://formsubmit.co/ajax/2407pal@gmail.com`
- **Fields:** Full Name (required), Age, Email (required), Phone (optional), Contact Preference (Email / Phone / WhatsApp), and Message.
- **Honeypot:** Hidden field `_honey` traps bots silently without bothering genuine visitors.
- **User Feedback:** Dynamic button loading state (`Sending…`) and custom confirmation message replacing the form upon HTTP 200 response.

---

## 🚀 Getting Started & Local Usage

Because the application relies exclusively on standard web technologies, no build steps or package installations are required.

### Option 1: Direct File Opening
Double-click [`index99333333.html`](file:///c:/Users/Lenovo/Downloads/website%20making/index99333333.html) or right-click and choose **Open With > Google Chrome / Microsoft Edge / Firefox / Safari**.

### Option 2: Local HTTP Server (Recommended)
Running through an HTTP server ensures full compatibility with AJAX submissions and browser hash-routing:

- **Using Python 3:**
  ```bash
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000/index99333333.html` in your browser.

- **Using Node.js (`npx serve`):**
  ```bash
  npx serve .
  ```

- **Using VS Code Live Server Extension:**
  Right-click [`index99333333.html`](file:///c:/Users/Lenovo/Downloads/website%20making/index99333333.html) and select **"Open with Live Server"**.

---

## 📞 Business & Contact Information

- **Business Name:** Gayatri Furnitures
- **Founder:** Hrithik Dhiman
- **Direct Phone:** [886-884-9310](tel:8868849310)
- **Notification Inbox:** `2407pal@gmail.com`
- **Specialization:** Lifetime residential and commercial custom furniture.

---

## 📄 License

Copyright © 2026 Gayatri Furnitures. All rights reserved.
