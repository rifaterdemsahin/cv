# Formula: Deploying a Node.js Backend to Vercel

This document provides a step-by-step guide for deploying a Node.js backend to Vercel from a GitHub repository.

## 1. Prepare Your Node.js Application

For Vercel, your main server file (e.g., `index.js`) should export the Express app instance. This allows Vercel to use it in a serverless function environment.

**`package.json`**

Ensure you have `express` and `cors` in your dependencies.

```json
{
  "name": "my-vercel-backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

**`index.js`**

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for the domains you want to allow
// For example, your GitHub Pages site
app.use(cors({
  origin: 'https://rifaterdemsahin.github.io'
}));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel!' });
});

// Export the app for Vercel
module.exports = app;
```

Push this code to a GitHub repository.

## 2. Deploy to Vercel

1.  **Sign Up:** Create a free account on [Vercel](https://vercel.com/) using your GitHub account.

2.  **Import Project:** From your Vercel dashboard, click "Add New..." and select "Project".

3.  **Select Repository:** Choose the GitHub repository that contains your Node.js backend code.

4.  **Configure Project:** Vercel will automatically detect that it is a Node.js project and set the build and output settings. You typically do not need to change these default settings.

5.  **Environment Variables (Optional):** If your application requires environment variables (e.g., API keys), you can add them in the "Environment Variables" section.

6.  **Deploy:** Click the "Deploy" button.

Vercel will now build and deploy your application. Once the deployment is complete, you will be provided with a public URL for your backend (e.g., `https://your-project-name.vercel.app`).

## 3. Automatic Deployments

One of the key features of the Vercel and GitHub integration is automatic deployments. Whenever you push new changes to your connected GitHub repository branch (usually `main`), Vercel will automatically trigger a new build and deploy the updated version of your application.
