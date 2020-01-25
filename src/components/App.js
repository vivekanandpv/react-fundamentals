import React from 'react';

function App() {
  let i = 0;

  const handler = () => {
    //  i is incremented, but the ui is not updated
    console.log('Button click handled', i);
    i++;
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Learning React {i} </h2>
        <button className='btn btn-primary' onClick={handler}>
          Click Here!
        </button>
      </header>
    </div>
  );
}

export default App;
