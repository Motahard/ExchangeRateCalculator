import React from 'react';

const RateItem = props => {
  const { currency } = props;
  const { Cur_OfficialRate, Cur_Abbreviation, Cur_Name } = currency;

  return (
    <div className='rate-item'>
      <h5>{Cur_Name}</h5>
      <p>{Cur_OfficialRate}</p>
    </div>
  );
};

export default RateItem;
