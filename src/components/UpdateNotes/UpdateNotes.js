import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateNotes = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/notes/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTodo(data));
    }, []);

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        const updatedTodo = {name, description};

        // send data to the server
        const url = `http://localhost:5000/notes/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('To do updated successfully!!!');
            event.target.reset();
        })
    }

    return (
        <div>
            <h2>Updating User: {todo.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='To do Name' required />
                <br />
                <textarea type="text" name="description" placeholder='To do description' required />
                <br />
                <input type="submit" value="Update To do" />
            </form>
        </div>
    );
};

export default UpdateNotes;