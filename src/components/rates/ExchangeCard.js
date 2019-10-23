import React, { Component } from 'react';

import Rates from './Rates';
import Calculate from './Calculate';
import Loading from '../layout/Loading';

class ExchangeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: []
    };
  }

  async getCurrencies() {
    const curId = ['290', '292', '145', '298', '286', '191'];
    const curArr = [];
    for (let i = 0; i < curId.length; i++) {
      const req = await fetch(
        `http://www.nbrb.by/API/ExRates/Rates/${curId[i]}`
      );
      const data = await req.json();
      curArr.push(data);
    }
    return curArr;
  }

  componentDidMount() {
    this.getCurrencies().then(res => this.setState({ currencies: res }));
  }
  render() {
    if (this.state.currencies.length === 0) {
      return <Loading />;
    }
    return (
      <div className='container'>
        <div className='card'>
          <Rates currencies={this.state.currencies} />
          <Calculate currencies={this.state.currencies} />
        </div>
      </div>
    );
  }
}

export default ExchangeCard;
