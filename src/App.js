import React, {useCallback, useMemo, useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중 ...');
  return users.filter(data => data.active).length;
}

function App(){
  const [inputs, setInputs] = useState(
    {
      userId: '',
      userPw: ''
    }
  );

  const {userId, userPw} = inputs;

  const onChange = useCallback((e) => {
    const {value, name} = e.target;
    setInputs(
      {
        ...inputs,
        [name]: value
      }
    )
  }, [inputs]);

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

  const onCreate = useCallback(() => {
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
  }, [users, userId, userPw]);

  const onRemove = useCallback((id) => {
    setUsers(
      users.filter(data => data.id !== id)
    );
  }, [users]);

  const onToggle = useCallback((id) => {
    setUsers(
      users.map(data => (
        data.id === id ? {...data, active: !data.active} : data
      ))
    );
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return(
    <>
      <CreateUser 
        userId={userId}
        userPw={userPw}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;