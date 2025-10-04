# Formula: Data Flow in the React Application

This document explains how data is stored and loaded in the CV Generator React application, clarifying the roles of the `2_Data` and `public/data` directories.

## The Two Data Directories

In the project, you will find two directories that seem to hold similar data:

1.  **`6_Symbols/2_Data/`**
2.  **`6_Symbols/4_UI/public/data/`**

Understanding their different roles is key to understanding the application's data flow.

### 1. `6_Symbols/2_Data/` - The Source of Truth

This directory should be considered the **master source** or the **source of truth** for your CV data. This is where you should edit and manage the canonical information for your skills, experience, education, etc.

It exists outside of the React application's `public` folder and is the central repository for your information.

### 2. `6_Symbols/4_UI/public/data/` - The Deployed Data

This directory contains the data that the **live, running React application actually loads**.

**Why is this separate?**
A fundamental rule of React applications (and most web applications) is that they can only access files that are located within their designated `public` folder. The contents of the `public` folder are served by the web server, making them accessible to the browser.

When the code in `App.js` makes a call like `fetch('/data/2_skills.md')`, it is requesting a file from the root of the web server, which corresponds directly to the `public` folder.

## The Data Workflow

The intended workflow is as follows:

1.  **Edit:** You make changes to your CV information in the files located in `6_Symbols/2_Data/`.

2.  **Copy/Sync:** Before building or deploying the React application, the data from `6_Symbols/2_Data/` must be copied into `6_Symbols/4_UI/public/data/`.

3.  **Deploy & Run:** The React application is then built and deployed. When it runs, it fetches the data from the `public/data` directory, which now contains the latest information.

This separation ensures that you have a clean, original source for your data, distinct from the version that gets bundled with the web application.
