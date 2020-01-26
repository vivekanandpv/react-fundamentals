import React from 'react';
import Person from './Person';

const Playground = () => {
  const friends = [
    'Ravindra',
    'Mahesh',
    'Abhinav',
    'Pranjal',
    'Tejas',
    'Nirmalya',
    'Abhishek',
    'Rajat',
    'Vidit'
  ];

  return (
    <React.Fragment>
      <h3>My friends</h3>
      {friends.map((f, i) => (
        <Person firstName={f} index={i} key={i}></Person>
      ))}
    </React.Fragment>
  );
};

export default Playground;
