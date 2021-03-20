import React, {useState} from 'react';

function Counter(){
    const [number, setNumer] = useState(0);

    const onIncrease = () => {
        setNumer(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumer(prevNumber => prevNumber - 1);
    }
    
    return(
      <div>
          <h1>{number}</h1>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
      </div>  
    );
}

export default Counter;