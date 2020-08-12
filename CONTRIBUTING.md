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
   `filename: Shorter URL. Can also contain capital characters`
   `---`
   `Content Data`

  * The URL for news articles can be generated from title and date or filename or date metadata in front matter.
  * If filename metadata is present, then filename and date will be used for creating URL else title and date would be used.
  * The filename metadata is used for creating custom URLs.
  * There is a bit of inconsistence in older blog filenames. Some old news articles have capital
    characters in their URL and hence 'filename' metadata has been set in front matter of such files.
  * You need to set 'filename' metadata in front matter only if the title of your news article is quite long and
    you need a shorter URL for the post thereby creating a custom URL as mentioned above.

If you still have any queries/doubts regarding the project, feel free to join our IRC Channel #fluid-work on Freenode.
Feel free to create a new issue if you find any bugs in the project that requires our attention or you may
even send a Pull Request for fixing it.
