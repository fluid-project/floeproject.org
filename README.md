# Fluid Project Website

Floe is creating tools that help transform, augment, and personalize the learning experience.

Floe provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.


# This Repository

This repository contains the markup needed to deploy the floeproject.org website.


# News Item Template

An html template is provided for the news item in `./news/YYYY-MM-DD-news-item-title.html`
Save your renamed file to the `./news` folder.

# Note!

1. You will also need to add your news item (title and date) to the top of the news archive (in `./news/index.html`).
2. Remember to update the floeproject.org `./index.html` page with a short summary of your news item.
--> The three most recent news items should remain in the list on the floeproject.org `./index.html` page. When a new item is added, the oldest one on the list should be removed.

# To Build Locally!

1. Get the required node modules: `npm install`
2. Run docpad from the fluid-website directory `npm run eleventy`.
3. Open `http://localhost:9778/` to see the website. 


# To deploy to gh-pages (Not implemented Yet) 

1. Start by working from a clone of the repository you want to deploy to. This step is important, otherwise your output may deploy to the wrong location.
2. eploy to gh-pages, run: `npm run deploy`. By doing this, docpad will generate the site to the
remote gh-pages branch.

# To deploy to a personal webserver

1. Run: `npm run generate`
2. Copy the contents of `dist` directory to your server.


## Notes

- Modifications can be done to any source file or directory except for the contents of the `dist/` directory. The `dist`
  directory and its contents are not to be versioned since it contains the generated output made by eleventy from the
  source files and are overwritten.
- The 404 error page will only appear when deployed to the *root* of a gh-pages domain or gh-pages custom domain. It
  will not appear when deployed locally or when deployed through a gh-pages (sub) project. To test the 404 error page,
  either load the 404.html directly in a browser, or deploy to the root of a gh-pages domain.
