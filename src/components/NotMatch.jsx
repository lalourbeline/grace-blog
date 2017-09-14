import React from 'react';
import { Container, Icon, Button } from 'semantic-ui-react';

import { BrowserRouter as Link } from 'react-router-dom';

export default class NotMatch extends React.Component {
  render() {
    return (
      <div className="notmatch-bg">
        <Container textAlign="center">
          <p>What have you done?</p>
          <p>Now Go Back Using Below LInk</p>
          <p>404</p>
          <p>! ERROR DECETED !</p>
          <p><Icon className="icon-bulb" /></p>
          <Button primary>
            <Icon className="icon-home3" />
            <Link to="/">返回首页</Link>
          </Button>
        </Container>
      </div>
    );
  }
}
