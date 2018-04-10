const config = require(`${process.cwd()}/buuk-config`)

module.exports = {
    "name": config.name,
    "short_name": config.short_name,
    "icons": [
        {
            "src": "icons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#fff",
    "theme_color": config.theme_color || "#1f77b4"
}

