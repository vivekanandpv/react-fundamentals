import React from 'react';

const Person = props => {
  return (
    <React.Fragment>
      <div class='alert alert-primary' role='alert'>
        <h4>
          {props.index}. {props.firstName}
        </h4>
      </div>
    </React.Fragment>
  );
};

export default Person;
