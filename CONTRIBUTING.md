# `FLOE Project`

Floe is creating tools that help transform, augment, and personalize the learning experience.
Floe provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.
The present version of the Floe Project website is generated using [11ty](https://www.11ty.dev/).

**To run the project locally**:

1. Clone the project locally.
2. Go to the folder directory where you cloned the project in terminal.
3. Get the required node modules: `npm install`
4. Run eleventy from the fluid-website directory `npm run eleventyport`.
5. Open `http://localhost:9778/` to see the website.

**The directory structure is as follows:**

| File or Folder            | Description                                                                                                                                                                                                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.github`        | Directory containing the Issue templates as well as GitHub Actions workflow configuration files                                                                          |
| `src`             | Contains all the files needed to build the site using 11ty. This includes the content for all pages and news articles, CSS files, layout and partial templates, and JavaScript files.                                               |
| `.eleventy.js`    | The Configuration file used by 11ty in order to build the site. Specifies the collections for 11ty, [passthrough copy files](https://www.11ty.dev/docs/copy/), and other settings including the source folder for input and output. |
| `.eleventyignore` | A list of files and folders which are ignored by Eleventy while building the site                                                                                                                                                              |
| `.gitignore`      | A list of files and folders which won't be tracked by Git.                                                                                                                                                                          |
| `.eslintrc.json`  | [ESLint configuration data](https://eslint.org/docs/user-guide/configuring).                                                                                                                                                        |
| `.eslintignore`   | A list of files and folders which won't be passed through ESLint                                                                                                                                                                    |
| `AUTHORS.md`      | List of copyright holders and contributors                                                                                                                                                                                          |
| `Gruntfile.js`    | Grunt file used to copy data from node_modules and do linting process.                                                                                                                                                              |
| `package.json`    | Contains scripts and a list of dependencies required to build the site, as well as general information about the repository                                                                                                                                                                             |
| `README.md`       | Read Me file provides introduction to the repository.                                                                                                                                                                               |

**Contributions to the project can be made in following ways:**

1. *Contribution towards building features for the project.*

* There are several features that still require attention.
  * Improving the User interface of submitted answers.
  * Search functionality among the site data.
  * Support for Comments.

1. *Submitting new blog posts or news articles*

* Post submission through Github:
  * Go to the `src/news` folder
  * Create a new Markdown file with title in the following format - `YYYY-MM-DD-titleOfNewsArticle.md`.
  * Use the YYYY-MM-DD-newsarticlename.md file as template.
  * Update the date, title and permalink in the front matter.
  * Your article must have a specific template as mentioned below to get merged. make sure to follow the
    template while submitting the answer.
  * The template is as follows:
   `---`
   `layout: layouts/post`
   `title: Title of News Article`
   `date: 'YYYY-MM-DD'`
   `tags: post`
   `permalink: news/YYYY-MM-DD-newsArticleName.html`
   `---`
   `Content Data`

If you still have any queries/doubts regarding the project, feel free to join our IRC Channel #fluid-work on Freenode.
Feel free to create a new issue if you find any bugs in the project that requires our attention or you may
even send a Pull Request for fixing it.
