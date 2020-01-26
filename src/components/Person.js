import React from 'react';

const Person = props => {
  console.log(props.children);
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Person;
