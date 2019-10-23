import React from 'react';
import spinner from './spinner.gif';

const Loading = () => {
  return (
    <div className='container'>
      <img src={spinner} alt='Loading' style={{ height: 200, width: 200 }} />
    </div>
  );
};

export default Loading;
