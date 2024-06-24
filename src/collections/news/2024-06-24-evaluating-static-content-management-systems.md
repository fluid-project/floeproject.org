---
title: Evaluating Static Content Management Systems
date: 2024-06-24
excerpt: Adopting an accessible, flexible content management system for our static websites.
---
The IDRC has embraced the use of simple, static websites for many of our projects including FLOE over the last four
years. Static websites are often built using static site generators (our favourite is [Eleventy](https://11ty.dev)),
pieces of software which take content in the form of text files and use templates to generate a website which can be
hosted almost anywhere. This approach to website development can result in fast, lightweight and maintainable websites
without the overhead required to host a traditional database-backed website using a content management system (CMS)
like WordPress or Drupal. Our static website starter kit, [Trivet](https://github.com/fluid-project/trivet), is the
result of our work on adopting static sites across our various projects.

One shortcoming of static websites is that content management can require some technical knowledge. Content management
systems designed specifically to provide an editing interface for the ingredients of a static site can bridge this gap.
For several years, the IDRC has used [Decap CMS](https://decapcms.org/), formerly [Netlify](https://netlify.com/) CMS,
which lets users edit content files stored on version control systems like [GitHub](https://github.com) or [GitLab](https://gitlab.com).
While Decap CMS has served us well, we've encountered some issues with its accessibility and flexibility, and this
spring we undertook a scan of other potential alternatives.

In our evaluation of static content management systems, we looked for a CMS that:

- Provided an accessible interface for content editing
- Supported managing content in multiple languages
- Supported more than one version control system and could be extended to support others
- Was agnostic of the hosting service used for the static site

We've been very pleased with our initial explorations of [Sveltia CMS](https://github.com/sveltia/sveltia-cms). The
developer behind this open source tool has been working diligently to create an backwards-compatible alternative to
Decap CMS with first-class multilingual content editing capabilities and [WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/)
compliance. So far, we've built this new CMS into two of our websites: the conference presentations page for
[Accessible Canada — Accessible World](https://acaw-cama.idrc.ocadu.ca/), and a new website offering
recommendations and strategies for [co-designing with kids](https://floeproject.org/news/2024-06-10-co-designing-with-children-with-disabilities/).
We're excited to follow Sveltia CMS' ongoing development and contribute wherever we can to building an accessible,
flexible and adaptable content management system to complement the simplicity and flexibility of static websites.
