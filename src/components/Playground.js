import React from 'react';

const Playground = props => {
  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Home!</h1>
          <h4>Counter: {props.counter}</h4>
          <button
            className='btn btn-primary mr-2'
            onClick={() => props.handler(props.counter + 1)}
          >
            Counter++
          </button>
          <button
            className='btn btn-primary'
            onClick={() => props.handler(props.counter - 1)}
          >
            Counter--
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
