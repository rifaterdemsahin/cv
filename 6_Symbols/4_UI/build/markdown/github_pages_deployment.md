# Deploying the React CV Application to GitHub Pages

This document outlines the process for deploying the dynamic CV application to GitHub Pages.

## Prerequisites

*   A GitHub repository for the project.
*   The React application located in the `6_Symbols/4_UI/` directory.

## Deployment Steps

The deployment process is automated using a GitHub Actions workflow defined in `.github/workflows/static.yml`.

### 1. Build the React Application

The workflow first needs to build the React application to generate static HTML, CSS, and JavaScript files. This is done by running the following commands in the `6_Symbols/4_UI/` directory:

```bash
npm install
npm run build
```

This will create a `build` directory inside `6_Symbols/4_UI/` containing the optimized static assets.

### 2. Configure GitHub Pages

In your repository settings, under "Pages", configure the source to be "GitHub Actions".

### 3. GitHub Actions Workflow

The `.github/workflows/static.yml` file contains the workflow that automates the build and deployment. Here is a summary of the steps:

1.  **Checkout:** The workflow checks out the repository's code.
2.  **Setup Node.js:** It sets up a Node.js environment.
3.  **Install and Build:** It navigates to the `6_Symbols/4_UI` directory, installs the necessary `npm` packages, and runs the `build` script.
4.  **Upload Artifact:** The workflow uploads the contents of the `6_Symbols/4_UI/build` directory as a GitHub Pages artifact.
5.  **Deploy:** The artifact is then deployed to GitHub Pages.

### 4. Accessing the Deployed Application

Once the workflow completes successfully, the CV application will be available at the URL provided in the "Pages" section of your repository settings (e.g., `https://<your-username>.github.io/<repository-name>/`).

## Current Workflow and Necessary Changes

The current `.github/workflows/static.yml` deploys the entire repository as a static site, which is not the correct approach for a React application. It needs to be modified to perform the build step as described above and deploy the resulting `build` directory.
