# Error: Could not fetch 1_personal_info.md on GitHub Pages

## Symptom

When using the deployed "Dynamic CV Generator" on GitHub Pages, clicking the "Generate CV" button results in an error message: `Error: Could not fetch 1_personal_info.md`.

## Diagnosis

This error occurs because the application is trying to fetch data from an incorrect URL. The `fetch` call in `App.js` is using an absolute path: `/data/1_personal_info.md`.

*   The application is hosted at `https://rifaterdemsahin.github.io/cv/`.
*   The browser interprets the fetch path `/data/...` as being relative to the root of the domain, not the project path.
*   Therefore, it makes a request to `https://rifaterdemsahin.github.io/data/1_personal_info.md`, which does not exist.

The correct URL should be `https://rifaterdemsahin.github.io/cv/data/1_personal_info.md`.

This issue does not occur in the local development environment because the server runs at the root, so the absolute path works by coincidence.

## Solution

The fix is to make the fetch path aware of the application's deployment subdirectory. Create React App provides a special environment variable, `process.env.PUBLIC_URL`, for this exact purpose.

The `fetch` call in `App.js` will be modified:

*   **From:** `fetch("/data/${file}")`
*   **To:** `fetch("${process.env.PUBLIC_URL}/data/${file}")`

This ensures that the fetch URL is always correctly prefixed with the public path of the application, whether it's running locally or deployed in a subdirectory on GitHub Pages.
