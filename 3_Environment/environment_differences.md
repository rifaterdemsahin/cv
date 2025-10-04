# Environment Differences: Local vs. GitHub Pages vs. Vercel

This document explains the key differences between your local development environment on your Mac and the production environments on GitHub Pages and Vercel where your application is deployed.

Understanding these differences is crucial for debugging issues that only appear after deployment.

---

## 1. Local Mac Environment

This is your development playground.

*   **Purpose:** Writing code, testing features, and debugging with instant feedback.
*   **Server:** When you run `npm start`, you are using the **webpack-dev-server**. This is a powerful tool that automatically recompiles your code when you save a file and provides detailed error messages.
*   **URL Structure:** It runs at the **root** of a domain (e.g., `http://localhost:3000/`). This is why paths starting with `/` (like `/data/`) work without issue locally.
*   **File Access:** The development server has access to your **entire project directory**. This is why, initially, you could access files outside the `public` folder, even though this doesn't work in production.

## 2. GitHub Pages Environment

This is where your public-facing frontend lives.

*   **Purpose:** To host the final, built version of your **static frontend** application for the world to see.
*   **Server:** GitHub Pages uses a **static file server**. It does **not** run Node.js or any other backend code. It simply serves the pre-built HTML, CSS, and JavaScript files from your `build` directory.
*   **URL Structure:** Your project is hosted in a **subdirectory** (`https://rifaterdemsahin.github.io/cv/`). This was the cause of several errors related to file paths, as paths needed to be relative to the `/cv/` sub-folder.
*   **File Access:** It only has access to the files inside the `build` folder that your GitHub Actions workflow creates and deploys. It cannot see your source code or any other file from your project.

## 3. Vercel Environment

This is where your backend "brain" operates.

*   **Purpose:** To host and run your **backend Node.js API** as a serverless function.
*   **Server:** Vercel uses a **serverless function** environment. When a request comes to your API, Vercel spins up an instance of your Node.js application to handle it. This is highly scalable and cost-effective.
*   **URL Structure:** Your Vercel deployment runs at the **root** of its own domain (e.g., `https://cv-tau-ashen.vercel.app/`).
*   **File Access:** The running serverless function only has access to the files that were included in its specific deployment package (i.e., your `index.js`, `package.json`, etc.).

## Summary of Key Differences

| Feature          | Local (Mac)              | GitHub Pages (Frontend)  | Vercel (Backend)          |
| ---------------- | ------------------------ | ------------------------ | ------------------------- |
| **Purpose**      | Development              | Static Site Hosting      | Serverless API Hosting    |
| **Server**       | Node.js Dev Server       | Static File Server       | Serverless Functions      |
| **URL Path**     | Root (`/`)               | Subdirectory (`/cv/`)    | Root (`/`)                |
| **File Access**  | Full Project Access      | Only `build` folder      | Only deployed backend files |
