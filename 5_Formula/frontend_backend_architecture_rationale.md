# Formula: Frontend & Backend Architecture Rationale

This document explains the rationale behind deploying the user interface (frontend) and the server logic (backend) to two separate services: GitHub Pages and Vercel.

## The Two-Part Architecture

Our application is split into two distinct parts:

1.  **Frontend (The User Interface):**
    *   **What it is:** The visual part of the application that you see and interact with in your browser.
    *   **Technology:** A React application.
    *   **Deployment:** Hosted on **GitHub Pages**.
    *   **URL:** [https://rifaterdemsahin.github.io/cv/](https://rifaterdemsahin.github.io/cv/)

2.  **Backend (The Server Logic):**
    *   **What it is:** The "brain" of the application that runs on a server. It handles requests, processes data, and performs tasks that can't be done in the browser.
    *   **Technology:** A Node.js Express application.
    *   **Deployment:** Hosted on **Vercel**.
    *   **URL:** [https://cv-tau-ashen.vercel.app/](https://cv-tau-ashen.vercel.app/)

## Why Use Two Separate Services?

Separating the frontend and backend is a modern and robust software architecture pattern. Here’s why we are using this approach:

### 1. Using the Best Tool for the Job

*   **GitHub Pages is Perfect for Static Sites:** It is a free and highly efficient service for hosting static files (HTML, CSS, JavaScript). Our React application, once built, becomes a set of static files, making GitHub Pages the ideal choice for hosting the frontend.

*   **Vercel is Perfect for Serverless Functions:** Vercel is a platform specialized in hosting serverless functions and dynamic Node.js applications. It provides a free, scalable, and easy-to-use environment for our backend code.

By using both, we leverage the strengths of each platform for the specific needs of each part of our application.

### 2. Independent Development and Deployment

You can work on the user interface (frontend) and the server logic (backend) independently. A change to the UI doesn't require you to redeploy the backend, and vice-versa. This makes the development process faster and more organized.

### 3. Scalability and Maintenance

If the application grows, you can scale the frontend and backend independently. If the backend needs more resources, you can upgrade your Vercel plan without touching the frontend. This separation makes long-term maintenance much simpler.

## How They Connect

The two parts communicate via API calls.

1.  You open the **frontend** URL in your browser (`https://rifaterdemsahin.github.io/cv/`).
2.  When you perform an action (e.g., click "Generate CV"), the React application sends an HTTP request to an endpoint on the **backend** (e.g., `https://cv-tau-ashen.vercel.app/api/generate-cv`).
3.  The backend on Vercel receives this request, processes it, and sends a response back to the frontend.
4.  The frontend then displays the result to you.
