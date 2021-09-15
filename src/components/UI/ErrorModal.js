import Card from './components/UI/Card';
import Button from './components/UI/Button';

const ErrorModal = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button onClick={props.onClear}>Ok</Button>
      </footer>
    </Card>
  )
}

export default ErrorModal
