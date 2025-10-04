# Error: Cannot find module 'react-markdown'

This document explains the "Module not found" error related to the `react-markdown` package.

## Error Message

```
Compiled with problems:
×
ERROR
Cannot find module 'react-markdown'

ERROR in ./src/components/MarkdownViewer.js 6:0-43
Module not found: Error: Can't resolve 'react-markdown' in '/Users/rifaterdemsahin/projects/cv/6_Symbols/4_UI/src/components'
```

## Diagnosis

This error occurs when your application code (specifically `MarkdownViewer.js`) tries to import and use the `react-markdown` library, but the library is not found within your project's `node_modules` directory.

Even though we added the dependency to the `package.json` file, the actual package files have not been downloaded and installed into the project.

## How to Fix

To fix this, you need to install the project's dependencies. This command reads the `package.json` file and downloads all the required libraries.

1.  Open your terminal.
2.  Navigate to the React application's directory:
    ```bash
    cd 6_Symbols/4_UI
    ```
3.  Run the installation command:
    ```bash
    npm install
    ```
    *(If you use Yarn, run `yarn install` instead)*

After the installation is complete, you can restart your React development server (`npm start`), and the error will be resolved.
