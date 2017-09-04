import React from 'react';
import { Carousel } from 'react-responsive-carousel'; import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Grid, Menu, Icon, Form, Button, Embed } from 'semantic-ui-react';
import moment from 'moment';

export default class AppRightDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCurrent: '',
      dateTime: '',
    };
    moment.locale('zh-CN');
    this.showTime = this.showTime.bind(this);
  }
  componentDidMount() {
    this.showTime();
  }

  showTime() {
    const dateCurrent = moment().format('YYYY年 MM月 DD日 dddd');
    const dateTime = moment().format('hh:mm:ss a');
    // 获取id=result的对象
    const obj = document.getElementById('currentTime');
    // 将str的内容写入到id=result的<div>中去
    obj.innerHTML = dateCurrent;
    const obj2 = document.getElementById('dateTime');
    obj2.innerHTML = dateTime;
    // 延时器
    window.setTimeout(() => this.showTime(), 1000);
  }

  render() {
    const carouselPicArr = ['34', '35', '36'];
    const { activeItem } = this.state;
    return (
      <div>
        <Grid.Row className="icoMargin">
          <p>
            <Icon name="calendar" size="large" />
            <span id="currentTime"></span>
          </p>
          <p>
            <Icon name="wait" size="large" />
            <span id="dateTime"></span>
          </p>
        </Grid.Row>
        <Grid.Row>
          <Menu inverted className="itemPadding" widths={3}>
            <Menu.Item name="POPULARS" active={activeItem === 'POPULARS'} onClick={this.handleItemClick} />
            <Menu.Item name="RECENTS" active={activeItem === 'RECENTS'} onClick={this.handleItemClick} />
            <Menu.Item name="COMMENTS" active={activeItem === 'COMMENTS'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Row>
        <Grid.Row className="itemGroupShow">
          <Grid>
            <Grid.Column computer={4} mobile={16}>
              <img src="../images/12.jpg" alt="" />
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a></p>
              <p>6,988 views  |  42 comments</p>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column computer={4} mobile={16}>
              <img src="../images/12.jpg" alt="" />
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a></p>
              <p>6,988 views  |  42 comments</p>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column computer={4} mobile={16}>
              <img src="../images/12.jpg" alt="" />
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a></p>
              <p>6,988 views  |  42 comments</p>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column computer={4} mobile={16}>
              <img src="../images/12.jpg" alt="" />
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a></p>
              <p>6,988 views  |  42 comments</p>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column computer={4} mobile={16}>
              <img src="../images/12.jpg" alt="" />
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a></p>
              <p>6,988 views  |  42 comments</p>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <Grid.Row className="sponsors">
          <div className="littleTitle">
            <div className="title">SPONSORS</div>
          </div>
          <div className="spImg"><img src="../images/180x180.png" alt="" /></div>
          <div className="spImg"><img src="../images/180x180.png" alt="" /></div>
          <div className="spImg"><img src="../images/180x180.png" alt="" /></div>
          <div className="spImg"><img src="../images/180x180.png" alt="" /></div>
        </Grid.Row>
        <Grid.Row className="bestRow">
          <div className="littleTitle">
            <div className="title">BEST PICTURE</div>
          </div>
          <p className="bestRowP1">Aenean dictum pharetra nibh, sodales luctus felis aliquet at. Nulla vulputate venenatis orci [..]</p>
          <Grid.Column computer={16} className="focusPicture">
            <Carousel axis="horizontal" showThumbs={false} showStatus={false} autoPlay infiniteLoop emulateTouch>
              {carouselPicArr.map(item =>
                (<div key={item}>
                  <img src={`../images/${item}.jpg`} alt="" />
                </div>),
              )}
              {/* <div>
                <img src="../images/34.jpg" alt="" />
              </div>
              <div>
                <img src="../images/35.jpg" alt="" />
              </div>
              <div>
                <img src="../images/36.jpg" alt="" />
              </div> */}
            </Carousel>
          </Grid.Column>
          <p>By mdkiwol  |  Jan. 7, 2013  |  15 comments</p>
        </Grid.Row>
        <Grid.Row className="subscribeRow">
          <div className="littleTitle">
            <div className="title">SUBSCRIBE US</div>
          </div>
          <p>You can stay up-to-date with our latest news with subscribe our newsletter.</p>
          <Form>
            <Form.Group inline>
              <Form.Input placeholder="ex:your_email@domain.com" />
              <Button>send</Button>
            </Form.Group>
          </Form>
        </Grid.Row>
        <Grid.Row className="videoRow">
          <div className="littleTitle">
            <div className="title">VIDEO OF THE WEEK</div>
          </div>
          <p>Aenean dictum pharetra nibh, sodales luctus felis aliquet at. Nulla vulputate venenatis orci [..]</p>
          <Grid.Column computer={16} className="focusPicture">
            <Embed
              id="125292332"
              placeholder="../images/vimeo-example.jpg"
              source="vimeo"
            />
          </Grid.Column>
          <p>By mdkiwol  |  Jan. 7, 2013  |  15 comments</p>
        </Grid.Row>
      </div>
    );
  }
}
