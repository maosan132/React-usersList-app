import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState()

  const addUserHandler = (e) => { // Validation
    e.preventDefault();
    if (enteredAge.trim().lenght === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than 0'
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    console.log();
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangerHandler = (e) => {
    setEnteredUsername(e.target.value);
  }

  const ageChangerHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      { error && <
        ErrorModal
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
            onChange={usernameChangerHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangerHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;