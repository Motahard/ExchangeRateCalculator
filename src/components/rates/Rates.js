import React from 'react';
import RateItem from './RateItem';

const Rates = props => {
  const { currencies } = props;
  return (
    <div className='rates'>
      {currencies.map(item => (
        <RateItem key={item.Cur_ID} currency={item} />
      ))}
    </div>
  );
};

export default Rates;
