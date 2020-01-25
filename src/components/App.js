import React from 'react';
import Navbar from './Navbar';
import Playground from './Playground';

function App() {
  const bodyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`;

  const header = `Welcome to Home`;

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container'>
        <Playground bodyText={bodyText} header={header}></Playground>
      </div>
    </React.Fragment>
  );
}

export default App;
