// import React from 'react';

import { Container, Grid, Segment, Header } from 'semantic-ui-react';
import AppHeader from '../components/IndexBranch/AppHeader';
import AppNavBar from '../components/IndexBranch/AppNavBar';
import AppCarousel from '../components/IndexBranch/AppCarousel';
import AppDetails from '../components/IndexBranch/AppDetails';
import AppRightDetail from '../components/IndexBranch/AppRightDetail';
import AppFooter from '../components/IndexBranch/AppFooter';

const React = require('react');

class AppIndex extends React.Component {
  render() {
    return (
      <div className="index-bg">
        <Container textAlign="center">
          <AppHeader />
          <div className="IndexMain-style">
            <AppNavBar />
            <AppCarousel />
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
                <AppDetails />
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

AppIndex.defaultProps = {
};

export default AppIndex;
