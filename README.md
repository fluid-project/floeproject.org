What is the Floe Project?
=========================

Floe is creating tools that help transform, augment, and personalize the learning experience.

Floe provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.


This Repository
===============

This repository contains the markup needed to deploy the floeproject.org website.


Building a Docker image
=======================

You can serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

* Build the image: `docker build -t floeproject .`
* Run the container: `docker run --name floeproject -p 8000:80 floeproject`

The website will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the HTML code, repeat the steps to build the image and start a new container.


News Item Template
==================

An html template is provided for the news item in `./news/YYYY-MM-DD-news-item-title.html`
Save your renamed file to the `./news` folder.

Note!
=====
1. You will also need to add your news item (title and date) to the top of the news archive (in `./news/index.html`).
2. Remember to update the floeproject.org `./index.html` page with a short summary of your news item.
--> The three most recent news items should remain in the list on the floeproject.org `./index.html` page. When a new item is added, the oldest one on the list should be removed.
