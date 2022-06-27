import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler)

  const [text, setText] = useState('random title');
  const handleOnClick = () => {
    if(text === 'random title'){
      setText('hello world');
    }
    else{
      setText('random title');
    }
    
    // setText(90888);
  }
  return <React.Fragment>
            <button type='button' className='btn' onClick={handleOnClick}>Change Title</button>
            <h1>{ text }</h1>
         </React.Fragment>;
};

export default UseStateBasics;
