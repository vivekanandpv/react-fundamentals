import React, { useState } from 'react';

function App() {
  //  This is a react hook
  const [counter, setCounter] = useState(1);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Learning React</h2>
        <p>Counter: {counter}</p>
      </header>
    </div>
  );
}

export default App;
