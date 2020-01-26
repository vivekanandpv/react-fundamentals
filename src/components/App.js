import React from 'react';
import Navbar from './Navbar';
import Playground from './Playground';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container'>
        <Playground
          year={2020}
          enumEmulation='India'
          books={['C++', 'Java', 'C#']}
          car={{ model: 'MG Hector' }}
          firstName='Vrajesh' //  This will override the defaultProp
          isActive={true}
          // stringOrNumber={1900}  //  commented to show defaultProp kicks in
          key={1}
        ></Playground>
      </div>
    </React.Fragment>
  );
}

export default App;
