import React from 'react';
import { Grid, Menu, Input, Image, Dropdown } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class AppNavBar extends React.Component {
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
      <div className="navBar">
        <Grid>
          <Grid.Column computer={8} mobile={16}>
            <Image src="http://oum6qj3qr.bkt.clouddn.com/logo.png" />
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <Menu.Item className="navBarSearch">
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Grid.Column>
        </Grid>
        <Menu inverted stackable widths={8} className="navBarMenu">
          <Menu.Item name="business" active={activeItem === 'business'} onClick={this.handleItemClick} />
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
              <Dropdown.Item as={Link} to="/singmusic" >single music</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown text="review" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Item>single review</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    );
  }
}
