import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/AddUser/Home/Home';
import UpdateUser from './components/AddUser/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='user/add' element={<AddUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
