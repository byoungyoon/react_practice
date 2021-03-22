import React, {useEffect} from 'react';
// useEffect : 처음 나타났을때, 사라질때, 업데이트 될때

const User = React.memo(function User({user, onRemove, onToggle}){
    useEffect(() => {
        console.log('컴포넌트 나타남');
        return() =>{
            console.log('컴포넌트 없어짐');
        }
    }, []); 

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th
                            style={
                                {
                                    cursor: 'pointer',
                                    color: user.active ? 'green' : 'pink'
                                }
                            }
                            onClick={() => onToggle(user.id)}
                        >
                            userId
                        </th>
                        <td colSpan="2">{user.userId}</td>
                    </tr>
                    <tr>
                        <th>userPw</th>
                        <td>{user.userPw}</td>
                        <td><button onClick={() => onRemove(user.id)}>삭제</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {
                users.map(data =>(
                    <User user={data} key={data.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
        </div>
    );
}

export default React.memo(UserList);