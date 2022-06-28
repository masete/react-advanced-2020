import React, { useState } from 'react';

const UseStateObject = () => {
  const[people, setPeople] = useState({
    name: 'peter', 
    age: 24, 
    message:'random message'})

  const changeEssage = () =>{
    setPeople({...people, message:'hello world'})
  }
  return <>
            <h3>{people.name}</h3>
            <h3>{people.age}</h3>
            <h3>{people.message}</h3>
            <button className='btn' onClick={changeEssage}>Change message</button>
  </>
};

export default UseStateObject;
