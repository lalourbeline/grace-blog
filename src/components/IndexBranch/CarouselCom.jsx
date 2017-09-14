import React from 'react';

export default class CarouselCom extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      picArr: this.props.picArr,
      picIndexArr: this.getPicArrIndex(this.props.picArr),
    };
    this.getPicArrIndex = this.getPicArrIndex.bind(this);
    this.showedPic = this.showedPic.bind(this);
  }

  componentDidMount() {
    this.showedPic(0);
  }

  getPicArrIndex(picArr) {
    const picIndexArr = [];
    picArr.forEach((item) => {
      const obj = {
        src: item,
        sClass: false,
        sIndex: 1,
      };
      picIndexArr.push(obj);
    });
    return picIndexArr;
  }

  showedPic(index) {
    const picIndexArr = this.state.picIndexArr;
    picIndexArr[index].sClass = true;
    picIndexArr[index].sIndex = 100;
    window.setTimeout(() => {
      this.setState({ picIndexArr });
    }, 0);
    window.setTimeout(() => {
      picIndexArr[index].sClass = false;
      picIndexArr[index].sIndex = 1;
      if (index < picIndexArr.length - 1) {
        index += 1;
      } else {
        index = 0;
      }
      this.showedPic(index);
    }, this.props.interTime || 5000);
  }

  render() {
    return (
      <div className="carousel-left">
        <div className="carouse-container" id="carouseContainer">
          {
            this.state.picIndexArr.map(item =>
              (<img
                key={item.src}
                src={`http://oum6qj3qr.bkt.clouddn.com/${item.src}.jpg`}
                className={item.sClass ? 'animated fadeIn' : 'animated fadeOut'}
                style={{ zIndex: item.sIndex }}
                alt=""
              />),
            )
          }
        </div>
        <div className="carouse-marsk">
          <div className="mask-text">
            <h2>{this.props.title}</h2>
            <span>{this.props.author}</span>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
