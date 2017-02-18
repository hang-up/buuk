# Bük

> Markdown based Javascript wiki engine.

## About Bük

Bük is a flat file markdown based wiki engine written in Javascript.  

**No server needed.**

Simply drop in your .md files in a folder, update manifest.json and you get a wiki with an integrated fuzzy search feature.

## Get started

* Clone this repo
* `npm install`
* Drop your markdown files inside `dist/assets`
* Update `manifest.json`
* `npm run prod`

## Usage
The heart of Bük is laying on its `manifest.json` file. A sample manifest is available by default:
```
    {
        "app": "Name of the wiki",
        "version": "1.0.0",
        "description": "General description of the wiki.",
        "sub": "More details about the wiki.",

        "articles" : {                              // All articles to be indexed
            "Category 1": [                         // Category name
              {
                "title": "Article title",           // Article name
                "tags": [                           // Tags to use when searched
                  "tag 1",
                  "tag 2",
                  "tag 3"
                ],
                "slug": "category-article-title"    // Convention: category-article-title
              }
            ]
        }
    }
```

There are no conventions for creating your wiki markdown files.  
**However the name of your .md files should be the same as the slug defined in `manifest.json`**

## References
Bük is using [markdown-it](https://github.com/markdown-it/markdown-it) as a parser to display your markdown pages. If you encounter any parsing caveats, please address your issues [here](https://github.com/markdown-it/markdown-it/issues).  

## Licence
MIT



