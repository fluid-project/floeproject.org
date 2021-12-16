# Contributing to the `FLOE Project` website

This document describes how to contribute content to the FLOE Project website. Please refer to the [`README.md`](./README.md)
file for information on how to build and run the website, as well as other information.

## Updating content

Content changes must be made through the GitHub repository. Please submit a Pull Request for the changes. Once
merged to `main`, the changes will automatically be deployed to the production site.

Content for the site is stored in the [`collections` directory](./src/collections). Content files are written in
Markdown and make use of YAML front matter.

## Using Front Matter

Different content pages may use special front matter properties to define their appearance and behaviour on the website.

### Projects

Projects are located in [`./collections/projects/`](./src/collections/projects/) and use the following special front
matter:

* `order`: defines the position in the “Featured Projects” section on the home page. `order` only applies to content
  marked with the `featured` tag.
* `tags` - `featured`: defines whether the project is to be displayed on the front page in the “Featured Projects” and
  is sorted by `order`. Note: All projects marked as `featured` are displayed on the home page. On the Projects index
  those tagged with `featured` will be displayed first in the list.
* `tags` - `active`: defines whether a project is currently actively being worked on. Projects marked as `active` will
  appear after projects marked with `featured` and will be sorted by date. Projects with neither `active` or `featured`
  tags will appear in the projects index list sorted by date after `active` projects.

### News

News is located in [`./collections/news/`](./src/collections/news/) and uses the following special front matter:

* `excerpt`: a short summary or description of the news article. This appears in the News index page and on the home
  page. News content should have `excerpt` front matter.

## New Features and Bug Reports

The project welcomes feature requests and bug reports from the community which can be [submitted via Github](https://github.com/fluid-project/floeproject.org/issues).
