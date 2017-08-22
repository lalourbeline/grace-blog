import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container, Grid, Menu, Input, Icon, Image, Dropdown, Segment, Header, Label, Card, Progress, Form, Button, Embed } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import moment from 'moment';

class AppIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      showStr: '',
      dateCurrent: '',
      dateTime: '',
    };
    moment.locale('zh-CN');
    this.handleItemClick = this.handleItemClick.bind(this);
    this.showTime = this.showTime.bind(this);
  }
  componentDidMount() {
    this.showTime();
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
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
    const { activeItem } = this.state;
    const extra1 = (
      <a>By mdkiwol  |  Jan. 14, 2013  |  15 comments</a>
    );
    const extra2 = (
      <a>By Joh Donn  |  Jan. 12, 2013  |  12 comments</a>
    );
    const extra3 = (
      <a>By amaah  |  Jan. 11, 2013  |  3 comments</a>
    );
    const extra4 = (
      <a>By jagerjack  |  Jan. 9, 2013  |  3 comments</a>
    );
    const extra5 = (
      <a>By mdkiwol  |  Jan. 10, 2013  |  3 comments</a>
    );

    const extra6 = (
      <a>By amaah  |  Jan. 8, 2013  |  3 comments</a>
    );


    return (
      <div className="index-bg">
        <Container textAlign="center">
          <Grid>
            <Grid.Column computer={16} mobile={16}>
              <Menu inverted pointing stackable className="menubar">
                <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name="features" active={activeItem === 'features'} onClick={this.handleItemClick} />
                <Menu.Item name="blog" active={activeItem === 'blog'} onClick={this.handleItemClick} />
                <Menu.Item name="portofolio" active={activeItem === 'portofolio'} onClick={this.handleItemClick} />
                <Menu.Item name="pages" active={activeItem === 'pages'} onClick={this.handleItemClick} />
                <Menu.Item name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick} />
                <Menu.Menu position="right">
                  <Menu.Item className="iconstyle">
                    <Icon name="linkedin square" size="large" />
                    <Icon name="github square" size="large" />
                    <Icon name="facebook square" size="large" />
                    <Icon name="twitter square" size="large" />
                    <Icon name="flickr" size="large" />
                    <Icon name="pinterest square" size="large" />
                    <Icon name="tumblr square" size="large" />
                  </Menu.Item>

                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid>
          <div className="IndexMain-style">
            <Grid>
              <Grid.Column computer={8} mobile={16}>
                <Image src="../images/logo.png" />
              </Grid.Column>
              <Grid.Column computer={8} mobile={16}>
                <Menu.Item className="headerSearch">
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
              </Grid.Column>
            </Grid>
            <Menu inverted stackable className="innerMenu" widths={8}>
              <Menu.Item name="business" className="orange" active={activeItem === 'business'} onClick={this.handleItemClick} />
              <Dropdown text="technology" pointing className="link item">
                <Dropdown.Menu>
                  <Dropdown.Item>smartphone</Dropdown.Item>
                  <Dropdown.Item>tablet</Dropdown.Item>
                  <Dropdown.Item>internet</Dropdown.Item>
                  <Dropdown.Item>software</Dropdown.Item>
                  <Dropdown.Item>hardware</Dropdown.Item>
                  <Dropdown.Item>laptop</Dropdown.Item>
                  <Dropdown text="hot news" pointing="left" className="link item">
                    <Dropdown.Menu>
                      <Dropdown.Item>windows</Dropdown.Item>
                      <Dropdown.Item>apple</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item name="education" active={activeItem === 'education'} onClick={this.handleItemClick} />
              <Menu.Item name="entertainment" active={activeItem === 'entertainment'} onClick={this.handleItemClick} />
              <Dropdown text="photo" pointing className="link item">
                <Dropdown.Menu>
                  <Dropdown.Item>single photo</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown text="video" pointing className="link item">
                <Dropdown.Menu>
                  <Dropdown.Item>single video</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown text="music" pointing className="link item">
                <Dropdown.Menu>
                  <Dropdown.Item>single music</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown text="review" pointing className="link item">
                <Dropdown.Menu>
                  <Dropdown.Item>single review</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
            <Grid className="lb-img">
              <Grid.Column computer={8} mobile={16}>
                <img src="../images/9.jpg" alt="" />
              </Grid.Column>
              <Grid.Column computer={8} mobile={16}>
                <img src="../images/9.jpg" alt="" />
              </Grid.Column>
            </Grid>
            <Grid className="headerbar">
              <Grid.Column computer={16} mobile={16}>
                <Segment inverted className="headerbar-seg">
                  <Header as="h4" inverted color="grey">
                    <div className="dividTitle">
                      <p>30</p>
                      <p>TUE</p>
                    </div>
                    Small Market and St.Sebastians Square in Opole
                  </Header>
                </Segment>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column computer={10} mobile={16}>
                <Grid>
                  <Grid.Column computer={8} mobile={16} className="dir">
                    <div className="dir_c">
                      <Label as="a" color="red" ribbon>Overview</Label>
                      <Card
                        image="../images/1.jpg"
                        header="Camertte - Your Times to Dream"
                        description="Suspendisse ornare luctus tempus. Nulla nec orci erat, sed consequat lacus. Curabitur vel odio eu sapien fermentum placerat pharetra ac lectus. Ut erat sapien, lobortis nec mattis."
                        extra={extra1}
                      />
                    </div>
                    <div className="dir_c">
                      <Label as="a" color="red" ribbon>Overview</Label>
                      <Card
                        image="../images/3.jpg"
                        header="House in The Woods"
                        description="Pellentesque sed eros sit amet eros congue dium. Nullam fringilla adipiscing placerat. Mauris feugiat elit et nisi dapibus sodales. Aenean pulvinar odio non sapien tincidunt pellentesque."
                        extra={extra2}
                      />
                    </div>
                    <div className="dir_c">
                      <Label as="a" color="red" ribbon>Overview</Label>
                      <Card
                        image="../images/4.jpg"
                        header="Camerette - Your Time to Explore"
                        description="Sed tristique rhoncus dolor a porta. Nunc suscipit condimentum ultrices. Fusce non arcu urna. Duis iaculis tellus id felis fringilla commodo. Vivamus quet ullamcorper sagittis."
                        extra={extra3}
                      />
                    </div>
                    <div className="dir_c">
                      <Label as="a" color="red" ribbon>Overview</Label>
                      <Card
                        image="../images/6.jpg"
                        header="Casa en la costa del uno"
                        description="Praesent mattis mauris urna. Suspendisse vuputa, urna sit amet laoreet iaculis, magna urna porttitor justo, vel pretium sapien urpis nec turpis. Integer nec consectetur odio."
                        extra={extra4}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={8} mobile={16} className="dir">
                    <div className="dir_c">
                      <Label as="a" color="red" ribbon>Overview</Label>
                      <Card
                        image="../images/2.jpg"
                        header="Glass House Below The Dark of Moon Light"
                        description="Praesent mattis mauris urna. Suspendisse vuputa, urna sit amet laoreet iaculis, magna urna porttitor justo, vel pretium sapien urpis nec turpis. Integer nec consectetur odio."
                        extra={extra2}
                      />
                    </div>
                    <div className="dir_progress">
                      <Card>
                        <Label color="red" ribbon className="titleLableLeft">Overview</Label>
                        <Card.Content>
                          <Grid className="dir_p_item">
                            <Grid.Column computer={5}>
                              <Label attached="top left" className="labelSeven">70%</Label>
                              <img className="dir_p_itemImg" src="../images/12.jpg" alt="" />
                            </Grid.Column>
                            <Grid.Column computer={11}>
                              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a> by mdkiwol</p>
                              <p><Progress percent={70} color="orange" size="small" /></p>
                            </Grid.Column>
                          </Grid>
                          <Grid className="dir_p_item">
                            <Grid.Column computer={5}>
                              <Label attached="top left" className="labelFive">5.5</Label>
                              <img className="dir_p_itemImg" src="../images/12.jpg" alt="" />
                            </Grid.Column>
                            <Grid.Column computer={11}>
                              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a> by mdkiwol</p>
                              <p><Progress percent={55} color="orange" size="small" /></p>
                            </Grid.Column>
                          </Grid>
                          <Grid className="dir_p_item">
                            <Grid.Column computer={5}>
                              <Label attached="top left" className="labelBai">100</Label>
                              <img className="dir_p_itemImg" src="../images/12.jpg" alt="" />
                            </Grid.Column>
                            <Grid.Column computer={11}>
                              <p><a>{'Small Market and St. Sebastian\'s Square in Opole'}</a> by mdkiwol</p>
                              <p><Progress percent={100} color="orange" size="small" /></p>
                            </Grid.Column>
                          </Grid>
                        </Card.Content>
                      </Card>
                    </div>
                    <div className="dir_c">
                      <Label as="a" color="red" ribbon>Overview</Label>
                      <Card
                        image="../images/5.jpg"
                        header="Winter Kitchen with Silver Panorama"
                        description="Fusce vehicula sapien sed dolor semper gravida. Nam mollis, nisl vel mollis condimentum, arcu lorem varius ipsum, eget vulputate nisl ligula sit amet metus. Duis ac magna neque, congue tristique risus."
                        extra={extra5}
                      />
                    </div>
                    <div className="dir_c">
                      <Label as="a" color="red" ribbon>Overview</Label>
                      <Card
                        image="../images/7.jpg"
                        header="Mosaic Pool is Very Amazing And Beautiful"
                        description="Pellentesque sed eros sit amet eros congue dium. Nullam fringilla adipiscing placerat. Mauris feugiat elit et nisi dapibus sodales. Aenean pulvinar odio non sapien tincidunt pellentesque."
                        extra={extra6}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={16} mobile={16}>
                    <Card className="pagePict">
                      <Label color="orange" ribbon className="pagePict_labelLeft">REVIEWS</Label>
                      <div>
                        <img src="../images/17.jpg" alt="" />
                        <p>{'Small Market and St.Sebastian\'s Square in Opole'}</p>
                      </div>
                      <div>
                        <img src="../images/18.jpg" alt="" />
                        <p>Living Room in Italy</p>
                      </div>
                      <div>
                        <img src="../images/19.jpg" alt="" />
                        <p>Platform House with Minimal Design</p>
                      </div>
                      <div>
                        <img src="../images/20.jpg" alt="" />
                        <p>Mosaic Pool is Very Amazing And Beautiful</p>
                      </div>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16}>
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
                      <div>
                        <img src="../images/34.jpg" alt="" />
                      </div>
                      <div>
                        <img src="../images/35.jpg" alt="" />
                      </div>
                      <div>
                        <img src="../images/36.jpg" alt="" />
                      </div>
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
              </Grid.Column>
            </Grid>
          </div>
          <Grid className="gridMargin">
            <Grid.Column computer={4} mobile={16}>
              <header>
                <h4>ABOUT US</h4>
              </header>
              <p>Donec dignissim leo sit amet nisl luctus vestibulum. Morbi tortor arcu, aliquet nec aliquet at, convallis ut eros. Sed non tellus mauris, vitae congue ante.</p>
              <p>Nunc imperdiet malesuada pharetra. Duis sodales, arcu tempus rutrum consectetur, sem ante auctor eros, in vehicula magna mauris sit amet est. Mauris ac eros arcu.</p>
            </Grid.Column>
            <Grid.Column computer={4} mobile={16} className="labelStyle">
              <header>
                <h4>TAGS CLOUD</h4>
              </header>
              <Label as="a">window</Label><Label as="a">apple</Label><Label as="a">softWare</Label><Label as="a">hardware</Label><Label as="a">gadget</Label><Label as="a">smartphone</Label><Label as="a">laptop</Label><Label as="a">business</Label><Label as="a">learn</Label><Label as="a">study</Label><Label as="a">game</Label><Label as="a">movie</Label><Label as="a">event</Label>
            </Grid.Column>
            <Grid.Column computer={4} mobile={16}>
              <header>
                <h4>LATEST TWEETS</h4>
              </header>
              <Grid className="twitterGrid">
                <Grid.Column computer={4}>
                  <img src="../images/picons.png" alt="" />
                </Grid.Column>
                <Grid.Column computer={12}>
                  <p>{'@realt0rlife That\'s a very good question :) You may want to contact the author. There\'s a form on the right when you click their name.'}</p>
                </Grid.Column>
              </Grid>
              <Grid className="twitterGrid">
                <Grid.Column computer={4}>
                  <img src="../images/picons.png" alt="" />
                </Grid.Column>
                <Grid.Column computer={12}>
                  <p>{'@realt0rlife That\'s a very good question :) You may want to contact the author. There\'s a form on the right when you click their name.'}</p>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column computer={4} mobile={16}>
              <header>
                <h4>FLICKR PHOTOS</h4>
              </header>
              <div className="photoImgList">
                <div><img src="../images/22.jpg" alt="" /></div>
                <div><img src="../images/23.jpg" alt="" /></div>
                <div><img src="../images/24.jpg" alt="" /></div>
                <div><img src="../images/25.jpg" alt="" /></div>
                <div><img src="../images/26.jpg" alt="" /></div>
                <div><img src="../images/27.jpg" alt="" /></div>
                <div><img src="../images/28.jpg" alt="" /></div>
                <div><img src="../images/29.jpg" alt="" /></div>
                <div><img src="../images/30.jpg" alt="" /></div>
              </div>
            </Grid.Column>
          </Grid>
          <Grid className="gridFooter">
            <Grid.Column computer={8} mobile={16}>
              <p>Copyright &copy; 2014.Company name All rights reserved.</p>
            </Grid.Column>
            <Grid.Column computer={8} mobile={16}>
              <Icon link name="youtube" />
              <Icon link name="linkedin" />
              <Icon link name="vimeo" />
              <Icon link name="tumblr" />
              <Icon link name="tripadvisor" />
              <Icon link name="tencent weibo" />
              <Icon link name="jsfiddle" />
              <Icon link name="delicious" />
              <Icon link name="facebook f" />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

AppIndex.defaultProps = {
};

export default AppIndex;
