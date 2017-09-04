import React from 'react';
import { Grid, Menu, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Column computer={16} mobile={16}>
          <Menu inverted pointing stackable className="menubar">
            <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
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
    );
  }
}
