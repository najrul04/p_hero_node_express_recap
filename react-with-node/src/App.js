import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  // Load Data

  useEffect( () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } ,[])

const handleAddUser = event =>{
  event.preventDefault()
  const name = event.target.name.value;
  const email = event.target.email.value;
  console.log(name, email);
  const user = {name, email}

  // Post Data to server
   
  fetch('http://localhost:5000/user', {
    method: 'POST', // or 'PUT'
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      const newUsers = [...users, data] 
      setUsers(newUsers)
      console.log(data)
    })
}

  return (
    <div className="App">
      <h1>Own Data {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='name' id="" required/>
        <input type="email" name="email" placeholder='email' id="" required/>
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {
          users.map(user=> <li key={user.id}><b>Name:</b> {user.name} <b>Email:</b> {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
