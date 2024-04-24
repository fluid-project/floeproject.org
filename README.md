# What is the FLOE Project

FLOE is creating tools that help transform, augment, and personalize the learning experience.

FLOE provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.

## This Repository

This repository contains the markup needed to deploy the floeproject.org website.

## To Build Locally

1. Clone the project locally.
2. Go to the directory where you cloned the project.
3. Install dependencies: `npm ci`
4. Run locally: `npm start`.
5. Open <http://localhost:8080/>

## To build locally using Docker

You can serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

* Build the image: `docker build -t floeproject .`
* Run the container: `docker run --name floeproject -p 8000:80 floeproject`

The website will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the website, repeat the steps to build the image and start a new container.

## To deploy to a personal webserver

1. Run: `npm run build`
2. Copy the contents of the `_site` directory to your server.

## Deploy preview

Changes in the `dev` branch can be previewed and tested via the deploy preview site hosted by Cloudflare Pages:

<https://dev.floeproject-org.pages.dev/>

## Notes

* Modifications may be made to any source file or directory except for the contents of the `_site/` directory. The `_site`
  directory and its contents are not to be versioned since it contains the generated output made by eleventy from the
  source files and are overwritten.
* Redirects may only work when deployed to a webserver or to Cloudflare Pages.

## Third party resources included

### [Open Font License (OFL 1.1)](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)

* [Literata](https://fonts.google.com/specimen/Literata)

### [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

* [Open Sans Font](https://fonts.google.com/specimen/Open+Sans)

### [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

* [Creative Commons Icons](https://creativecommons.org/about/downloads)
