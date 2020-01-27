import React from 'react';
import Button from './Button';

const Playground = props => {
  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>{props.header}</h1>
          <p className='lead'>{props.bodyText}</p>
          <hr></hr>
          <Button
            color={'blue'}
            css={'btn btn-warning'}
            name={'Click Me!'}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
