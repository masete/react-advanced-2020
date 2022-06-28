import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const deleteItem = (id) =>{
    let newPeople = people.filter((person)=> person.id !== id);
    setPeople(newPeople);
  }
  return  <>
            {people.map((person)=> {
              const { id, name } = person;
              return <div key={id} className='item'>
                <h4>{ name }</h4>
                <button className='btn' onClick={()=>deleteItem(id)}>Delete item</button>
              </div>
            })}
            <button className='btn' onClick={() => setPeople([])}>Clear list</button>
          </>;
};

export default UseStateArray;
