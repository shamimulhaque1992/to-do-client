import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    <div>
      
    </div>
  );
};

export default Home;
