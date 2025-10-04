# Error: Generic "Failed to fetch" Message

## Symptom

When a network request fails in the application (e.g., the n8n workflow is down, or an API endpoint is incorrect), the UI displays a generic error message: `Error: Failed to fetch`. This message does not provide enough detail to effectively debug the problem.

## Diagnosis

The current error handling in the `generateCv` function in `App.js` is very basic. It catches any error and only displays the `err.message` property.

```javascript
} catch (err) {
    setError(err.message);
}
```

For network errors, this `message` is often just "Failed to fetch", which hides the more important details like the HTTP status code (e.g., 404 Not Found, 500 Internal Server Error) and any specific error information returned in the body of the server's response.

## Solution

To provide better debugging information, the error handling logic will be enhanced.

1.  **Check Response Status:** The code will specifically check if the `fetch` response is `ok` (i.e., if the status code is in the 200-299 range).
2.  **Extract Detailed Error:** If the response is not `ok`, the code will attempt to read the body of the response.
3.  **Display Richer Error Message:** The `setError` function will be called with a more informative message that includes the status code and the detailed error from the response body.

This will change the error message from a generic "Failed to fetch" to something much more useful, like:

`Error: 500 Internal Server Error - The n8n workflow experienced an issue.`
