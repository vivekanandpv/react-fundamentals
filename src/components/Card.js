import React from 'react';

const Card = () => {
  return (
    <React.Fragment>
      <div className='card' style={{ width: '15rem' }}>
        <img src='logo512.png' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
