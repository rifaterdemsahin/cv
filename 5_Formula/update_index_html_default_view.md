# Formula to Update index.html Default View

When updating the `index.html` file to change the default view, the javascript at the bottom of the file must also be updated.

Specifically, the `DOMContentLoaded` event listener calls the `showCategory` function with a hardcoded category ID.

**Example:**

```html
<script>
    function showCategory(categoryId) {
        // ... function implementation
    }
    // Show the first category by default
    document.addEventListener('DOMContentLoaded', () => {
        showCategory('core'); // <-- This line must be updated
    });
</script>
```

If the default view is changed to the 'description' category, then this line should be updated to:

```javascript
showCategory('description');
```

---

## Relationship between root `index.html` and `6_Symbols/4_UI/public/index.html`

These two `index.html` files serve very different purposes:

*   **`/index.html` (root):** This is a static HTML navigation page for the entire project. It provides links to different parts of the CV project, including different CV versions, documentation, and the React application itself. The menu and content of this page are defined directly in the HTML and manipulated with a simple javascript function.

*   **`6_Symbols/4_UI/public/index.html`:** This is the template file for the React application. When you run `npm start` or `npm run build`, the React development server and build process use this file as the entry point. The actual content of the page is generated and managed by React, which injects the application into the `<div id="root"></div>` element. You do not need to update this file with the same menu changes, as its content is controlled by the React components.
