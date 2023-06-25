*Long long ago in 2019...*

# an old portfolio

This is an old portofolio I built in 2019 with a friend in order to learn a bit of Angular and web development.

The objective is to improve its performance and make it look a bit better.

**Time & Size improvements so far**

  - With *Disabled Cache*: **3s~6s ➡ < 1.7s**

  - With *Disabled Cache* & *Fast 3G* config:
    - *First Contentful Paint*: **>7s ➡ ~1.8s**
    - *Largest Contentful Paint*: **>10s ➡ ~2.5s**
    - *Background Downlaod & Execution*: **>20s ➡ ~3s**
  - Packed Bundle Size: **62MB ➡ 6MB**

## ✔️ Changes made

  - Continuous Integration with [Jekyll-build](https://github.com/ferranJS/old-portfolio/blob/main/.github/workflows/jekyll-gh-pages.yml) and deploy-pages Github Actions at [**`ferran.tech`**](https://ferran.tech).
  - Lazy Load (defer) `p5.min.js`, `background.js` & images for **performance**
  - **Seo** & performance improvement with *Angular Universal* prerendering
  - Images: resized & compressed in **WebP**
  - Downloaded fonts with **woff2** format
  - Head tags ordered following [Harry Roberts](https://github.com/csswizardry) [guide](https://speakerdeck.com/csswizardry/get-your-head-straight)
  - Standalone (& inline) components
