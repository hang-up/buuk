# Quickstart

1) Get Bük
> ##### Git Clone
```
git clone https://github.com/hang-up/buk.git buk
npm install
```

> ##### NPM
Alternatively, use NPM.

```
npm install buuk
```
---

2) Drop your markdown files inside `dist/assets`.
3) Update `manifest.json`
4) `npm run build`

**Refer to Usage/manifest.json to learn more about file naming conventions.** 

---
#### Development caveats
> Include `bundle.min.js` in production  

Due to Webpack compilation flow and Uglify inablity to process ES2015 files, running `npm run build` will now call 2 new npm scripts sequentially: `transpile` and `uglify`.

1) `transpile` uses `babel-cli` with the `es2015`presets and outputs `dist/transpiled.js`
2) `uglify` uses `uglifyjs` to compress `dist/transpiled.js` into `dist/bundle.min.js`

Due to this compilation flow, you SHOULD include `dist/bundle.min.js` in your `index.html` when in production. 
In development, leave the un-minified version `dist/bundle.js` to benefit from hot reloading.