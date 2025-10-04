# Formula: Implementing Page Breaks in PDF Generation

This document explains the rationale behind the change in the PDF generation logic for the "Download as PDF" feature.

## The Problem: Single-Page PDFs

The original method for generating PDFs used a library called `html2canvas` to essentially take a "screenshot" of the generated CV content displayed on the screen. This screenshot (a single, long image) was then placed into a PDF file.

This approach had a major drawback: for CVs with a lot of content, the entire long image was scaled down to fit onto a single PDF page. This resulted in extremely small, often unreadable text, making the PDF useless for longer documents.

## The Solution: True HTML-to-PDF Rendering

To fix this and ensure professional, readable documents, the PDF generation logic was refactored to use a more advanced, built-in feature of the `jspdf` library.

1.  **Old Method:** `html2canvas` (Screenshot) -> `jspdf` (Image on one page)
2.  **New Method:** `jspdf.html()` (Direct HTML Rendering)

The new `pdf.html()` method directly takes the HTML content of the generated CV from the application. It then intelligently processes and renders that HTML across multiple pages, automatically calculating where to create page breaks.

## The Benefits

*   **Automatic Page Breaks:** The content now flows naturally from one page to the next, just like a standard document.
*   **Readability:** The text size and formatting are preserved correctly across all pages, ensuring the PDF is always legible.
*   **Professional Output:** The generated PDFs look much more professional and are suitable for sharing.

## Dependency Cleanup

As a direct result of this improved method, the `html2canvas` library was no longer necessary. It has been removed from the project's dependencies to keep the codebase clean and efficient.
