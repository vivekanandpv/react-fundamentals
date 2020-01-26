import React, { useEffect } from 'react';

const Playground = props => {
  //  effect runs only if the dependent property (props.counter in this case) changes
  //  performance optimization requirement
  //  keep the effect blocks separate (single responsibility principle)
  useEffect(() => {
    console.log('Playground is rendered');

    return () => {
      console.log(
        'React cleans up before running this rendering of playground'
      );
    };
  }, [props.counter]);

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
            className='btn btn-primary mr-2'
            onClick={() => props.handler(props.counter - 1)}
          >
            Counter--
          </button>
          <button
            className='btn btn-primary mr-2'
            onClick={() => props.handler(props.counter)}
          >
            Counter |
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
