import Card from './components/UI/Card';
import Button from './components/UI/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClear}>Ok</Button>
      </footer>
    </Card>
  )
}

export default ErrorModal
