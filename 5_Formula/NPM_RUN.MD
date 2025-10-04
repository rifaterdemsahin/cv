I've addressed the errors you were seeing. The root cause was that the React application was not being run correctly. I have now added the necessary configuration files (package.json) and updated the entry point of the application (index.js) to follow modern React practices.

To run the application and fix the errors, please follow these steps in your terminal:

Navigate to the application directory:

cd /Users/rifaterdemsahin/projects/cv/6_Symbols/4_UI/
Install the dependencies:

npm install
Start the development server:

npm start
This will start a development server (usually on http://localhost:3000) and open the application in your browser. The 404 error for bundle.js will be resolved because the development server will correctly bundle the JavaScript files and serve them.

Now you will be able to use the dynamic CV generator as intended.