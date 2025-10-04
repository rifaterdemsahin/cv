# Workflow Explanation

This n8n workflow creates a CV generation API that takes user information and returns it in three formats: HTML, Markdown, and DOCX. Here's how it works step-by-step:

## Flow Overview

```
Webhook → AI Agent → Convert to HTML → Generate DOCX → Respond
```

---

## Node-by-Node Breakdown

### 1. **Webhook (Entry Point)**
- **Type**: HTTP POST endpoint
- **Purpose**: Receives CV data from external applications
- **What it does**: 
  - Listens for POST requests at a specific URL path
  - Accepts JSON data containing CV information (name, experience, education, skills, etc.)
  - Triggers the workflow when a request arrives

**Example input:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "experience": [...],
  "education": [...],
  "skills": [...]
}
```

---

### 2. **AI Agent - Generate Markdown CV**
- **Type**: LangChain AI Agent
- **Connected to**: OpenRouter Chat Model (LLM)
- **Purpose**: Uses AI to create a professionally formatted CV
- **What it does**:
  - Takes the raw CV data from the webhook
  - Sends a prompt to the AI model asking it to create a professional CV in Markdown format
  - The AI structures the information with proper sections (Summary, Experience, Education, Skills)
  - Uses Markdown formatting (headers, bullet points, bold text)

**AI Prompt includes:**
```
"Create a professional CV in Markdown format based on: [user data]
Generate with sections: summary, experience, education, skills"
```

**Output example:**
```markdown
# John Doe
**Email:** john@example.com

## Professional Summary
Experienced software developer...

## Work Experience
### Senior Developer at Company X
- Developed features...
```

---

### 3. **OpenRouter Chat Model**
- **Type**: Language Model connection
- **Purpose**: Provides the AI intelligence for CV generation
- **What it does**:
  - Connects to OpenRouter API (which provides access to various LLMs)
  - Processes the AI Agent's prompt
  - Returns the generated Markdown CV text
- **Note**: Requires authentication credentials

---

### 4. **Convert Markdown to HTML (Code Node)**
- **Type**: JavaScript Code execution
- **Purpose**: Transforms Markdown into styled HTML
- **What it does**:
  - Takes the Markdown output from the AI Agent
  - Runs a JavaScript function that converts Markdown syntax to HTML tags:
    - `# Header` → `<h1>Header</h1>`
    - `**bold**` → `<strong>bold</strong>`
    - `* item` → `<li>item</li>` wrapped in `<ul>`
  - Wraps everything in a complete HTML document with CSS styling
  - Adds professional styling (fonts, colors, spacing, borders)

**Outputs:**
```json
{
  "markdown": "# John Doe\n## Experience...",
  "html": "<!DOCTYPE html><html>..."
}
```

---

### 5. **Generate DOCX (Code Node)**
- **Type**: JavaScript Code execution
- **Purpose**: Creates a Microsoft Word-compatible document
- **What it does**:
  - Takes both the Markdown and HTML from the previous step
  - Creates a minimal DOCX file structure (XML format)
  - Converts the content to base64 encoding
  - Base64 allows the binary file to be transmitted as text in JSON

**Note**: This implementation is simplified. A production version would use a proper DOCX library to create fully-formatted Word documents with all features.

**Outputs:**
```json
{
  "html": "<!DOCTYPE html>...",
  "markdown": "# John Doe...",
  "docx_base64": "UEsDBBQABgAIAAAAIQD..."
}
```

---

### 6. **Respond to Webhook**
- **Type**: HTTP Response
- **Purpose**: Sends the results back to the caller
- **What it does**:
  - Takes the complete JSON object with all three formats
  - Sends it as an HTTP response to whoever called the webhook
  - Completes the workflow

**Final Response:**
```json
{
  "html": "<!DOCTYPE html><html><head>...</head><body>...</body></html>",
  "markdown": "# John Doe\n\n## Professional Summary\n...",
  "docx_base64": "UEsDBBQABgAIAAAAIQDfpNJ..."
}
```

---

## Data Flow Summary

1. **External app** sends CV data → **Webhook**
2. **Webhook** passes data → **AI Agent**
3. **AI Agent** uses **OpenRouter Model** to generate Markdown CV
4. Markdown CV → **Convert to HTML** node creates HTML version
5. Both formats → **Generate DOCX** node creates Word file
6. All three formats → **Respond to Webhook** sends back to caller

---

## Use Cases

- **CV Builder Website**: User fills form → gets downloadable CVs in multiple formats
- **HR System Integration**: Automatically generate CVs from employee databases
- **Job Application Portal**: Candidates input info → system creates professional CVs
- **API Service**: Other applications can programmatically generate CVs

---

## Improvements for Production

1. **Better DOCX generation**: Use `docx` npm library for proper formatting
2. **Error handling**: Add nodes to catch and handle failures
3. **Validation**: Verify input data before processing
4. **Templates**: Allow users to choose CV templates/styles
5. **Caching**: Store frequently requested CVs to reduce AI calls