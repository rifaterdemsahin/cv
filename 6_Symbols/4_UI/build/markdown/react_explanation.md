# How the Dynamic CV React App Works

This document explains the inner workings of the React application located in the `6_Symbols/4_UI/` directory. Its primary purpose is to dynamically generate a CV by combining stored personal data with a user-provided job description.

### Core Technologies

*   **React:** A JavaScript library for building user interfaces.
*   **Fetch API:** Used for making network requests to retrieve data and send it to the processing backend.
*   **n8n:** An external workflow automation tool that receives the data, processes it, and returns a generated CV.

### File Structure & Purpose

-   `index.html`: The main HTML file and the entry point for the browser. It contains the root element (`<div id="root"></div>`) where the React application is mounted.
-   `index.js`: The main JavaScript entry point. It imports the `App` component and uses `ReactDOM` to render it into the `root` div in `index.html`.
-   `App.js`: The core component of the application. It manages the state, user interactions, and the entire CV generation logic.
-   `style.css`: Contains the styles for the application's user interface.
-   `public/data/`: This directory holds the CV data, broken down into individual Markdown (`.md`) files (e.g., `1_personal_info.md`, `3_work_experience.md`).

### Step-by-Step Workflow

The application follows these steps to generate a CV:

1.  **Loading:** The browser loads `index.html`. The script tag `<script src="/static/js/bundle.js"></script>` loads the compiled React application.

2.  **Initialization:** `index.js` executes, rendering the `App` component into the `<div id="root">`. The user sees a text area and a "Generate CV" button.

3.  **User Input:** The user pastes a job description or other requirements into the text area.

4.  **CV Generation Trigger:** The user clicks the "Generate CV" button, which calls the `generateCv` function in `App.js`.

5.  **Local Data Fetching:** The `generateCv` function initiates a series of `fetch` requests to retrieve the content of each Markdown file from the `public/data/` directory.

6.  **Data Aggregation:** The content of all markdown files is collected and structured into a single JSON object.

7.  **API Request to n8n:** The application sends a `POST` request to the n8n webhook endpoint (`https://n8n.rifaterdemsahin.com/webhook/cv`). The body of this request contains the JSON object with both the user's prompt and the aggregated markdown data.

8.  **Backend Processing:** The n8n workflow receives the data, processes it (likely using an AI model), and generates a tailored CV in HTML format.

9.  **Receiving the Response:** The React app receives the generated HTML as the response from the n8n webhook.

10. **Displaying the CV:** The `App` component updates its state with the new HTML and uses the `dangerouslySetInnerHTML` attribute to render it directly onto the page for the user to see.

### Data Flow Diagram

```
[User Enters Prompt] -> [React App UI] --(Click)--> [generateCv function]
                                                     |
                                                     v
[Fetches .md files from /public/data/] -> [Aggregates Data] -> [POST to n8n Webhook]
                                                                     |
                                                                     v
                                                         [Receives HTML Response]
                                                                     |
                                                                     v
                                                         [Renders HTML in UI]
```
