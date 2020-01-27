import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Playground from './Playground';

function App() {
  useEffect(() => {
    console.log('App is rendered');
  });

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container'>
        <Playground></Playground>
      </div>
    </React.Fragment>
  );
}

export default App;
