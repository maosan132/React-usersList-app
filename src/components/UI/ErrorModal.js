import ReactDOM from 'react-dom'
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onConfirm}/>
)

const ModalOverly = (props) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Ok</Button>
    </footer>
  </Card>
)


const ErrorModal = (props) => {

  return (
    <>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={props.onConfirm} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <ModalOverly
        onConfirm={props.onConfirm}
        title={props.title}
        message={props.message}
      />,
      document.getElementById('overly-root')
    )}
    </>
  )
}

export default ErrorModal
