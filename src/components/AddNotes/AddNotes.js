import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AddNotes.css";

const AddNotes = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;

    const user = { name, description };

    // send data to the server
    fetch("https://polar-gorge-40067.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("To do added successfully!!!");
        event.target.reset();
      });
  };

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://polar-gorge-40067.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("deleting user with id, ", id);
      const url = `https://polar-gorge-40067.herokuapp.com/notes/${id}`;
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
    <div className="">
      <h1 className="text-center pt-5 text-primary">Add Your To do</h1>
      <div className="form-container mt-5 mb-5">
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="To do name" required />
          <br />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <br />
          <input type="submit" value="Add To do" />
        </form>
      </div>
      <div className="text-center">
        <h2>Available to do: {todos.length}</h2>
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
    </div>
  );
};

export default AddNotes;
