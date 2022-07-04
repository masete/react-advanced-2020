import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState('')
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
            {/* <h1>{firstValue}</h1>
            <h1> value : {secondValue}</h1> */}
            <h1>{text || 'John Doe'}</h1>
            <button className='btn' onClick={()=>setIsError(!isError)}>togggle error</button>
            {isError && <h1>Error....</h1>}
            {isError ? <h1>there is an error...</h1>:<div>
              <h2>there is no error. no error</h2></div>}
         </>
};

export default ShortCircuit;
