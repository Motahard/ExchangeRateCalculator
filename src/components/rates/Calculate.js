import React from 'react';

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: this.props.currencies,
      from: 'UAH',
      to: 'UAH',
      valueOne: 0,
      valueTwo: 0
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.Calculate(this.state.valueOne);
    });
  };

  Calculate = value => {
    console.log('procs');
    const { cur, from, to } = this.state;
    let itemOneRate,
      itemTwoRate = 0;
    for (let item of cur) {
      if (item.Cur_Abbreviation === from) {
        itemOneRate = item.Cur_OfficialRate;
      }
      if (item.Cur_Abbreviation === to) {
        itemTwoRate = item.Cur_OfficialRate;
      }
    }
    if (from === 'UAH' || from === 'RUB') {
      itemOneRate = (itemOneRate / 100).toFixed(2);
    }

    if (to === 'UAH' || to === 'RUB') {
      itemTwoRate = (itemTwoRate / 100).toFixed(2);
    }
    this.setState({
      valueTwo: (value * (itemOneRate / itemTwoRate)).toFixed(2)
    });
  };

  render() {
    const { currencies } = this.props;

    return (
      <div className='calculate'>
        <div className='select-container'>
          <select onChange={this.onChange} name='from'>
            {currencies.map(item => (
              <option key={item.Cur_ID} value={item.Cur_Abbreviation}>
                {item.Cur_Abbreviation}
              </option>
            ))}
          </select>
          <input
            type='text'
            onChange={this.onChange}
            value={this.state.valueOne}
            name='valueOne'
          />
        </div>
        <div className='select-container'>
          <select onChange={this.onChange} name='to'>
            {currencies.map(item => (
              <option key={item.Cur_ID} value={item.Cur_Abbreviation}>
                {item.Cur_Abbreviation}
              </option>
            ))}
          </select>
          <input
            type='text'
            disabled
            value={this.state.valueTwo}
            name='valueTwo'
          />
        </div>
      </div>
    );
  }
}

export default Calculate;
