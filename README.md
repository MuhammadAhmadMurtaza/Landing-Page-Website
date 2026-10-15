<div align="center">

# 🍽️ Zomato Clone: A Responsive Food Delivery Landing Page

**A practice project built with HTML, CSS, and vanilla JavaScript to put everything I've learned into one real page**

![Status](https://img.shields.io/badge/status-in%20progress-orange?style=flat-square)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-e23744?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen?style=flat-square)

</div>

> ⚠️ **Disclaimer:** This is an educational project and is **not affiliated with Zomato**. The name and design are used only as inspiration for learning front-end development. Check the license of any logo or photo you use before publishing.

---

## 📖 About This Project

This is a front-end clone of a food delivery landing page with a red theme. It combines the CSS and JavaScript concepts I have been practicing in small experiments (Flexbox, Grid, media queries, variables, transitions, keyframe animations, pseudo-elements, and DOM scripting) into a single, complete page.

No frameworks, no build tools, no libraries. Just three kinds of files: HTML, CSS, and JS.

---

## 📑 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Page Walkthrough](#-page-walkthrough)
5. [Design System](#-design-system)
6. [CSS Concepts Used](#-css-concepts-used)
7. [JavaScript Walkthrough](#-javascript-walkthrough)
8. [Responsive Design](#-responsive-design)
9. [Known Issues & Fixes](#-known-issues--fixes)
10. [How to Run](#-how-to-run)
11. [Deploy to GitHub Pages](#-deploy-to-github-pages)
12. [What I Learned](#-what-i-learned)
13. [Roadmap](#-roadmap)

---

## ✨ Features

<table>
  <tr>
    <th>Feature</th>
    <th>Description</th>
    <th>Built with</th>
  </tr>
  <tr>
    <td>🎨 <b>Themed design system</b></td>
    <td>One red palette, shadow, and transition defined once and reused everywhere.</td>
    <td>CSS variables</td>
  </tr>
  <tr>
    <td>📌 <b>Sticky, shrinking header</b></td>
    <td>The header stays on top and becomes slimmer after you scroll.</td>
    <td><code>position: sticky</code> + JS class toggle</td>
  </tr>
  <tr>
    <td>✨ <b>Animated nav links</b></td>
    <td>An underline grows from the left on hover.</td>
    <td><code>::after</code> + <code>transition</code></td>
  </tr>
  <tr>
    <td>🎬 <b>Hero entrance animation</b></td>
    <td>The logo drops in with a small bounce, then the heading and search bar fade up one after another.</td>
    <td><code>@keyframes</code> + <code>animation-delay</code></td>
  </tr>
  <tr>
    <td>⌨️ <b>Typing placeholder</b></td>
    <td>The search bar cycles through suggestions like "Try Biryani near you".</td>
    <td><code>setTimeout</code> + <code>slice()</code></td>
  </tr>
  <tr>
    <td>🧩 <b>Responsive feature grid</b></td>
    <td>Four cards drop to two, then one, as the screen narrows.</td>
    <td>CSS Grid + media queries</td>
  </tr>
  <tr>
    <td>🖱️ <b>Hover lift cards</b></td>
    <td>Cards rise and gain a stronger shadow on hover.</td>
    <td><code>transform</code> + <code>transition</code></td>
  </tr>
  <tr>
    <td>🔎 <b>Search handling</b></td>
    <td>Pressing Enter reads the query (currently shows an alert, ready to connect to real data).</td>
    <td><code>keydown</code> event</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
    <th>Used for</th>
  </tr>
  <tr>
    <td>Structure</td>
    <td>HTML5</td>
    <td>Semantic layout: <code>header</code>, <code>main</code>, <code>section</code>, <code>footer</code></td>
  </tr>
  <tr>
    <td>Styling</td>
    <td>CSS3</td>
    <td>Variables, Flexbox, Grid, animations, media queries</td>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>Vanilla JavaScript (ES6)</td>
    <td>DOM selection, events, class toggling, timers</td>
  </tr>
</table>

---

## 📂 Project Structure

Recommended layout, with all folder and file names in **lowercase** (this avoids path problems on GitHub Pages, see [Known Issues](#-known-issues--fixes)):

```
zomato-clone/
│
├── index.html            # Landing page (complete)
├── login.html            # Placeholder page
├── signup.html           # Placeholder page
├── investor.html         # Placeholder page
├── addrestaurant.html    # Placeholder page
│
├── css/
│   └── style.css         # All styles
│
├── js/
│   └── script.js         # All interactivity
│
└── img/
    ├── logo.png          # Header and hero logo
    └── bg.jpg            # Hero background photo
```

### 📄 File Overview

<table>
  <tr>
    <th>File</th>
    <th>Status</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><code>index.html</code></td>
    <td>✅ Complete</td>
    <td>Header, hero with search, "Why Choose Us" cards, stats, footer.</td>
  </tr>
  <tr>
    <td><code>style.css</code></td>
    <td>✅ Complete</td>
    <td>Theme variables, layout, animations, and responsive rules.</td>
  </tr>
  <tr>
    <td><code>script.js</code></td>
    <td>✅ Complete (one bug to fix)</td>
    <td>Entrance animation, scroll header, typing placeholder, press feedback, search.</td>
  </tr>
  <tr>
    <td><code>login.html</code></td>
    <td>🚧 Placeholder</td>
    <td>Will become the login form.</td>
  </tr>
  <tr>
    <td><code>signup.html</code></td>
    <td>🚧 Placeholder</td>
    <td>Will become the registration form.</td>
  </tr>
  <tr>
    <td><code>investor.html</code></td>
    <td>🚧 Placeholder</td>
    <td>Will hold the investor relations content.</td>
  </tr>
  <tr>
    <td><code>addrestaurant.html</code></td>
    <td>🚧 Placeholder</td>
    <td>Will become the "Add your restaurant" form.</td>
  </tr>
  <tr>
    <td><code>logo.png</code>, <code>bg.jpg</code></td>
    <td>🖼️ Assets</td>
    <td>Logo and a light marble-style food photo used as the hero background.</td>
  </tr>
</table>

---

## 🧭 Page Walkthrough

### 1️⃣ Header

<table>
  <tr>
    <th>Part</th>
    <th>Details</th>
  </tr>
  <tr>
    <td><b>Layout</b></td>
    <td>Flexbox with <code>justify-content: space-between</code> puts the logo on the left and the nav on the right.</td>
  </tr>
  <tr>
    <td><b>Sticky</b></td>
    <td><code>position: sticky; top: 0; z-index: 100;</code> keeps it above content while scrolling.</td>
  </tr>
  <tr>
    <td><b>Links</b></td>
    <td>Investor Relations, Add restaurant, Login, Sign Up.</td>
  </tr>
  <tr>
    <td><b>Button-style links</b></td>
    <td>Login is an outlined button; Sign Up is a filled white button with red text.</td>
  </tr>
  <tr>
    <td><b>Hover underline</b></td>
    <td>A pseudo-element <code>::after</code> grows from <code>width: 0</code> to <code>100%</code>.</td>
  </tr>
  <tr>
    <td><b>Shrink on scroll</b></td>
    <td>The <code>.scrolled</code> class reduces the padding and logo height and deepens the shadow.</td>
  </tr>
</table>

**How the shrinking header works:**

<table>
  <tr align="center">
    <td>👆 User scrolls<br>past 40px</td>
    <td>➡️</td>
    <td>⚙️ JS adds the<br><code>.scrolled</code> class</td>
    <td>➡️</td>
    <td>🎨 CSS applies the<br>smaller styles</td>
    <td>➡️</td>
    <td>🌊 <code>transition</code> animates<br>the change</td>
  </tr>
</table>

### 2️⃣ Hero Section

<table>
  <tr>
    <th>Element</th>
    <th>Details</th>
  </tr>
  <tr>
    <td><b>Container</b></td>
    <td>Flex column, centered, <code>min-height: 90vh</code>, with a full-cover background image (<code>background-size: cover</code>).</td>
  </tr>
  <tr>
    <td><b>Overlay</b></td>
    <td>A <code>::before</code> pseudo-element with a soft radial gradient, set to <code>pointer-events: none</code> so it never blocks clicks.</td>
  </tr>
  <tr>
    <td><b>Logo</b></td>
    <td>90px wide, drop shadow with <code>filter: drop-shadow()</code>, bounces in using <code>dropIn</code>.</td>
  </tr>
  <tr>
    <td><b>Heading</b></td>
    <td>"India's #1 food delivery app", 42px bold white text with a text shadow, fades up after 0.2s.</td>
  </tr>
  <tr>
    <td><b>Search bar</b></td>
    <td>Full width up to 560px, rounded, soft shadow, fades up after 0.4s.</td>
  </tr>
</table>

### 3️⃣ "Why Choose Us" Section

<table>
  <tr>
    <th>Card</th>
    <th>Icon</th>
    <th>Message</th>
  </tr>
  <tr>
    <td>Fast Delivery</td>
    <td align="center">⚡</td>
    <td>Hot meals in as little as 30 minutes</td>
  </tr>
  <tr>
    <td>Endless Choices</td>
    <td align="center">🍽️</td>
    <td>Thousands of restaurants and cuisines</td>
  </tr>
  <tr>
    <td>Live Tracking</td>
    <td align="center">📍</td>
    <td>Real-time order tracking</td>
  </tr>
  <tr>
    <td>Secure Payments</td>
    <td align="center">🔒</td>
    <td>Cards, UPI, wallets, or cash on delivery</td>
  </tr>
</table>

Below the cards is a **stats row** (separated by a thin top border) showing:

<table>
  <tr align="center">
    <td><b>2,00,000+</b><br>Restaurant Partners</td>
    <td><b>500+</b><br>Cities Covered</td>
    <td><b>5M+</b><br>Daily Orders</td>
  </tr>
</table>

### 4️⃣ Footer

A centered dark bar (`#1c1c1c`) with light gray copyright text.

---

## 🎨 Design System

All colors, the shadow, and the transition live in `:root` as CSS variables:

```css
:root {
  --primary-red: #e23744;
  --dark-red: #cb202d;
  --darker-red: #a91c27;
  --light-red: #ff6b6b;
  --bg-cream: #fff8f6;
  --text-dark: #1c1c1c;
  --text-light: #6c6c6c;
  --white: #ffffff;
  --shadow: 0 4px 20px rgba(226, 55, 68, 0.15);
  --transition: all 0.3s ease;
}
```

<table>
  <tr>
    <th>Variable</th>
    <th>Value</th>
    <th>Used for</th>
  </tr>
  <tr>
    <td><code>--primary-red</code></td>
    <td><code>#e23744</code></td>
    <td>Header background, stats numbers, Sign Up text</td>
  </tr>
  <tr>
    <td><code>--dark-red</code></td>
    <td><code>#cb202d</code></td>
    <td>Sign Up hover text</td>
  </tr>
  <tr>
    <td><code>--darker-red</code>, <code>--light-red</code></td>
    <td><code>#a91c27</code>, <code>#ff6b6b</code></td>
    <td>Defined but not used yet (available for future states)</td>
  </tr>
  <tr>
    <td><code>--bg-cream</code></td>
    <td><code>#fff8f6</code></td>
    <td>Page and section background</td>
  </tr>
  <tr>
    <td><code>--text-dark</code></td>
    <td><code>#1c1c1c</code></td>
    <td>Body text, headings, footer background</td>
  </tr>
  <tr>
    <td><code>--text-light</code></td>
    <td><code>#6c6c6c</code></td>
    <td>Subtitles, descriptions, placeholder text</td>
  </tr>
  <tr>
    <td><code>--shadow</code></td>
    <td>red-tinted soft shadow</td>
    <td>Cards and search bar</td>
  </tr>
  <tr>
    <td><code>--transition</code></td>
    <td><code>all 0.3s ease</code></td>
    <td>Header, links, cards, search bar</td>
  </tr>
</table>

> 💡 Changing `--primary-red` once re-themes the entire site.

**Typography:** `'Segoe UI', Arial, sans-serif`

---

## 🧠 CSS Concepts Used

This project ties together the experiments from my learning journey:

<table>
  <tr>
    <th>Concept</th>
    <th>Where it's used in this project</th>
  </tr>
  <tr>
    <td>CSS reset and <code>box-sizing: border-box</code></td>
    <td>The <code>*</code> rule at the top</td>
  </tr>
  <tr>
    <td>CSS variables (<code>var()</code>)</td>
    <td>Every color, shadow, and transition</td>
  </tr>
  <tr>
    <td><code>position: sticky</code> and <code>z-index</code></td>
    <td>Header</td>
  </tr>
  <tr>
    <td><code>position: relative</code> + <code>absolute</code></td>
    <td>Hero overlay and nav underline pseudo-elements</td>
  </tr>
  <tr>
    <td>Flexbox</td>
    <td>Header, hero, icon circles, stats row</td>
  </tr>
  <tr>
    <td>CSS Grid</td>
    <td><code>.highlight-grid</code> with <code>repeat(4, 1fr)</code></td>
  </tr>
  <tr>
    <td>Pseudo-elements (<code>::before</code>, <code>::after</code>, <code>::placeholder</code>)</td>
    <td>Hero glow, link underline, search placeholder color</td>
  </tr>
  <tr>
    <td><code>:nth-child()</code></td>
    <td>Styling the Login and Sign Up links as buttons</td>
  </tr>
  <tr>
    <td>Transitions</td>
    <td>Header shrink, link hover, card lift, input focus</td>
  </tr>
  <tr>
    <td>Keyframe animations</td>
    <td><code>dropIn</code> and <code>fadeUp</code></td>
  </tr>
  <tr>
    <td><code>animation-delay</code> and <code>fill-mode</code></td>
    <td>Staggering the hero items</td>
  </tr>
  <tr>
    <td><code>transform</code></td>
    <td>Card lift, entrance motion, focus zoom</td>
  </tr>
  <tr>
    <td>Filters</td>
    <td><code>drop-shadow()</code> on the hero logo</td>
  </tr>
  <tr>
    <td>Background properties</td>
    <td><code>background-size: cover</code>, <code>background-position: center</code>, <code>no-repeat</code></td>
  </tr>
  <tr>
    <td>Media queries</td>
    <td>Three breakpoints (992px, 768px, 520px)</td>
  </tr>
  <tr>
    <td><code>scroll-behavior: smooth</code></td>
    <td><code>html</code></td>
  </tr>
</table>

---

## ⚙️ JavaScript Walkthrough

Everything runs inside one `DOMContentLoaded` listener, so the code starts only after the HTML is ready.

<table>
  <tr>
    <th>#</th>
    <th>Feature</th>
    <th>How it works</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td><b>Hero entrance</b></td>
    <td>Selects the hero logo, text, and input, then adds an <code>.animate-in</code> class to each. The CSS keyframes start playing as soon as the class appears.</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td><b>Header shrink</b></td>
    <td>A <code>scroll</code> listener checks <code>window.scrollY &gt; 40</code> and adds or removes <code>.scrolled</code>. It also runs once on load in case the page is refreshed mid-scroll.</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td><b>Typing placeholder</b></td>
    <td>Uses <code>slice(0, charIndex)</code> and <code>setAttribute('placeholder', ...)</code> in a timer loop to type, hold, delete, and move to the next phrase. Constants control the speeds: type <code>60ms</code>, delete <code>30ms</code>, hold <code>1400ms</code>.</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td><b>Press feedback</b></td>
    <td><code>mousedown</code> scales an element to <code>0.97</code>; <code>mouseup</code> and <code>mouseleave</code> reset it.</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td><b>Search on Enter</b></td>
    <td>A <code>keydown</code> listener checks for the Enter key, trims the input, and if it is not empty, logs it and shows an alert. A <code>TODO</code> marks where a real search will connect.</td>
  </tr>
</table>

### 🧪 Key Pattern: JavaScript Toggles, CSS Does the Work

```js
const handleScroll = () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll);
handleScroll();   // run once on load
```

```css
header.scrolled {
  padding: 10px 60px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
```

JavaScript decides **when**, CSS decides **how it looks**. This keeps both files simple.

---

## 📱 Responsive Design

<table>
  <tr>
    <th>Breakpoint</th>
    <th>Changes</th>
  </tr>
  <tr>
    <td><b>Above 992px</b></td>
    <td>Four-column feature grid, horizontal header.</td>
  </tr>
  <tr>
    <td><b>992px and below</b></td>
    <td>Feature grid becomes <b>2 columns</b>.</td>
  </tr>
  <tr>
    <td><b>768px and below</b></td>
    <td>Header stacks into a column with wrapped, centered links. Hero heading drops to <code>28px</code>. Smaller search bar padding, section padding, and stats gap.</td>
  </tr>
  <tr>
    <td><b>520px and below</b></td>
    <td>Feature grid becomes <b>1 column</b>.</td>
  </tr>
</table>

---

## 🐛 Known Issues & Fixes

Being honest about what is not perfect yet is part of learning. Here is what I found while reviewing the code, with the fix for each.

<details>
<summary><b>1. 🔤 Folder names have inconsistent capitalization (will break on GitHub Pages)</b></summary>

<br>

`index.html` uses `CSS/`, `Img/` (header), `img/` (hero), and `JS/`, while the CSS uses `../img/bg.jpg`. Windows ignores letter case, but GitHub's servers do not, so `Img/logo.png` and `img/logo.png` are treated as different folders and one image will fail.

**Fix:** use all-lowercase names everywhere (`css/`, `img/`, `js/`, `investor.html`) and update the references:

```html
<link rel="stylesheet" href="css/style.css">
<img src="img/logo.png" alt="Zomato Logo">
<script src="js/script.js"></script>
```

</details>

<details>
<summary><b>2. 🔗 Links start with a slash (root-relative)</b></summary>

<br>

Links like `href="/login.html"` start from the **root of the domain**. On a GitHub Pages project site (`username.github.io/repo-name/`) that points to `username.github.io/login.html`, which does not exist.

**Fix:** use relative links:

```html
<li><a href="investor.html">Investor Relations</a></li>
<li><a href="addrestaurant.html">Add restaurant</a></li>
<li><a href="login.html">Login</a></li>
<li><a href="signup.html">Sign Up</a></li>
```

</details>

<details>
<summary><b>3. ⌨️ The typing placeholder never cycles</b></summary>

<br>

The code sets `charIndex` to the full length of the first phrase, then runs `charIndex++` before checking `charIndex === current.length`. That makes `charIndex` one larger than the length, so the equality check is never true. The timer keeps running, but the placeholder never starts deleting.

**Fix:** use `>=` instead of `===`:

```js
if (charIndex >= current.length) {
  isDeleting = true;
  setTimeout(typePlaceholder, HOLD_DELAY);
  return;
}
```

</details>

<details>
<summary><b>4. 🔍 The search bar's focus zoom and press effect don't work</b></summary>

<br>

The `fadeUp` animation uses `animation-fill-mode: forwards`, which **locks** `transform: translateY(0)` after the animation ends. Animated values override normal rules, so `input:focus { transform: scale(1.02) }` and the JavaScript `scale(0.97)` are both ignored.

**Fix:** make the visible state the normal style, animate **from** the hidden state, and use `backwards` instead of `forwards`:

```css
section.hero input {
  /* remove opacity: 0 and the starting transform from here */
  animation: fadeUp 0.9s ease backwards 0.4s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}
```

After the animation, the element returns to its normal styles, so the `:focus` transform works. The same pattern works for the logo and heading, and you can then delete the `.animate-in` class and JS section 1.

</details>

<details>
<summary><b>5. 🖱️ Nav link hover lift and press effect don't work</b></summary>

<br>

The links are `<a>` elements, which are `inline` by default, and `transform` does not apply to plain inline elements. So the Sign Up lift on hover and the press scale in JavaScript have no visible effect.

**Fix:**

```css
header ul li a {
  display: inline-block;
}
```

</details>

<details>
<summary><b>6. 🌫️ Low contrast between the white hero text and the light background</b></summary>

<br>

`bg.jpg` is a pale marble photo, so white text is hard to read, and the white radial glow in `::before` makes it lighter still.

**Fix:** use a dark overlay instead:

```css
section.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  pointer-events: none;
}
```

</details>

<details>
<summary><b>7. ♿ Accessibility and robustness improvements</b></summary>

<br>

<table>
  <tr>
    <th>Issue</th>
    <th>Fix</th>
  </tr>
  <tr>
    <td>The search input has only a placeholder</td>
    <td>Add <code>aria-label="Search for restaurants, cuisine or a dish"</code> and <code>type="search"</code>.</td>
  </tr>
  <tr>
    <td>The hero heading is a <code>&lt;p&gt;</code></td>
    <td>Make it an <code>&lt;h1&gt;</code> for proper document structure.</td>
  </tr>
  <tr>
    <td>Login and Sign Up styling depends on <code>:nth-child(3)</code> and <code>(4)</code></td>
    <td>Add classes such as <code>.btn-outline</code> and <code>.btn-filled</code> so reordering links doesn't break the design.</td>
  </tr>
  <tr>
    <td>Motion may bother some users</td>
    <td>Add <code>@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }</code>.</td>
  </tr>
  <tr>
    <td>Scroll listener runs very often</td>
    <td>Use <code>{ passive: true }</code> as a third argument to <code>addEventListener</code>.</td>
  </tr>
  <tr>
    <td>The footer year is hard-coded</td>
    <td>Set it with <code>new Date().getFullYear()</code>.</td>
  </tr>
  <tr>
    <td>The search uses <code>alert()</code></td>
    <td>Replace it with a results page or an inline results list.</td>
  </tr>
</table>

</details>

---

## 🚀 How to Run

No installation or build step needed.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Move into the project
cd <your-repo-name>

# 3. Open the landing page in your browser
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux
```

💡 **Tip:** Use the VS Code **Live Server** extension to reload automatically when you save. Open DevTools (`F12`) and use the device toolbar to test the responsive breakpoints.

---

## 🌐 Deploy to GitHub Pages

<table>
  <tr>
    <td>1️⃣</td>
    <td>Push the project to a GitHub repository, with <code>index.html</code> in the <b>root</b> folder.</td>
  </tr>
  <tr>
    <td>2️⃣</td>
    <td>Go to <b>Settings → Pages</b>.</td>
  </tr>
  <tr>
    <td>3️⃣</td>
    <td>Under <b>Build and deployment</b>, choose <b>Deploy from a branch</b>, select <code>main</code> and <code>/ (root)</code>, then save.</td>
  </tr>
  <tr>
    <td>4️⃣</td>
    <td>After a minute or two, your site is live at <code>https://&lt;your-username&gt;.github.io/&lt;your-repo-name&gt;/</code>.</td>
  </tr>
</table>

> ⚠️ Fix the [folder capitalization and root-relative link issues](#-known-issues--fixes) first, or images and pages may not load online.

---

## 🎓 What I Learned

<table>
  <tr>
    <td>✅</td>
    <td>CSS variables turn a design into a system: change one value and the whole site updates.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>JavaScript should toggle classes, and CSS should handle the visuals. This keeps code clean and easy to debug.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Staggered <code>animation-delay</code> values make a page feel polished with no extra code.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td><code>animation-fill-mode: forwards</code> can silently block other styles on the same property.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Transforms don't apply to inline elements, so links used as buttons need <code>display: inline-block</code>.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>File names are case-sensitive on real servers, even if they aren't on my laptop.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>An off-by-one mistake (<code>===</code> vs <code>&gt;=</code>) can make a feature look like it works while doing nothing.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Text on photos needs a contrast check, so a dark overlay is often necessary.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Combining many small concepts in one project shows which ones I truly understand.</td>
  </tr>
</table>

---

## 🗺️ Roadmap

- [x] Landing page layout (header, hero, features, stats, footer)
- [x] Theme with CSS variables
- [x] Hero entrance animations
- [x] Sticky header with shrink-on-scroll
- [x] Responsive grid with three breakpoints
- [x] Typing placeholder and search handling
- [ ] Fix the known issues listed above
- [ ] Build the **Login** page with a form and validation
- [ ] Build the **Sign Up** page with a form and validation
- [ ] Build the **Add Restaurant** page
- [ ] Build the **Investor Relations** page
- [ ] Add a hamburger menu for mobile
- [ ] Show real search results from a JSON file using `fetch()`
- [ ] Save login state with `localStorage`
- [ ] Add a dark theme using CSS variables
- [ ] Deploy to GitHub Pages

---

<div align="center">

### ⭐ If you found this helpful, consider giving the repo a star!

Made with ❤️ while learning web development

</div>
