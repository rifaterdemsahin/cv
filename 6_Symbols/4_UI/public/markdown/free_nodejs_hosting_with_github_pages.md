# Formula: Free Node.js Backend with GitHub Pages Frontend

This document outlines how to run a Node.js backend for free and connect it to a static frontend hosted on GitHub Pages.

## The Architecture: Decoupled Frontend and Backend

The setup consists of two separate parts:

1.  **Frontend:** A static React application hosted on GitHub Pages. We have already configured this with the GitHub Actions workflow.
2.  **Backend:** A Node.js application (e.g., an Express API) hosted on a separate, free-tier cloud platform. This backend will handle dynamic logic and data processing.

The React frontend will make HTTP requests (API calls) to the Node.js backend to fetch data or trigger actions.

## Free Node.js Hosting Options

Several platforms offer free tiers that are perfect for personal projects and prototypes. Here are some popular choices for 2025:

*   **Render:** Offers a free tier for web services with automatic deployments from GitHub.
*   **Vercel:** Provides a generous free "Hobby" plan, ideal for serverless functions and Next.js applications.
*   **Netlify:** Another excellent option with a free tier for serverless functions and web hosting.
*   **Heroku:** A long-standing platform with a free tier (dynos sleep after inactivity).
*   **Google Cloud Run:** Offers a perpetual free tier, and you are already in the Google Cloud ecosystem. This is a great option if you want to consolidate your projects.
*   **Cyclic, Fly.io, and others:** Also provide compelling free tiers.

## Deployment Guides

### Example with Render

Render is a good choice for its simplicity. Here’s a general guide:

**`index.js` for Render**
```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for your GitHub Pages domain
app.use(cors({
  origin: 'https://rifaterdemsahin.github.io'
}));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

**Deployment Steps:**

1.  Sign up for a free account on [Render](https://render.com/).
2.  Click "New +" and select "Web Service".
3.  Connect your GitHub account and select the repository for your backend.
4.  Render will automatically detect that it's a Node.js application.
    *   **Name:** Give your service a name (e.g., `cv-backend`).
    *   **Start Command:** Ensure it's `npm start` or `node index.js`.
5.  Click "Create Web Service". Render will build and deploy your application.

Once deployed, Render will provide you with a public URL for your backend (e.g., `https://cv-backend.onrender.com`).

### Example with Vercel

Vercel is excellent for its seamless GitHub integration and automatic deployments.

**`index.js` for Vercel**

For Vercel, you need to export the app for it to work in a serverless environment.

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for your GitHub Pages domain
app.use(cors({
  origin: 'https://rifaterdemsahin.github.io'
}));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel!' });
});

// Export the app
module.exports = app;
```

**Deployment Steps:**

1.  Sign up for a free account on [Vercel](https://vercel.com/) with your GitHub account.
2.  From your Vercel dashboard, click "Add New..." and select "Project".
3.  Select your backend's GitHub repository.
4.  Vercel will automatically detect it as a Node.js project and configure the build settings. You typically don't need to change anything.
5.  Click "Deploy". Vercel will build and deploy your application.

After deployment, Vercel will give you a public URL (e.g., `https://your-project-name.vercel.app`). Any time you push a change to your GitHub repository, Vercel will automatically redeploy the application.

## Connecting the React Frontend

Now, update your React application to communicate with the new backend.

In `6_Symbols/4_UI/src/App.js`, modify the `fetch` call to use the public URL of your deployed backend:

```javascript
// Before
// const response = await fetch('https://n8n.rifaterdemsahin.com/webhook/cv', {

// After (example with Vercel URL)
const response = await fetch('https://your-project-name.vercel.app/api/generate-cv', {
    method: 'POST',
    // ... rest of the code
});
```

**Important:** It's best practice to use environment variables for your API URL. In your React app, you can create a `.env` file and store the URL there:

`6_Symbols/4_UI/.env`
```
REACT_APP_API_URL=https://your-project-name.vercel.app
```

And in your code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
const response = await fetch(`${apiUrl}/api/generate-cv`, { /* ... */ });
```

After making these changes to your React app, the updated version will be deployed to GitHub Pages the next time you push to the `main` branch, and it will be able to communicate with your new Node.js backend.

## A Note on CORS

Cross-Origin Resource Sharing (CORS) is a security feature that browsers use. By default, your backend will reject requests from different domains (like your GitHub Pages site). That's why we added the `cors` package to the backend and configured it to allow requests from your GitHub Pages URL.
