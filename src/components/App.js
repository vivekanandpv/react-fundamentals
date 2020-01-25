import React from 'react';
import Navbar from './Navbar';
import Playground from './Playground';

function App() {
  const handler = data => {
    console.log('Handler in parent is called', data);
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container'>
        <Playground handler={handler}></Playground>
      </div>
    </React.Fragment>
  );
}

export default App;
