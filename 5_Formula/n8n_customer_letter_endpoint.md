# n8n Endpoint: Generate Customer Letter

This document provides details for the n8n workflow that generates a customized customer letter.

## Endpoint URL

`https://n8n.rifaterdemsahin.com/webhook/24ba00ca-e972-4cd5-8911-54acb2f7803a`

## Purpose

This webhook is designed to receive a prompt (e.g., a job description or customer details) and a set of markdown files containing CV data. It processes this information to generate a personalized customer letter in HTML format.

---

## JSON Input Structure

The endpoint expects a JSON object in the body of the POST request with the following structure:

```json
{
  "prompt": "<string>",
  "markdown_files": {
    "1_personal_info.md": "<file_content>",
    "2_skills.md": "<file_content>",
    "3_work_experience.md": "<file_content>",
    "4_education.md": "<file_content>",
    "5_projects.md": "<file_content>",
    "6_certifications.md": "<file_content>",
    "7_additional_info.md": "<file_content>",
    "8_niche.md": "<file_content>"
  }
}
```

*   **`prompt`**: A string containing the job description, customer information, or any other text that will guide the letter generation.
*   **`markdown_files`**: An object where each key is the name of a markdown file and the value is the full text content of that file.

---

## Expected Output

The workflow is expected to process the input and return a single block of HTML content.

*   **Content-Type:** `text/html`
*   **Body:** The generated customer letter as a string of HTML.

This HTML can then be rendered directly in the browser, as the "Dynamic CV Generator" application does.
