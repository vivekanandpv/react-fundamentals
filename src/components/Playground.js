import React, { useState, createRef } from 'react';

const Playground = () => {
  const [headerText, setHeaderText] = useState('');

  const inputRef = createRef();

  const changeHandler = e => {
    setHeaderText(inputRef.current.value);
  };

  return (
    <React.Fragment>
      <h2>{headerText}</h2>
      <hr />
      <input
        type='text'
        className='form-control'
        ref={inputRef}
        onChange={e => changeHandler(e)}
      />
    </React.Fragment>
  );
};

export default Playground;
