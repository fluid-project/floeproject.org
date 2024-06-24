---
title: Developing an Accessible Framework for WCAG Audit Reporting
date: "2024-06-24"
excerpt: Developing an accessible, web-based framework to support our accessibility auditing workflow.
---
The IDRC often conducts formal or informal audits of websites for accessibility under the [Web Content Accessibility Guidelines](https://hidde.blog/introducing-an-eleventy-starter-project-for-wcag-reports/),
both internally and as part of our accessibility consulting work.

We've used a variety of tools to document the results of these audits over the years. Recently, building on our work
with [static websites and content management systems for them](https://floeproject.org/news/mon-jun-24-2024-00-00-00-gmt-0000-coordinated-universal-time-evaluating-static-content-management-systems/),
we've begun developing an [Eleventy](https://11ty.dev/)-based WCAG auditing tool based on work by [Hidde de Vries](https://hidde.blog/introducing-an-eleventy-starter-project-for-wcag-reports/).

Hidde's [eleventy-wcag-reporter](https://github.com/hidde/eleventy-wcag-reporter) project provides a fantastic
accessible starter kit for Eleventy which lets you add multiple audits to a single Eleventy site, generates an
overview of compliance with WCAG success criteria, and lets you create detailed issues with screenshots, code
samples and reference links. We've worked to adapt his tool to our workflow, adding some new features including:

- A content management system (CMS) to allow non-developers to easily file issues and complete report details
- Automatic import of WCAG success criteria from the W3C's data repository to maintain an up-to-date list within
  the tool itself
- A detailed table indicating support for individual success criteria
- The ability to convert issues in an audit report into issues on GitHub or GitLab with a single click
- The ability to generate an accessible PDF of the audit report as part of the build process

The [IDRC WCAG Reporter](https://github.com/inclusive-design/idrc-wcag-reporter) is in active development. We're
grateful to Hidde for his initial work on this tool and we're looking forward to sharing our version more widely in the
months to come as we integrate it into our accessibility auditing workflow.
