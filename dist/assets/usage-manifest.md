# Manifest.json

The heart of Bük is laying on its `manifest.json` file. The manifest for the current boilerplate follows this structure:
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