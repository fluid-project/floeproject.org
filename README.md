# Fluid Project Website

Floe is creating tools that help transform, augment, and personalize the learning experience.

Floe provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.

# This Repository

This repository contains the markup needed to deploy the floeproject.org website.

# To Build Locally!

1. Get the required node modules: `npm install`
2. Run eleventy from the fluid-website directory `npm run eleventyport`.
3. Open `http://localhost:9778/` to see the website. 

# To deploy to a personal webserver

1. Run: `npm run build`
2. Copy the contents of `dist` directory to your server.

## Notes

- Modifications can be done to any source file or directory except for the contents of the `dist/` directory. The `dist`
  directory and its contents are not to be versioned since it contains the generated output made by eleventy from the
  source files and are overwritten.
- The 404 error page will only appear when deployed to the *root* of a gh-pages domain or gh-pages custom domain. It
  will not appear when deployed locally or when deployed through a gh-pages (sub) project. To test the 404 error page,
  either load the 404.html directly in a browser, or deploy to the root of a gh-pages domain.
