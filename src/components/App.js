import React from 'react';

function App() {
  const handler = () => {
    console.log('Button click handled');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Learning React</h2>
        <button className='btn btn-primary' onClick={handler}>
          Click Here!
        </button>
      </header>
    </div>
  );
}

export default App;
