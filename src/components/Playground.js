import React, { useState } from 'react';
import Button from './Button';

const Playground = props => {
  const [counter, setCounter] = useState(0);

  const handler = opCode => {
    if (opCode === 'inc') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>{props.header}</h1>
          <h3>Counter: {counter}</h3>
          <p className='lead'>{props.bodyText}</p>
          <hr></hr>
          <Button
            color={'blue'}
            css={'btn btn-warning'}
            name={'Click Me!'}
            handler={handler}
            opCode={'inc'}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
