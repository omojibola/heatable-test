import React from 'react';

const Card = ({ image }) => {
  return (
    <div className='App'>
      <div style={{ width: '200px', height: '500px' }}>
        <img src={image} alt='' style={{ width: '200px', height: '500px' }} />
      </div>
    </div>
  );
};

export default Card;
