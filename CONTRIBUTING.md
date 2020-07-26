# `FLOE Project`

Floe is creating tools that help transform, augment, and personalize the learning experience.
Floe provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.
The present version of the Floe Project website is generated using 11ty (https://www.11ty.dev/).

**To run the project locally**:

1. Clone the project locally.
2. Go to the folder directory where you cloned the project in terminal.
3. Get the required node modules: `npm install`
4. Run eleventy from the fluid-website directory `npm run eleventyport`.
5. Open `http://localhost:9778/` to see the website.

**The directory structure is as follows:**

* `_.github` - It includes the issue and PR templates for the FLOE Project Repository.
* `src` - The src folder contains all the files needed to build the site using 11ty. It contains content of all the blog posts/news articles, CSS files, Index Pages, layouts for pages, partial templates, Javascript codes etc.
* `.eleventy.js` - The Configuration file used by 11ty in order to build the site. Specifies the collections for 11ty, passthroughcopy files, and other settings including the source folder for input and output.
* `.eleventyignore` - Contains folder which are ignored by Eleventy while building the site.
* `.gitignore` - List of folders not to be uploaded to Github. contains node_modules and dist folder, which is the folder where 11ty saves output files.
* `.eslintrc.json` - EsLint Configuration data.
* `.eslintignore` - EsLint exempted files.
* `AUTHORS.md` - List of copyright holders and Contributors
* `Gruntfile.js` - Grunt file used to copy data from node_modules and do linting process.
* `package.json` - Pinned list of dependencies required to build the site.
* `README.md` - Read Me file provides introduction to the repository.

**Contributions to the project can be made in following ways:**

1. *Contribution towards building features for the project.*
  - There are several features that still require attention.
    - Improving the User interface of submitted answers.
    - Search functionality among the site data.
    - Support for Comments.

2. *Submitting new blog posts or news articles*
 - Answer submission through Github:
   - Go to the `src/posts` folder
   - Create a new Markdown file with title in the following format - `YYYY-MM-DD-titleOfNewsArticle.md`.
   - Use the YYYY-MM-DD-newsarticlename.md file as template.
   - Update the date, title and permalink in the front matter.
   - Your article must have a specific template as mentioned below to get merged. make sure to follow the template while submitting the answer.
   - The template is as follows:
      `---`
      `layout: layouts/post`
      `title: Title of News Article`
      `date: 'YYYY-MM-DD'`
      `tags: post`
      `permalink: posts/YYYY-MM-DD-newsArticleName.html`
      `---`
      `Content Data`

If you still have any queries/doubts regarding the project, feel free to join our IRC Channel #fluid-work on Freenode.
Feel free to create a new issue if you find any bugs in the project that requires our attention or you may even send a Pull Request for fixing it.
