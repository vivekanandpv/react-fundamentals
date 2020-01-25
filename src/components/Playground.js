import React from 'react';

const Playground = props => {
  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>{props.header}</h1>
          <p className='lead'>{props.bodyText}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Playground;
