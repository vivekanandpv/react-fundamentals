import React, { useState } from 'react';
import Navbar from './Navbar';
import Playground from './Playground';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container'>
        <Playground handler={setCounter} counter={counter}></Playground>
      </div>
    </React.Fragment>
  );
}

export default App;
