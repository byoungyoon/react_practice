import React from 'react';

function CreateUser({userId, userPw, onChange, onCreate}){
    return(
        <div>
            <input 
                placeholder="Id"
                name="userId"
                value={userId}
                onChange={onChange}
            />
            <input
                placeholder="Pw"
                name="userPw"
                value={userPw}
                onChange={onChange}
            />
            <button onClick={onCreate}>추가</button>
        </div>
    );
}

export default React.memo(CreateUser);