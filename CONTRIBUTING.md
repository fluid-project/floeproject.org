# `FLOE Project`

FLOE is creating tools that help transform, augment, and personalize the learning experience.
FLOE provides the resources needed to enable inclusive access to personally relevant, engaging learning opportunities
for the full diversity of learners and content producers.
The present version of the FLOE Project website is generated using [11ty](https://www.11ty.dev/).

**To run the project locally**:

1. Clone the project locally.
2. Go to the folder directory where you cloned the project in terminal.
3. Get the required node modules: `npm install`
4. Run eleventy from the fluid-website directory `npm run start`.
5. Open `http://localhost:8080/` to see the website.

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
  * The front matter of the article must follow the given format in order to work properly.
    Please note that the `filename` is optional and should only be used if you would like to have a URL
    different from the `title` value.
  * The template is as follows:

  ```yml
  ---
  title: Title of News Article
  date: 'YYYY-MM-DD'
  filename: Shorter URL. Can also contain capital characters
  ---
  Content Data
  ```

  * The URL for news articles is generated from the date and title metadata.
  * If filename metadata is present, then output filename will be created using the date and filename
    (instead of the default date and title filename). Use this option if the article title is too long
    for a good filename, or for supporting legacy posts with unusual naming.
  * The use of filename metadata in front matter is optional and should be used only if
    automatic filename of {date}-{title} is not sufficient.

If you still have any queries/doubts regarding the project, feel free to join our IRC Channel #fluid-work on Freenode.
Feel free to create a new issue if you find any bugs in the project that requires our attention or you may
even send a Pull Request for fixing it.
