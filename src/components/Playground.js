import React from 'react';

const Playground = props => {
  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Home!</h1>
          <button
            className='btn btn-primary'
            onClick={() => props.handler(new Date())}
          >
            Click here to reach Parent Handler
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
