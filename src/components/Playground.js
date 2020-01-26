import React, { useEffect } from 'react';

const Playground = props => {
  //  React will apply every effect used by the component, in the order they were specified.

  useEffect(() => {
    console.log('Playground is rendered: First');

    return () => {
      console.log(
        'React cleans up before running this rendering of playground (first)'
      );
    };
  });

  useEffect(() => {
    console.log('Playground is rendered: Second');

    return () => {
      console.log(
        'React cleans up before running this rendering of playground (second)'
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
