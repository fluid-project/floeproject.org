/*
 Copyright the FLOE Project copyright holders.

 See the AUTHORS.md file at the top-level directory of this distribution and at
 https://github.com/fluid-project/floeproject.org/raw/master/AUTHORS.md.

 Licensed under the New BSD license. You may not use this file except in compliance with this License.

 You may obtain a copy of the New BSD License at
 https://github.com/fluid-project/floeproject.org/raw/master/LICENSE.md.
*/

const fs = require("fs");

const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');

// Import data files
const site = require('./src/_data/site.json');

module.exports = function(config) {
  // Filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);


  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Passthrough copy
  config.addPassthroughCopy({"src/assets/images": "assets/images"});
  config.addPassthroughCopy({"src/assets/js": "assets/js"});
  config.addPassthroughCopy({"src/assets/stylesheets": "assets/stylesheets"});
  config.addPassthroughCopy({"src/news/images": "news/images"});
  config.addPassthroughCopy({"node_modules/infusion/dist/infusion-uio.min.js": "lib/infusion/infusion-uio.min.js"});
  config.addPassthroughCopy({"node_modules/infusion/src/components/tableOfContents/css/": "lib/infusion/src/components/tableOfContents/css/"});
  config.addPassthroughCopy({"node_modules/infusion/src/components/tableOfContents/html/": "lib/infusion/src/components/tableOfContents/html/"});
  config.addPassthroughCopy({"node_modules/infusion/src/components/textfieldControl/css/": "lib/infusion/src/components/textfieldControl/css/"});
  config.addPassthroughCopy({"node_modules/infusion/src/components/switch/css/": "lib/infusion/src/components/switch/css/"});
  config.addPassthroughCopy({"node_modules/infusion/Infusion-LICENSE.txt": "lib/infusion/Infusion-LICENSE.txt"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/preferences/css/": "lib/infusion/src/framework/preferences/css/"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/preferences/fonts/": "lib/infusion/src/framework/preferences/fonts/"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/preferences/html/": "lib/infusion/src/framework/preferences/html/"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/preferences/messages/": "lib/infusion/src/framework/preferences/messages/"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/preferences/preferencesDependencies.json": "lib/infusion/src/framework/preferences/preferencesDependencies.json"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/enhancement/css/": "lib/infusion/src/framework/enhancement/css/"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/core/css/": "lib/infusion/src/framework/core/css/"});
  config.addPassthroughCopy({"node_modules/infusion/src/framework/core/images/": "lib/infusion/src/framework/core/images/"});
  config.addPassthroughCopy({"node_modules/infusion/src/lib/jquery/ui/css/default-theme/": "lib/infusion/src/lib/jquery/ui/css/default-theme/"});
  config.addPassthroughCopy({"node_modules/infusion/src/lib/normalize/css/": "lib/infusion/src/lib/normalize/css/"});
  config.addPassthroughCopy({"node_modules/infusion/src/lib/open-dyslexic/fonts/": "lib/infusion/src/lib/open-dyslexic/fonts"});
  config.addPassthroughCopy({"node_modules/infusion/src/lib/opensans/fonts/": "lib/infusion/src/lib/opensans/fonts/"});
  config.addPassthroughCopy({"node_modules/infusion/src/lib/roboto/fonts/": "lib/infusion/src/lib/roboto/fonts/"});

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html');
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: "_includes"
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",
    	// 1.1 Enable elventy to pass dirs specified above
    passthroughFileCopy: true
  };
};
