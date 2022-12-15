import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
      fetch(url)
      .then(res => res.json())
      .then(data => setUser(data));
    }, [])

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedUser = {name, email}

        // Send Data to the Server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Success', data);
            alert('Users Added Successfully!')
            event.target.reset();
        })

    }
    
    return (
        <div>
            <h1>Updating User: {user.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='Name' required /> <br />
                <input type="email" name='email' placeholder='Email' required /> <br />
                <input type="submit" value='Update User'/>
            </form>
        </div>
    );
};

export default UpdateUser;