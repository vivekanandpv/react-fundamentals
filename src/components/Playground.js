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
        <Person key={i}>
          <div className='alert alert-primary' role='alert'>
            <h4>
              {i}. {f}
            </h4>
          </div>
        </Person>
      ))}
    </React.Fragment>
  );
};

export default Playground;
