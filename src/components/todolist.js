import React from 'react';
import { useState } from 'react'
function ToDoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    if (text.trim() === '') {
      alert('You must write something!');
      return;
    }
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
    document.getElementById('myInput').value = '';
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="Main">
        <h1>To-Do List</h1>
        <div className="header">
          <input
            type="text"
            id="myInput"
            placeholder="Add a new task..."
            onKeyDown={(event) => (event.key === 'Enter' ? handleAddTodo(event.target.value) : null)}
          />
          <button onClick={() => handleAddTodo(document.getElementById('myInput').value)}>
            Add Task
          </button>
        </div>
        <ol id="myUL">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <span className="close" onClick={() => handleRemoveTodo(todo.id)}>
                &times;
              </span>
            </li>
          ))}
        </ol>
        <p id='develop'> Developed by <strong>SAQLAIN SAADI</strong></p>
      </div>
      <footer>
        <div>
          <p>&copy; 2024 | My To-Do List. All rights reserved.</p>
        </div>      
      </footer>
    </>
  );
}

export default ToDoList;
