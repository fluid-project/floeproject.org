/*
 Copyright the FLOE Project copyright holders.

 See the AUTHORS.md file at the top-level directory of this distribution and at
 https://github.com/fluid-project/floeproject.org/raw/main/AUTHORS.md.

 Licensed under the New BSD license. You may not use this file except in compliance with this License.

 You may obtain a copy of the New BSD License at
 https://github.com/fluid-project/floeproject.org/raw/main/LICENSE.md.
*/

"use strict";

const mix = require("laravel-mix");
const moveFile = require("move-file");

// Set public path.
mix.setPublicPath("dist/assets");

// Process JavaScript files with Babel.
mix.js("./src/assets/scripts/app.js", "dist/assets/scripts");
mix.js("./src/assets/scripts/card.js", "dist/assets/scripts");
mix.js("./src/assets/scripts/matomo.js", "dist/assets/scripts");

// Process CSS with PostCSS.
mix.postCss("./src/assets/styles/app.css", "dist/assets/styles");

// Don't modify stylesheet url() functions.
mix.options({
    processCssUrls: false,
    postCss: [
        require("postcss-dir-pseudo-class"),
        require("postcss-logical")
    ]
});

// Enable source maps.
mix.sourceMaps(false, "source-map");

// Add version string to assets in production.
if (mix.inProduction()) {
    mix.version();
}

// Copy asset manifest into Eleventy's data directory to trigger a build when assets are updated.
mix.then(() => {
    moveFile.sync("dist/assets/mix-manifest.json", "src/_data/assets.json");
});
