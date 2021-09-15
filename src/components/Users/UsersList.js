import Card from './UI/Card'

const UsersList = (props) => {
  return (
    <Card>
    <ul>
      {props.users.map(u => (
      <li
        key={u.id}
      >
        {u.name} ({u.age} years old)
      </li>
      ))}
    </ul>
    </Card>

  )
}

export default UsersList;
