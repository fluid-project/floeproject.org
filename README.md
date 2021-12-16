# What is the FLOE Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/fac64dc9-f556-4caf-8694-3ef2f902ac9c/deploy-status)](https://app.netlify.com/sites/fluid-floeproject-org/deploys)

FLOE is creating tools that help transform, augment, and personalize the learning experience.

FLOE provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.

## This Repository

This repository contains the markup needed to deploy the floeproject.org website.

## To Build Locally

1. Get the required node modules: `npm ci`
2. Run locally `npm start`.
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
* 404 and redirets may only work when deployed to a webserver and/or to netlify.

## Third party resources included

### Open Font License (OFL 1.1) - [License text](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)

* [Literata](https://fonts.google.com/specimen/Literata)

### Apache License, Version 2.0 - [License text](https://www.apache.org/licenses/LICENSE-2.0)

* [Open Sans](https://fonts.google.com/specimen/Open+Sans)

### Creative Commons - [Trademark usage policies](https://creativecommons.org/policies)

* [Icons](https://creativecommons.org/about/downloads)
