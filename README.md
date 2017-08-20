<p align="center"><img src="http://groundedrob.com/images/projects/buk.png" height='250px'></p>

## About Bük
> A markdown based documentation generator.

Bük is a fast and simple markdown based static site generator geared towards documentation.

Simply drop in your .md files in a folder, update manifest.json and you get a blazing fast wiki with an integrated fuzzy search feature.

# Quickstart

1. Get Bük

> ##### GitHub

```shell
git clone https://github.com/hang-up/buk.git buk
cd buk
npm install
```

> ##### NPM
Bük is also available on NPM. The default behaviour of NPM will install Bük in `/node_modules`. Since Bük is not meant to be used as a dependency you can safely extract it and use it as a standalone.

```shell
npm install buuk

# move buuk out of node_modules and install dependencies.
mv node_modules/buuk . && cd buuk  && npm install
```
> **(Optional) Version controlling your documents**

- If you need to version control your documents, we recommend you to [fork](https://help.github.com/articles/fork-a-repo/) this repository and then sync it whenever a new release becomes available.
- Or you can also simply change the remote after creating an empty repo on your github account: 

```shell
# change remote if version control is needed
git remote set-url origin https://github.com/YOUR OWN USER NAME/buk.git
```

---

2. Drop your markdown files in `static/docs`.
3. Update `static/manifest.json`
4. Finally:
```shell
npm run build
# outputted files will be in /dist
```

**Refer to Usage/manifest.json to learn more about file naming conventions.** 

## Documentation - Example
To check out live example which also happen to be the docs, visit: [buuk.groundedrob.com](https://buuk.groundedrob.com)

## Changelog:
Details changes for each release are documented in the [release notes](https://github.com/hang-up/buk/releases)

### Licence
MIT


