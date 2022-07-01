import React, { useState, useEffect, Component } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(()  => {
    if (count > 1) {
      document.title = `New message (${count})`;
    }
    
  }, [count])

  useEffect(() => {
    console.log('print us');
  }, []);

  return <>
          <h2>{count}</h2>
            <button className='btn' onClick={()=> setCount(count + 1)}>Increase</button>
         </>
};

export default UseEffectBasics;
