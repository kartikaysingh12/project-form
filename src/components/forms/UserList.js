import React from 'react';
import Card from'../UI/Card';
const UserList=(props) =>{
    return(
    <Card>
    <ul >
        {props.users.map((user)=>(
        <li key={user.id}>
            {user.name} Age is {user.age} and college name is {user.college}
        </li>))}
    </ul>
    </Card>
    )
}
export default UserList;