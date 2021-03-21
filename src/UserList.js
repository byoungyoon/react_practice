import React from 'react';

function User({user, onRemove, onToggle}){
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
}

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

export default UserList;