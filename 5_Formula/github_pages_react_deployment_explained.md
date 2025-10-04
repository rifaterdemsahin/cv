# How the React CV Application Runs on GitHub Pages

This document explains how the React application, which is built with Node.js, is deployed to and runs on GitHub Pages.

## GitHub Pages: Static Site Hosting

GitHub Pages is a service that hosts static websites directly from a GitHub repository. This means it can serve HTML, CSS, and JavaScript files, but it cannot run server-side code like a Node.js application directly.

## The Build and Deployment Process

To get our React application running on GitHub Pages, we use a GitHub Actions workflow to automate a build and deployment process. The workflow is defined in the `.github/workflows/static.yml` file.

Here’s how it works:

1.  **Node.js Build Environment:** The workflow starts by setting up a Node.js environment on a virtual server.

2.  **Building the React App:** It then runs the standard `npm install` and `npm run build` commands inside the `6_Symbols/4_UI` directory. The `npm run build` command compiles the React application into a set of static files (HTML, CSS, and JavaScript) in a `build` directory.

3.  **Deploying Static Files:** The workflow takes the contents of the `6_Symbols/4_UI/build` directory and deploys them to the `gh-pages` branch of your repository, which is the branch that GitHub Pages uses to serve your site.

## Viewing the Running Page

Because of this process, the live website is not running a Node.js server. Instead, it's the static, optimized version of the React application. You can view the deployed application at:

[https://rifaterdemsahin.github.io/cv/](https://rifaterdemsahin.github.io/cv/)
