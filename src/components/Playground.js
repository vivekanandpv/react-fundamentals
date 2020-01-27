import React, { useEffect, useState } from 'react';

const Playground = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Playground is rendered');
  });

  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Home!</h1>
          <h4>Counter: {counter}</h4>
          <button
            className='btn btn-primary mr-2'
            onClick={() => setCounter(counter + 1)}
          >
            Counter++
          </button>
          <button
            className='btn btn-primary'
            onClick={() => setCounter(counter - 1)}
          >
            Counter--
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
