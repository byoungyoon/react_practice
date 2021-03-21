import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App(){
  const [inputs, setInputs] = useState(
    {
      userId: '',
      userPw: ''
    }
  );

  const {userId, userPw} = inputs;

  const onChange = (e) => {
    const {value, name} = e.target;
    setInputs(
      {
        ...inputs,
        [name]: value
      }
    )
  };

  const [users, setUsers]=useState([
    {
        id: 1,
        userId: 'user1',
        userPw: '1234',
        active: true
    },
    {
        id: 2,
        userId: 'user2',
        userPw: '1234',
        active: false
    },
    {
        id: 3,
        userId: 'user3',
        userPw: '1234',
        active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      userId: userId,
      userPw: userPw
    }

    setUsers(
      [
        ...users,
        user
      ]
    );
    
    nextId.current += 1;
    
    setInputs(
      {
        userId: '',
        userPw: ''
      }
    )
  };

  const onRemove = (id) => {
    setUsers(
      users.filter(data => data.id !== id)
    );
  };

  const onToggle = (id) => {
    setUsers(
      users.map(data => (
        data.id === id ? {...data, active: !data.active} : data
      ))
    );
  };

  return(
    <>
      <CreateUser 
        userId={userId}
        userPw={userPw}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;