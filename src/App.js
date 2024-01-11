import React,{useState} from 'react';
import './App.css';
import AddingUser from './components/forms/AddingUser';
import UserList from './components/forms/UserList';

function App() {
  const [usersList,setUsersList]=useState([]);
 const addUserHandler=(uName,uAge,uCollege)=>{
  setUsersList((prevUsers)=>{
    return [...prevUsers,{name:uName,age:uAge,college:uCollege,id:Math.random().toString()}]
  });
 };
  return (
    <div>
      <div>
    <AddingUser onAddUser={addUserHandler}/>
    </div>
    <div>
    <UserList users={usersList}/>
    </div>
    </div>
  )
}

export default App;
