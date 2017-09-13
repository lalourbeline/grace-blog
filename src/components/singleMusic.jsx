import React from 'react';
import { Container, Grid, Breadcrumb, Progress, Label, Item, Comment, Header, Form, Button } from 'semantic-ui-react';
import AppHeader from '../components/IndexBranch/AppHeader';
import AppNavBar from '../components/IndexBranch/AppNavBar';
import AppRightDetail from '../components/IndexBranch/AppRightDetail';
import AppFooter from '../components/IndexBranch/AppFooter';

export default class singleMusic extends React.Component {
  render() {

    return (
      <div className="index-bg">
        <Container textAlign="center">
          <AppHeader />
          <div className="IndexMain-style">
            <AppNavBar />
            <Grid>
              <Grid.Column computer={10} mobile={16}>
                <Grid className="burnMusic">
                  <Grid.Column computer={4} className="burnMusicLeft">you are here</Grid.Column>
                  <Grid.Column computer={12} className="burnMusicRight">
                    <Breadcrumb>
                      <Breadcrumb.Section link>Home</Breadcrumb.Section>
                      <Breadcrumb.Divider icon="long arrow right" />
                      <Breadcrumb.Section link>Music</Breadcrumb.Section>
                      <Breadcrumb.Divider icon="long arrow right" />
                      <Breadcrumb.Section active>Linkin Park - BURN IT DOWN</Breadcrumb.Section>
                    </Breadcrumb>
                  </Grid.Column>
                </Grid>
                <Grid className="burnVedio"></Grid>
                <Grid className="musicContent">
                  <Grid.Column computer={16} mobile={16} className="contentHead">
                    <h5>by mugiwara kiwolen</h5>
                    <h1>Linkin Park - BURN IT DOWN</h1>
                    <p>Jan. 16, 2013  |  Music  |  8 comments</p>
                  </Grid.Column>
                  <Grid.Column computer={16} mobile={16} className="musicNews">
                    <Grid className="newsContent">
                      <Grid.Column className="ratingLeft" computer={8} mobile={16}>
                        <div className="rating">
                          <h3>OVERALL</h3>
                          <h2>91%</h2>
                          <p>Excellent</p>
                        </div>
                        <div className="desc">
                          <span>Enter a rating summary here. You can do a short summary, or even a pros and cons list.</span>
                        </div>
                      </Grid.Column>
                      <p id="fir-par">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper nulla vitae diam lobortis interdum varius arcu tincidunt. Quisque sed nisi vel lorem blandit pharetra. Vivamus mollis blandit elit, nec lobortis tellus laoreet id. Integer sodales, lorem eu pellentesque scelerisque, urna orci lobortis mauris, sed facilisis mi est eu enim. Aenean felis tellus, consequat nec hendrerit a, ornare quis arcu. Aenean imperdiet sem nec mauris bibendum tristique. Etiam eros erat, feugiat ac fringilla sed, ultricies sed tellus. Suspendisse nisi sem, rhoncus sit amet malesuada nec, placerat ut magna. Morbi gravida lacus massa, quis tincidunt nisi. Sed porttitor ullamcorper fringilla. Quisque et purus turpis.
                      </p>
                      <p>
                          Suspendisse ornare luctus tempus. Nulla nec orci erat, sed consequat lacus. Curabitur vel odio eu sapien fermentum placerat pharetra ac lectus. Ut erat sapien, lobortis nec mattis eget, tempus sit amet elit. Duis gravida tincidunt fermentum. Etiam metus lectus, facilisis non imperdiet sit amet, fermentum vitae leo. Ut elit ante, euismod vel interdum non, bibendum eu risus. Etiam laoreet, metus id sodales sodales, ligula lectus sagittis ante, quis pretium dui est ut sem. Aenean sed lorem vitae turpis aliquam vehicula in quis dui. Etiam risus ligula, elementum et fringilla eget, porta id neque. Quisque tellus turpis, ultrices a aliquet at, pellentesque a nibh. Ut feugiat interdum dui, non lacinia nulla vestibulum a. Pellentesque sit amet eros arcu, eget tempor justo. Duis feugiat tristique convallis.
                      </p>
                      <p>
                          Praesent mattis mauris urna. Suspendisse vulputate, urna sit amet laoreet iaculis, magna urna porttitor justo, vel pretium sapien turpis nec turpis. Integer nec consectetur odio. Mauris quis neque velit. Aenean nec metus leo, non pellentesque eros. Ut et elit nibh, sit amet rutrum leo. Nulla aliquet, sem vel faucibus tristique, mi erat gravida odio, et feugiat ipsum metus vel nisi node.
                      </p>
                      <p>
                          Pellentesque sed eros sit amet eros congue dictum. Nullam fringilla adipiscing placerat. Mauris feugiat elit et nisi dapibus sodales. Aenean pulvinar odio non sapien tincidunt pellentesque. Donec ac elit ut mi suscipit mattis. In hac habitasse platea dictumst. Fusce nunc lectus, condimentum id interdum quis, ullamcorper posuere nulla. Fusce aliquam faucibus nunc egestas venenatis. Integer congue dui in magna pellentesque in malesuada tellus vehicula. Mauris elit sem, faucibus nec mollis id, lacinia non nisl.
                      </p>
                    </Grid>
                  </Grid.Column>
                </Grid>
                <Grid className="progressContent">
                  <Grid.Column computer={16} mobile={16}>
                    <div className="littleTitle">
                      <div className="title">REVIEW OVERVIEW</div>
                    </div>
                    <Progress percent={92} progress ><span>Expensive</span></Progress>
                    <Progress percent={86} progress ><span>Beautiful</span></Progress>
                    <Progress percent={98} progress ><span>Design</span></Progress>
                    <Progress percent={87} progress ><span>Inspirational</span></Progress>
                    <Progress percent={96} progress ><span>Style</span></Progress>
                    <div className="reviewRating">
                      <div className="rating">
                        <h2>91%</h2>
                        <p>Excellent</p>
                      </div>
                      <div className="desc">
                        <p>Enter a rating summary here. You can do a short summary, or even a pros and cons list.</p>
                      </div>
                    </div>
                    <div className="tags">
                      <strong>Tags:</strong>
                      <Label as="a">technology</Label>
                      <Label as="a">web</Label>
                      <Label as="a">design</Label>
                      <Label as="a">inspiration</Label>
                      <Label as="a">kitchen</Label>
                      <Label as="a">panorama</Label>
                    </div>
                  </Grid.Column>
                </Grid>
                <Grid className="CutOFF">
                  <Grid.Column computer={16} mobile={16}><div className="sep-border"></div></Grid.Column>
                  <Grid.Column computer={16} mobile={16}>
                    <h4>About The Author</h4>
                    <Item.Group>
                      <Item>
                        <Item.Image size="small" src="http://oum6qj3qr.bkt.clouddn.com/37.jpg" />
                        <Item.Content>
                          <Item.Header as="a">Mugiwara Kiwolen</Item.Header>
                          <Item.Description>
                            Sed tristique rhoncus dolor a porta. Nunc suscipit condimentum ultrices. Fusce non arcu urna. Duis iaculis tellus id felis fringilla commodo. Vivamus aliquet ullamcorper sagittis. Aliquam facilisis diam qus nibh euismod et varius enim gravida. Etiam elementum condimentum volutpat.
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Grid.Column>
                  <Grid.Column computer={16} mobile={16}>
                    <div className="sep-border no-margin-bottom"></div>
                    <div className="prevNext">
                      <a href="#" className="prev">
                        <p>Previous Post</p>
                        <p>Alvear Art Black and White Theme</p>
                      </a>
                      <a href="#" className="next">
                        <p>Next Post</p>
                        <p>Platform House with Minimal Design</p>
                      </a>
                    </div>
                    <div className="sep-border no-margin-top"></div>
                  </Grid.Column>
                  <Grid.Column computer={16} mobile={16}>
                    <h3>Related Posts</h3>
                    <div className="relatImg">
                      <div className="no-paddingLeft">
                        <img src="http://oum6qj3qr.bkt.clouddn.com/38.jpg" alt="" />
                        <p>{'Small Market and St. Sebastian\'s Square in Opole'}</p>
                      </div>
                      <div>
                        <img src="http://oum6qj3qr.bkt.clouddn.com/39.jpg" alt="" />
                        <p>Living Room in Italy</p>
                      </div>
                      <div>
                        <img src="http://oum6qj3qr.bkt.clouddn.com/40.jpg" alt="" />
                        <p>Platform House with Minimal Design</p>
                      </div>
                      <div className="no-paddingRight">
                        <img src="http://oum6qj3qr.bkt.clouddn.com/41.jpg" alt="" />
                        <p>Mosaic Pool is Very Amazing And Beautiful</p>
                      </div>
                    </div>
                    <div className="sep-border"></div>
                  </Grid.Column>
                </Grid>
                <Grid className="commentContent">
                  <Grid.Column computer={16} mobile={16}>
                    <Comment.Group className="commentContentGroup">
                      <Header as="h3" dividing>8 Comments To This Article</Header>
                      <Comment>
                        <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/42.jpg" />
                        <Comment.Content>
                          <Comment.Author as="a">AMAH SYNER HOLLAND</Comment.Author>
                          <Comment.Metadata>
                            <span>on Sep 12th, 2012 at 3:05 PM - <a>Reply</a></span>
                          </Comment.Metadata>
                          <Comment.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper nulla vitae diam lobortis interdum varius arcu tincidunt. Quisque sed nisi vel lorem blandit pharetra.</Comment.Text>
                          <span className="contentPage">1</span>
                        </Comment.Content>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/43.jpg" />
                        <Comment.Content>
                          <Comment.Author as="a">MUGIWARA KIWOLEN</Comment.Author>
                          <Comment.Metadata>
                            <span>on Sep 12th, 2012 at 3:05 PM - <a>Reply</a> </span>
                          </Comment.Metadata>
                          <Comment.Text>
                            <p>Vivamus mollis blandit elit, nec lobortis tellus laoreet id. Integer sodales, lorem eu pellentesque scelerisque, urna orci lobortis mauris, sed facilisis mi est eu enim.</p>
                          </Comment.Text>
                          <span className="contentPage">2</span>
                        </Comment.Content>
                        <Comment.Group>
                          <Comment>
                            <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/42.jpg" />
                            <Comment.Content>
                              <Comment.Author as="a">AMAH SYNER HOLLAND</Comment.Author>
                              <Comment.Metadata>
                                <span>on Sep 12th, 2012 at 3:05 PM - <a>Reply</a></span>
                              </Comment.Metadata>
                              <Comment.Text>Aenean felis tellus, consequat nec hendrerit a, ornare quis arcu. Aenean imperdiet sem nec mauris bibendum tristique.</Comment.Text>
                              <span className="contentPage">3</span>
                            </Comment.Content>
                          </Comment>

                          <Comment.Group>
                            <Comment>
                              <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/43.jpg" />
                              <Comment.Content>
                                <Comment.Author as="a">MUGIWARA KIWOLEN</Comment.Author>
                                <Comment.Metadata>
                                  <span>on Sep 12th, 2012 at 3:05 PM</span>
                                </Comment.Metadata>
                                <Comment.Text>Etiam eros erat, feugiat ac fringilla sed, ultricies sed tellus. Suspendisse nisi sem, rhoncus sit amet malesuada nec, placerat ut magna. Morbi gravida lacus massa, quis tincidunt nisi. Sed porttitor ullamcorper fringilla.</Comment.Text>
                                <span className="contentPage">4</span>
                              </Comment.Content>
                            </Comment>

                            <Comment>
                              <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/37.jpg" />
                              <Comment.Content>
                                <Comment.Author as="a">RENDY JAGERJACK</Comment.Author>
                                <Comment.Metadata>
                                  <span>on Sep 12th, 2012 at 3:05 PM</span>
                                </Comment.Metadata>
                                <Comment.Text>Etiam metus lectus, facilisis non imperdiet sit amet, fermentum vitae leo. Ut elit ante, euismod vel interdum non, bibendum eu risus. Etiam laoreet, metus id sodales sodales, ligula lectus sagittis ante, quis pretium dui est ut sem. Aenean sed lorem vitae turpis aliquam vehicula in quis dui.</Comment.Text>
                                <span className="contentPage">5</span>
                              </Comment.Content>
                            </Comment>
                          </Comment.Group>

                          <Comment>
                            <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/44.jpg" />
                            <Comment.Content>
                              <Comment.Author as="a">JOHN DONN</Comment.Author>
                              <Comment.Metadata>
                                <span>on Sep 12th, 2012 at 3:05 PM - <a>Reply</a></span>
                              </Comment.Metadata>
                              <Comment.Text>Etiam risus ligula, elementum et fringilla eget, porta id neque. Quisque tellus turpis, ultrices a aliquet at, pellentesque a nibh. Ut feugiat interdum dui, non lacinia nulla vestibulum a.</Comment.Text>
                              <span className="contentPage">6</span>
                            </Comment.Content>
                          </Comment>
                        </Comment.Group>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/43.jpg" />
                        <Comment.Content>
                          <Comment.Author as="a">MUGIWARA KIWOLEN</Comment.Author>
                          <Comment.Metadata>
                            <span>on Sep 12th, 2012 at 3:05 PM - <a>Reply</a></span>
                          </Comment.Metadata>
                          <Comment.Text>Praesent mattis mauris urna. Suspendisse vulputate, urna sit amet laoreet iaculis, magna urna porttitor justo, vel pretium sapien turpis nec turpis.</Comment.Text>
                          <span className="contentPage">7</span>
                        </Comment.Content>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as="a" src="http://oum6qj3qr.bkt.clouddn.com/37.jpg" />
                        <Comment.Content>
                          <Comment.Author as="a">RENDY JAGERJACK</Comment.Author>
                          <Comment.Metadata>
                            <span>on Sep 12th, 2012 at 3:05 PM - <a>Reply</a></span>
                          </Comment.Metadata>
                          <Comment.Text>Pellentesque sed eros sit amet eros congue dictum. Nullam fringilla adipiscing placerat. Mauris feugiat elit et nisi dapibus sodales. Aenean pulvinar odio non sapien tincidunt pellentesque. Donec ac elit ut mi suscipit mattis. In hac habitasse platea dictumst. Fusce nunc lectus, condimentum id interdum quis, ullamcorper posuere nulla.</Comment.Text>
                          <span className="contentPage">8</span>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </Grid.Column>
                  <Grid.Column computer={16} mobile={16}>
                    <h4>Leave a Reply</h4>
                    <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                    <Form>
                      <Form.Field>
                        <Grid>
                          <Grid.Column computer={8} mobile={16}>
                            <label htmlFor="username">
                              name<span>*</span>
                              <input type="text" />
                            </label>
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                      <Form.Field>
                        <Grid>
                          <Grid.Column computer={8} mobile={16}>
                            <label htmlFor="email">
                              email<span>*</span>
                              <input type="text" />
                            </label>
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                      <Form.Field>
                        <Grid>
                          <Grid.Column computer={8} mobile={16}>
                            <label htmlFor="website">
                              website
                              <input type="text" />
                            </label>
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                      <Grid className="textArea">
                        <Grid.Column computer={16} mobile={16}>
                          <span>*</span>
                          <Form.TextArea label="message" placeholder="Tell us more about you..." />
                        </Grid.Column>
                      </Grid>
                      <Button type="submit">submit comment</Button>
                    </Form>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16}>
                <AppRightDetail />
              </Grid.Column>
            </Grid>
          </div>
          <AppFooter />
        </Container>
      </div>
    );
  }
}
