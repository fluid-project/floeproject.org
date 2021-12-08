# What is the FLOE Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/fac64dc9-f556-4caf-8694-3ef2f902ac9c/deploy-status)](https://app.netlify.com/sites/fluid-floeproject-org/deploys)

FLOE is creating tools that help transform, augment, and personalize the learning experience.

FLOE provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.

## This Repository

This repository contains the markup needed to deploy the floeproject.org website.

## To Build Locally

1. Get the required node modules: `npm ci`
2. Run eleventy from the fluid-website directory `npm start`.
3. Open `http://localhost:8080/` to see the website.

## To build locally using Docker

You can serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

* Build the image: `docker build -t floeproject .`
* Run the container: `docker run --name floeproject -p 8000:80 floeproject`

The website will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the website, repeat the steps to build the image and start a new container.

## To deploy to a personal webserver

1. Run: `npm run build`
2. Copy the contents of `dist` directory to your server.

## Notes

* Modifications can be done to any source file or directory except for the contents of the `dist/` directory. The `dist`
  directory and its contents are not to be versioned since it contains the generated output made by eleventy from the
  source files and are overwritten.
* The 404 error page will only appear when deployed to the *root* of a gh-pages domain or gh-pages custom domain. It
  will not appear when deployed locally or when deployed through a gh-pages (sub) project. To test the 404 error page,
  either load the 404.html directly in a browser, or deploy to the root of a gh-pages domain.
* The most recent news items should remain in the list on the floeproject.org `src/index.html` page. When a new item is
  added, the oldest one on the list should be removed. The list is currently manually maintained.

## Third party resources included

### Open Font License (OFL 1.1)

* [Literata](https://fonts.google.com/specimen/Literata?query=literata)
