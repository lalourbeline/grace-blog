import React from 'react';
import { Grid, Label, Icon } from 'semantic-ui-react';

export default class AppFooter extends React.Component {
  render() {
    return (
      <div>
        <Grid className="MainFooter">
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
                <img src="http://oum6qj3qr.bkt.clouddn.com/picons.png" alt="" />
              </Grid.Column>
              <Grid.Column computer={12}>
                <p>{'@realt0rlife That\'s a very good question :) You may want to contact the author. There\'s a form on the right when you click their name.'}</p>
              </Grid.Column>
            </Grid>
            <Grid className="twitterGrid">
              <Grid.Column computer={4}>
                <img src="http://oum6qj3qr.bkt.clouddn.com/picons.png" alt="" />
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
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/22.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/23.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/24.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/25.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/26.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/27.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/28.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/29.jpg" alt="" /></div>
              <div><img src="http://oum6qj3qr.bkt.clouddn.com/30.jpg" alt="" /></div>
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
      </div>
    );
  }
}
