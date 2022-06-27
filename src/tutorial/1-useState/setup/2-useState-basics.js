import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler)

  const [text, setText] = useState('random title')
  const handleOnClick = () => {
    setText('gwe gwe gwe');
  }
  return <React.Fragment>
            <button type='button' className='btn' onClick={handleOnClick}>Change Title</button>
            <h1>{ text }</h1>
         </React.Fragment>;
};

export default UseStateBasics;
