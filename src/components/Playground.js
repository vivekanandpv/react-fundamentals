import React, { useEffect } from 'react';

const Playground = props => {
  //  If you want to run an effect and clean it up only once
  //  (on mount and unmount), you can pass an empty array([])
  //  as a second argument.
  useEffect(() => {
    console.log('Playground is rendered');

    return () => {
      console.log(
        'React cleans up before running this rendering of playground'
      );
    };
  }, []);

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
