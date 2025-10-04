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
