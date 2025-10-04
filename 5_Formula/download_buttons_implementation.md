# Formula: Download Buttons Implementation

This document explains the implementation of the "Download as PDF", "Download as DOCX", and "Download as Markdown" features.

## Overview

The goal is to allow the user to download the generated CV in three different formats. This is achieved by adding three buttons that appear after the CV is generated. Each button triggers a specific function to handle the file creation and download process on the client-side (in the browser).

## Core Dependencies

To handle the file conversions, the following JavaScript libraries have been added to the project:

1.  **`jspdf`**: A powerful library for generating PDF documents from scratch in JavaScript.
2.  **`html2canvas`**: A library that takes a "screenshot" of a given DOM element and renders it onto an HTML `<canvas>` element. We use this to capture the styled CV.
3.  **`html-to-docx`**: A library that converts an HTML string into a `.docx` file blob that can be downloaded.

## Implementation Details

### 1. Data Flow Assumption

The implementation relies on the n8n webhook returning a JSON object with two keys:

```json
{
  "html": "<p>HTML content...</p>",
  "markdown": "# Markdown content..."
}
```

The `App.js` component is updated to parse this JSON and store both the `html` and `markdown` content in its state.

### 2. Download as PDF

This is a two-step process:

1.  **Capture:** When the "Download PDF" button is clicked, `html2canvas` is used to render the `div` containing the generated CV's HTML into a canvas element.
2.  **Generate:** The canvas is converted to a PNG image data URL. A new `jsPDF` instance is created, and the image is added to the PDF document. The `save()` method is then called to trigger the download.

This method preserves the visual styling of the generated CV.

### 3. Download as DOCX

1.  **Convert:** When the "Download DOCX" button is clicked, the `html-to-docx` library takes the `cvHtml` string from the application's state.
2.  **Generate:** It converts the HTML into a `.docx` file blob in memory.
3.  **Download:** A temporary link is created for this blob, and a click is programmatically triggered on it to start the download.

### 4. Download as Markdown

This is the most straightforward process:

1.  **Create Blob:** When the "Download Markdown" button is clicked, a new `Blob` object is created from the `cvMarkdown` string from the application's state. The MIME type is set to `text/markdown`.
2.  **Download:** A temporary link is created for this blob, and a click is triggered to download the `.md` file.
