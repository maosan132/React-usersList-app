import { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState(''); // NO longer needed after useRef
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState()

  const addUserHandler = (e) => { // Validation
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUserAge.trim().lenght === 0 || enteredName.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age'
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than 0'
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUsername(''); // No needed because we don't need to update the state after useRef
    // setEnteredAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  // const usernameChangerHandler = (e) => {  // NO needed after useRef
  //   setEnteredUsername(e.target.value);
  // }

  // const ageChangerHandler = (e) => {  // NO needed after useRef
  //   setEnteredAge(e.target.value);
  // }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper> { /* It could also be <>*/ }
      { error && <
        ErrorModal // error modal component
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
        />
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // onChange={usernameChangerHandler}  // NO needed after useRef
            // value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangerHandler}  // NO needed after useRef
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;