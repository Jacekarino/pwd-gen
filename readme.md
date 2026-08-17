<div align="center">

# ⚡ pwd://gen

**A sleek, modern, and privacy-focused password generator web application.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pwd----gen.pages.dev-8b5cf6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pwd--gen.pages.dev/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Hosting-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Privacy: 100% Client-Side](https://img.shields.io/badge/Privacy-100%25%20Client--Side-10B981?style=for-the-badge&logo=shieldcheckered&logoColor=white)](#-security--privacy)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20(Vanilla)-06B6D4?style=for-the-badge&logo=npm&logoColor=white)](#%EF%B8%8F-tech-stack)
[![GitHub Stars](https://img.shields.io/github/stars/Jacekarino/pwd-gen?style=for-the-badge&logo=github&color=EAB308)](https://github.com/Jacekarino/pwd-gen/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Jacekarino/pwd-gen?style=for-the-badge&logo=github&color=6366F1)](https://github.com/Jacekarino/pwd-gen/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Jacekarino/pwd-gen?style=for-the-badge&logo=github&color=EC4899)](https://github.com/Jacekarino/pwd-gen/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-22C55E?style=for-the-badge&logo=github)](https://github.com/Jacekarino/pwd-gen/pulls)
[![License: MIT](https://img.shields.io/badge/License-MIT-3B82F6?style=for-the-badge&logo=open-source-initiative&logoColor=white)](license.txt)

<br />

<p align="center">
  <img src="https://github.com/Jacekarino/pwd-gen/blob/main/thumbnail.png?raw=true" alt="pwd://gen Interface Preview" width="720" />
</p>
<br />

</div>

---

## 🌟 Overview

**pwd://gen** is a fast, lightweight, and customizable password generator designed with modern aesthetics and privacy at its core. It empowers users to generate cryptographically sound, high-entropy passwords tailored to any service's strict password policy — completely in the browser.

---

## ✨ Features

- 🎛️ **Granular Customization** — Adjust length dynamically from `4` to `64` characters with a real-time slider.
- 🔠 **Comprehensive Character Sets** — Toggle Uppercase (`A-Z`), Lowercase (`a-z`), Numbers (`0-9`), and Symbols (`!@#$%...`).
- 🚫 **Character Blacklist** — Exclude specific characters or symbols that are prohibited by certain services.
- 🔄 **Anti-Repeat Algorithm** — Option to prevent sequential repeating characters for enhanced readability and strength.
- 🎯 **Guaranteed Requirement Fulfillment** — Enforces at least one character from every active character pool.
- 🕒 **Session History Drawer** — Stores your last 10 generated passwords locally in `localStorage` with individual copy & bulk clear controls.
- 📋 **Instant Clipboard Integration** — One-click copy with haptic visual toast feedback and status animations.
- 🔒 **Zero Data Transmission** — 100% client-side execution. Your passwords never leave your browser.
- 🎨 **Sleek Glassmorphic UI** — Polished dark mode layout with fluid micro-interactions and responsive typography.

---

## 🚀 Live Instances

Access the application anytime via:

| Provider | URL | Status |
| :--- | :--- | :--- |
| **Primary Domain** | [https://pwd-gen.pl/](https://pwd-gen.pl/) | ![Active](https://img.shields.io/badge/online-emerald?style=flat-square) |
| **Cloudflare Pages Mirror** | [https://pwd--gen.pages.dev/](https://pwd--gen.pages.dev/) | ![Active](https://img.shields.io/badge/online-emerald?style=flat-square) |

---

## 🛠️ Tech Stack

- **Markup & Semantics:** HTML5
- **Styling:** Modern Vanilla CSS3 (Custom Properties, Flexbox/Grid, Glassmorphism, CSS Transitions)
- **Scripting:** Pure Vanilla JavaScript (ES6+)
- **Typography & Icons:** [Inter](https://fonts.google.com/specimen/Inter), [Fira Code](https://fonts.google.com/specimen/Fira+Code), [Font Awesome 6](https://fontawesome.com/)
- **Hosting & Infrastructure:** Cloudflare Pages (configured via `wrangler.jsonc`)

---

## 💻 Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/Jacekarino/pwd-gen.git
cd pwd-gen
```

### 2. Run Locally
No build step or external dependencies required! Simply open `index.html` in any modern web browser:

```bash
# On Windows (PowerShell)
Start-Process index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or serve it with your preferred local server:
```bash
# Using Python
python -m http.server 8080

# Using Node / npx
npx serve .
```

---

## ☁️ Deployment

The project is preconfigured for [Cloudflare Pages](https://pages.cloudflare.com/) with `wrangler.jsonc`.

To deploy using the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/):

```bash
# Deploy to Cloudflare Pages
npx wrangler pages deploy . --project-name pwd-gen
```

---

## 🛡️ Security & Privacy

- **No Remote Calls:** No analytics, no telemetry, and no third-party server tracking.
- **Client-Side Storage:** Password history is stored strictly within your browser's isolated `localStorage` and can be wiped instantly at any time.
- **Open Source:** Full transparency — inspect every line of generation logic directly in [`script.js`](./script.js).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`license.txt`](license.txt) for more information.

---

<div align="center">

Made with ♡ by [**Jacekarino**](https://github.com/Jacekarino)

</div>
