import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  
  const addUserHandler = (e) => {
    e.preventDefault();
  }

  const usernameChangerHandler = (e) => {
    setEnteredUsername(e.target.value);
  }

  const ageChangerHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" conChange={usernameChangerHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangerHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>


  )
}

export default AddUser;