 const form = document.getElementById('todo-form');
        const input = document.getElementById('todo-input');
        const todoTbody = document.getElementById('todo-tbody');
        const todoTable = document.getElementById('todo-table');
        let todos = [];
        let editIndex = null;

        function renderTodos() {
            todoTbody.innerHTML = '';
            if (todos.length === 0) {
                todoTable.style.display = 'none';
                return;
            }
            todoTable.style.display = 'table';
            todos.forEach((todo, idx) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${idx + 1}</td>
                    <td>${todo}</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                `;
                // Edit button
                tr.querySelector('.edit-btn').onclick = () => {
                    input.value = todo;
                    editIndex = idx;
                    form.querySelector('button[type="submit"]').textContent = "Update";
                    input.focus();
                };
                // Delete button
                tr.querySelector('.delete-btn').onclick = () => {
                    todos.splice(idx, 1);
                    renderTodos();
                    // Reset form if deleting the one being edited
                    if (editIndex === idx) {
                        form.reset();
                        form.querySelector('button[type="submit"]').textContent = "+";
                        editIndex = null;
                    }
                };
                todoTbody.appendChild(tr);
            });
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const todoText = input.value.trim();
            if (!todoText) return;
            if (editIndex !== null) {
                todos[editIndex] = todoText;
                editIndex = null;
                form.querySelector('button[type="submit"]').textContent = "+";
            } else {
                todos.push(todoText);
            }
            form.reset();
            renderTodos();
        });

        // Initial render
        renderTodos();