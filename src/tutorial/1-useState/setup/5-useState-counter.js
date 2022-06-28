import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  return <>
            <section style={{margin: '4rem 0'}}>
              <h2>Regular Counter</h2>
              <h3>{count}</h3>
              <button className='btn' onClick={()=> setCount(0)}>reset</button>
              <button className='btn'onClick={()=> setCount(count + 1)}>Increment</button>
              <button className='btn'onClick={()=> setCount(count -1)}>Decrement</button>
            </section>
         </>
}
export default UseStateCounter;
