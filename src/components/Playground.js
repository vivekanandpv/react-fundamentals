import React, { useState } from 'react';
import Card from './Card';

const Playground = () => {
  const [imageFlag, setImageFlag] = useState(false);
  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid mt-3'>
        <div className='container'>
          <h1 className='display-4'>Welcome to Home</h1>
          <p className='lead'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button
            className='btn btn-primary'
            onClick={() => setImageFlag(!imageFlag)}
          >
            Toggle Card
          </button>
          <hr></hr>
          {imageFlag ? <Card></Card> : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
