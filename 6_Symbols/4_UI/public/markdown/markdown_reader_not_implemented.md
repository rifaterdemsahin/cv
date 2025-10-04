# Markdown Links Do Not Open in a Reader

## Symptom

When running the application locally, clicking a link to a markdown file in the top menu (e.g., `http://localhost:3000/gemini.md`) navigates the browser to that file and displays the raw, unformatted markdown text instead of opening it in a styled reader or modal.

## Diagnosis

This is the expected behavior before the markdown reader feature is implemented. The links are standard `<a>` tags that cause a full browser navigation. The React application does not yet have a mechanism to intercept these clicks and display the content in a custom component.

## Plan for Resolution

1.  **Create a `MarkdownViewer` component:** This component will be responsible for fetching and rendering markdown content within a modal window.
2.  **Add `react-markdown` library:** This library will be used to parse the markdown and convert it to HTML.
3.  **Update `TopMenu.js`:** The links will be converted to buttons that trigger a function to open the `MarkdownViewer` modal with the content of the selected file.
4.  **Update `App.js`:** The main application component will manage the state of the modal (i.e., whether it is open and which file it is displaying).
