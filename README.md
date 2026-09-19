# TO_DO_APP
This To-Do List application is a lightweight, responsive web project that allows users to manage tasks through a clean, intuitive interface. It successfully implements core Create, Read, Update, and Delete (CRUD) operations using vanilla JavaScript without relying on external libraries.
# Key Features
**Task Management:** Users can add new tasks via a simple text input, which are immediately rendered in a structured, numbered table format.
**Dynamic UI Rendering:** The application intelligently hides the task table when the list is empty and automatically displays it as soon as the first task is submitted.
**Inline Editing & Deletion:** Each generated task row includes dedicated "Edit" and "Delete" buttons. When a user chooses to edit a task, the input field populates with the existing text, and the submit button dynamically changes its label from "+" to "Update".
**Responsive Layout:** The application is fully mobile-responsive, utilizing media queries to stack form elements, adjust padding, and resize fonts for screens under 600px wide.

# Technical Implementation 
**HTML Structure (index.html):** The markup utilizes a centralized container holding a form for input and a hidden-by-default <table> equipped with a <thead> for column organization (SR.NO, TO DO LIST, Actions).

**Styling (style.css):** The visual design features a modern aesthetic with a linear-gradient background, subtle box shadows, and distinct color-coded buttons (blue for submit, yellow for edit, red for delete) that   include hover transition effects. 

**JavaScript Logic (index.js):** The application relies on an array (todos) to manage state. The renderTodos() function clears and rebuilds the table body (todo-tbody) on every update using template literals to inject HTML elements dynamically. Event listeners prevent default page reloads on form submission and handle the index tracking (editIndex) required to update specific tasks seamlessly.
