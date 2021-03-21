import React, {useState, useRef} from 'react';

function InputSample(){    
    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    });

    const {name, nickName} = inputs;

    const nameInput = useRef();

    const onChange = (e) => {
        const {value, name} = e.target; 
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickName: ''
        })

        nameInput.current.focus();
    };

    return(
        <div>
            <input 
                onChange={onChange}
                placeholder="이름"
                value={name}
                name="name" 
                ref={nameInput}
            />
            <input
                onChange={onChange}
                placeholder="닉네임"
                value={nickName}
                name="nickName" 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>{name} - {nickName}</b>
            </div>
        </div>
    );
}

export default InputSample;