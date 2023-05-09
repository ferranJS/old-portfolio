*Long long ago in 2019...*

# an old portfolio

This is an old portofolio I built in 2019 with a friend in order to learn a bit of Angular and web development.

The objective is to improve its performance and make it look a bit better.

Deployed with Github Pages at [**`ferran.tech`**](https://ferran.tech).

**Time & Size improvements so far**

  - With *Disabled Cache*: **3s~6s ➡ < 1.7s**

  - With *Disabled Cache* & *Fast 3G* config:
    - *First Contentful Paint*: **>7s ➡ ~2s**
    - *Largest Contentful Paint*: **>10s ➡ ~3s**
    - *Background Downlaod & Execution*: **>20s ➡ ~5s**
  - Packed Bundle Size: **62MB ➡ 6MB**

## ✔️ Changes made

  - Lazy Load (defer) `p5.min.js`, `background.js` & images for **performance**
  - **Seo** & performance improvement with *Angular Universal* prerendering
  - Standalone components
  - Images: resized & compressed in WebP
  - Downloaded fonts
  - Prerender with Github Actions

## ❕ To improve 

- make it responsive
- make it prettier
- add pre-commit hooks for Universal build & linting
- maybe use tailwind

- ### optimize:
  - background js (should get rid of p5js dependency) (add service worker too?)
  - image/gifs with \<picture> element
  - meta tags order
  - meta tags content
  
## ❌ Problems of the past
- an Angular project for a portfolio... (not even typescript is needed)
- too many files (they could have been inline components)
- bad css
- ugly responsiveness