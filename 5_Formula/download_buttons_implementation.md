# Formula: Download Buttons Implementation

This document explains the implementation of the "Download as PDF", "Download as DOCX", and "Download as Markdown" features.

## Overview

The goal is to allow the user to download the generated CV in three different formats. This is achieved by adding three buttons that appear after the CV is generated. Each button triggers a specific function to handle the file creation and download process on the client-side (in the browser).

## Core Dependencies

To handle the file generation and download, the following JavaScript libraries are used:

1.  **`jspdf`**: A powerful library for generating PDF documents.
2.  **`html2canvas`**: A library that takes a "screenshot" of a DOM element. We use this to capture the styled CV for the PDF.
3.  **`file-saver`**: A utility for saving files on the client-side, used for the DOCX and Markdown downloads.

## Implementation Details

### 1. Data Flow Assumption

The implementation relies on the n8n webhook returning a JSON object with the following keys:

```json
{
  "markdown": "# Markdown content...",
  "docx_base64": "UEsDBBQABgAIAAAAIQD..."
}
```

The `App.js` component parses this JSON and stores the `markdown` and `docx_base64` content in its state.

### 2. Download as PDF

This is a two-step process that renders the Markdown as HTML and then captures it:

1.  **Capture:** `html2canvas` is used to render the `div` containing the `<ReactMarkdown>` component into a canvas element.
2.  **Generate:** The canvas is converted to a PNG image. A new `jsPDF` instance is created, the image is added to the PDF, and the `save()` method is called to trigger the download.

### 3. Download as DOCX (Backend-driven)

To avoid browser compatibility issues, the DOCX conversion is handled by the backend (n8n workflow).

1.  **Receive:** The frontend receives the `.docx` file as a `base64` encoded string from the backend.
2.  **Decode:** When the "Download DOCX" button is clicked, the `atob` function decodes the base64 string into binary data.
3.  **Create Blob & Download:** The binary data is converted into a `Blob`. The `saveAs` function from `file-saver` is then used to trigger the download of the `.docx` file.

### 4. Download as Markdown

1.  **Create Blob:** A `Blob` object is created from the `cvMarkdown` string stored in the application's state.
2.  **Download:** The `saveAs` function is used to download the `.md` file.

### 5. Download All

A "Download All" button has been added for convenience. When clicked, it simply calls the `downloadPdf()`, `downloadDocx()`, and `downloadMarkdown()` functions in sequence, triggering the three downloads for the user.
