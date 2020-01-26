import React, { useState } from 'react';
import FormInput from './FormInput';

const Playground = () => {
  const nameRef = React.createRef();
  const [name, setName] = useState('');

  const changeHandler = () => {
    setName(nameRef.current.value);
  };

  return (
    <React.Fragment>
      <h4>Name: {name}</h4>
      <hr />
      <FormInput ref={nameRef} handler={changeHandler}></FormInput>
    </React.Fragment>
  );
};

export default Playground;
