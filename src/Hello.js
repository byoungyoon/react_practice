import React from 'react';

function Hello({name, color, isSpecial}){
    return(
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            Hello World {name}
        </div>
    ) 
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;