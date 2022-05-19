import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("deleting user with id, ", id);
      const url = `http://localhost:5000/notes/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = todos.filter((todo) => todo._id !== id);
            setTodos(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2>Available Users: {todos.length}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.name}:: {todo.email}
            <Link to={`/update/${todo._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleUserDelete(todo._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
