import React, { useEffect } from 'react';

const Playground = props => {
  useEffect(() => {
    console.log('Playground is rendered');

    return () => {
      console.log(
        'React cleans up before running this rendering of playground'
      );
    };
  });

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
