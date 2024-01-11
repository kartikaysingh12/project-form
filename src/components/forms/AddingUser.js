import React,{useState,useRef} from 'react';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import Button from '../UI/Button'
import classes from'./AddingUser.module.css';
const AddingUser=props=>{
    const nameInputRef= useRef();
    const ageInputRef= useRef();
    const collegeInputRef=useRef();
    // const[enteredname,setEnteredName]=useState('');
    // const[enteredage,setEnteredAge]=useState('');
    const[error,setError]=useState();
    const sumbmitting=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredAge=ageInputRef.current.value;
        const collegeName=collegeInputRef.current.value;
        if(enteredName.trim().length===0||enteredAge.trim().length===0||collegeName.trim().length===0){
        setError({
            title:'Invalid Input',
            message:'Please enter a valid input'
        })
        return;}
        props.onAddUser(enteredName,enteredAge,collegeName)
        // setEnteredName('');
        // setEnteredAge('');
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        collegeInputRef.current.value='';
    }
    // const changeUsername=(event)=>{
    //     setEnteredName(event.target.value);
    // }
    // const changeUserAge=(event)=>{
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler=()=>{
        setError(null);
    }
    return(<React.Fragment>
        {error && <ErrorModel title={error.title} message={error.message} onOkay={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={sumbmitting}>
        <label htmlFor='adding'>Add User</label>
        <input type='text'
         id='adding'
          
          placeholder='Add user name' 
          ref={nameInputRef}
          ></input>
        <label htmlFor='age' >Age</label>
        <input type='number' 
        id='age' 
     
        min={1} 
        placeholder='Enter age' 
        ref={ageInputRef}
        >   
        </input>
        <label htmlFor='college name'>College Name</label>
        <input type='text' 
        id='college name'
        placeholder='Enter College Name'
        ref={collegeInputRef}>

        </input>
        <Button type='submit'>submit</Button>
        </form>
        </Card>
        </React.Fragment>
    )
}
export default AddingUser;
