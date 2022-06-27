import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleOnClick = () => {
    return(
      console.log(title)
    );
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handleOnClick}>Change Title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
