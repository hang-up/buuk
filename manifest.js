const path = require('path')

module.exports = {
    app: "Bük",
    version: "1.2.0",
    description: "Markdown based Javascript wiki engine.",
    sub: "Bük is a flat file markdown based wiki engine written in Javascript.",

    articles : {
        "Nested Categories": {
            "Category 1": [
                {
                    title: "About Bük",
                    tags: [
                        "getting started",
                        "about",
                        "fuzzy",
                        "search",
                        "no server"
                    ],
                    slug: "getting-started-about-buk"
                },
                {
                    title: "About Bük",
                    tags: [
                        "getting started",
                        "about",
                        "fuzzy",
                        "search",
                        "no server"
                    ],
                    slug: "getting-started-about-buk"
                }
            ],
            "Category 2" : {
                "Nested Again": [
                    {
                        title: "References",
                        tags: [
                            "licence",
                            "author",
                            "misc"
                        ],
                        slug: "other-references"
                    }
                ]
            },
        },

        "Getting Started": [
            {
                title: "About Bük",
                tags: [
                    "getting started",
                    "about",
                    "fuzzy",
                    "search",
                    "no server"
                ],
                slug: "getting-started-about-buk"
            },
            {
                title: "Installation",
                tags: [
                    "installation",
                    "how to"
                ],
                slug: "getting-started-installation"
            },
            {
                title: "Extending Bük",
                tags: [
                    "fork",
                    "develop",
                    "npm"
                ],
                slug: "getting-started-extending-buk"
            }
        ],

        "Usage": [
            {
                title: "Manifest.js",
                tags: [
                    "usage",
                    "manifest.js",
                    "how to write"
                ],
                slug: "usage-manifest"
            },

            {
                title: "Write your own pages",
                tags: [
                    "wiki",
                    "extend",
                    "new"
                ],
                slug: "usage-write-your-own-pages"
            }
        ],

        "Other": [
            {
                title: "References",
                tags: [
                    "licence",
                    "author",
                    "misc"
                ],
                slug: "other-references"
            }
        ]
    }
}
