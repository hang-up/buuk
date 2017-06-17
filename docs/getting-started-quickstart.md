# Quickstart

1) Get Bük
> ##### Git Clone
```
git clone https://github.com/hang-up/buk.git buk
cd buk
npm install
```

> ##### NPM
Alternatively, use NPM.

```
npm install buuk
```
---

2) Drop your markdown files inside `docs`.
3) Update `manifest.json`
4) `npm run build` or `npm run pwa`

**Refer to Usage/manifest.json to learn more about file naming conventions.** 

---
## Scripts

```
 npm run dev
```
Will serve a local version of Bük on `localhost:8080` with hot module replacement enabled by default.

```
 npm run build
```
Will compile all markdown files referenced inside manifest and output two scripts: `dist/vendor.js` and `dist/bundle.js`
* `vendor.js` references vendor libraries needed and can be cached for an extensive period of time
* `bundle.js` actually contains the interesting part.

```
npm run pwa
```
Does the same as above but will generate /update a service worker `sw.js` at the root of the folder. This enables progressive web application capabilities including offline view and fast loading time. 
More info on that can be found [here!](https://developers.google.com/web/progressive-web-apps/)