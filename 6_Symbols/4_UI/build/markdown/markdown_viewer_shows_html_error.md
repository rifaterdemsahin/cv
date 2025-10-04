# Markdown Viewer Shows HTML Instead of Content

## Symptom

When clicking a link to a markdown file (e.g., `README.md`) in the top menu, the markdown viewer modal opens, but instead of showing the rendered markdown, it displays the raw HTML of the main `index.html` application page.

## Diagnosis

This occurs because of how the React development server provides access to files. For security and simplicity, a React application can only directly fetch and access files that are located within its `public` directory.

The markdown files linked in the menu (`README.md`, `gemini.md`, etc.) are located in the project's root or in other directories, outside of `6_Symbols/4_UI/public/`.

When the `MarkdownViewer` component tries to `fetch('./README.md')`, the development server cannot find the file at that path relative to the `public` folder. As a fallback for single-page applications, the server responds with the main `index.html` file, causing the raw HTML to be loaded into the viewer.

## Solution

To resolve this, all markdown files that need to be readable by the application at runtime must be placed inside the `public` directory.

1.  **Create a new directory:** A `markdown` folder will be created inside `6_Symbols/4_UI/public/` to keep the files organized.
2.  **Copy Files:** All target markdown files from across the project will be copied into this new `public/markdown` directory.
3.  **Update Links:** The `TopMenu.js` component will be updated to change the file paths to point to the new location (e.g., from `./README.md` to `./markdown/README.md`).

This ensures that when the `fetch` request is made, the files are accessible to the running application.
