import React,{useState} from 'react';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import Button from '../UI/Button'
import classes from'./AddingUser.module.css';
const AddingUser=props=>{
    const[enteredname,setEnteredName]=useState('');
    const[enteredage,setEnteredAge]=useState('');
    const[error,setError]=useState();
    const sumbmitting=(event)=>{
        event.preventDefault();
        if(enteredname.trim().length===0||enteredage.trim().length===0){
        setError({
            title:'Invalid Input',
            message:'Please enter a valid input'
        })
        return;}
        props.onAddUser(enteredname,enteredage)
        setEnteredName('');
        setEnteredAge('');
    }
    const changeUsername=(event)=>{
        setEnteredName(event.target.value);
    }
    const changeUserAge=(event)=>{
        setEnteredAge(event.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }
    return(<div>
        {error && <ErrorModel title={error.title} message={error.message} onOkay={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={sumbmitting}>
        <label htmlFor='adding' className='surround'>Add User</label>
        <input type='text'
         id='adding'
          value={enteredname} 
          placeholder='Add user name' 
          onChange={changeUsername}></input>
        <br/>
        <label htmlFor='age' className='surround'>Age</label>
        <input type='number' 
        id='age' 
        value={enteredage} 
        min={1} 
        placeholder='Enter age' 
        onChange={changeUserAge}></input>
        <br/>
        <Button type='submit'>submit</Button>
        </form>
        </Card>
        </div>
    )
}
export default AddingUser;
