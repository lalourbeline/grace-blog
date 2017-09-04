import React from 'react';

export default class CarouselCom extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      picArr: this.props.picArr || ['34', '35', '36'],
      picSrc: '34',
    };
    this.getPicArrIndex = this.getPicArrIndex.bind(this);
  }

  componentDidMount() {
    this.getPicArrIndex(0);
  }

  getPicArrIndex(index) {
    if (index === this.state.picArr.length) {
      index = 0;
    }
    this.setState({ picSrc: this.state.picArr[index] });
    window.setTimeout(() => this.getPicArrIndex(index + 1), 3000);
  }

  render() {
    return (
      <div className="carouse-container" id="carouseContainer">
        <img src={`http://oum6qj3qr.bkt.clouddn.com/${this.state.picSrc}.jpg`} alt="" />
      </div>
    );
  }
}
