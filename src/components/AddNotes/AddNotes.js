import React from "react";
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

  return (
    <div className="">
      <h1 className="text-center pt-5 text-primary">Add Your To do</h1>
      <div className="form-container mt-5 mb-5">
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="To do name" required />
          <br />
          <textarea type="text" name="description" placeholder="Description" required />
          <br />
          <input type="submit" value="Add To do" />
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
