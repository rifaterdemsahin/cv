# GitHub Pages Site Not Loading Content

## Symptoms

*   The GitHub Pages site at [https://rifaterdemsahin.github.io/cv/](https://rifaterdemsahin.github.io/cv/) loads a blank page with no content.
*   A separate Vercel deployment at [https://cv-pgt75c5i6-rifaterdemsahins-projects.vercel.app/](https://cv-pgt75c5i6-rifaterdemsahins-projects.vercel.app/) appears to be working correctly.

## Diagnosis

The issue with the GitHub Pages deployment is caused by incorrect asset paths. The `index.html` file is trying to load the main JavaScript bundle from `/static/js/bundle.js`, which is an absolute path.

When the site is hosted in a subdirectory (like `/cv/`), this path incorrectly points to the root of the domain (`https://rifaterdemsahin.github.io/static/js/bundle.js`) instead of within the project's subdirectory (`https://rifaterdemsahin.github.io/cv/static/js/bundle.js`).

This results in a 404 error for the main JavaScript file, and therefore the React application fails to load.

The Vercel deployment works because it is hosted at the root of its domain, so the absolute paths resolve correctly.
