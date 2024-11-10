import React, { useState } from 'react';
    import './index.css';

    function App() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');

      const handleAddTodo = () => {
        if (input.trim()) {
          setTodos([...todos, { text: input, completed: false }]);
          setInput('');
        }
      };

      const handleToggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
      };

      const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-8">Todo App</h1>
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new todo..."
              className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add Todo
            </button>
          </div>
          <ul className="mt-8">
            {todos.map((todo, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center justify-between">
                <span
                  onClick={() => handleToggleComplete(index)}
                  className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
