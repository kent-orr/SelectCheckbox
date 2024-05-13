# Custom Select Checkbox Dropdown

This project offers a simplified approach to creating a multiple select dropdown menu, focusing on maintaining the native HTML input functionalities such as form submission. It aims to enhance user interaction without compromising the standard behavior of HTML select elements, providing a straightforward solution for users to select multiple options from a dropdown menu. The component is designed to replace a standard HTML select element with a dropdown that supports searching and shift-click selection for range selections.

## Features

- **Search Functionality:** Users can quickly find options by typing in a search field within the dropdown.
- **Multiple Selections:** Users can select multiple options using checkboxes.
- **Shift-Click Range Selection:** By holding the Shift key and clicking, users can select a range of options between two clicks.
- **Customizable:** The appearance and behavior can be easily customized with CSS and JavaScript.

## How to Use

To integrate the Custom Select Checkbox Dropdown into your project, follow these steps:

1. **Include the JavaScript and CSS Files**

   Ensure that the JavaScript file (`index.js`) is included in your project. You may also want to create a CSS file to style the dropdown and include it in your project.

2. **HTML Setup**

   Add a select element with options to your HTML file. For example:

   ```html
   <label for="mySelect">Choose options:</label>
   <select id="mySelect" name="options">
     <option value="option1">Option 1</option>
     <option value="option2">Option 2</option>
     <option value="option3">Option 3</option>
     <!-- Add more options as needed -->
   </select>
   ```

3. **Initialization**

   The custom select checkbox dropdown is automatically initialized for the select element with the ID `mySelect` when the document content is fully loaded. If you have multiple select elements you wish to enhance, you can instantiate `SelectCheckbox` with their respective IDs in a similar manner.

   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
     // for a single element
     new SelectCheckbox('mySelect');
     // For additional select elements, repeat with their respective IDs
     // new SelectCheckbox('anotherSelectId');

     // for all multiple selects in a page
     // document.querySelectorAll('select[multiple]').forEach(x => {
     // new SelectCheckbox(x)
     // })


   });
   ```

## Customization

You can customize the appearance of the dropdown and checkboxes by modifying the CSS classes used within the `index.js` file. For example, you can style the `.select-checkbox`, `.dropdown-toggle`, and `.form-check-input` classes.

## Dependencies

This project uses vanilla JavaScript and assumes Bootstrap is being used for styling the dropdown and button based on the class names used (`btn`, `btn-outline-secondary`, `dropdown-toggle`, etc.). If you're not using Bootstrap, you'll need to ensure equivalent styling for these components.

## Browser Compatibility

The Custom Select Checkbox Dropdown is compatible with modern web browsers that support ES6 features such as `class`, `let`, `const`, and `Array.from()`.

## Contributing

Contributions to improve the Custom Select Checkbox Dropdown are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is open-source and available under the MIT License.