import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class AppCarousel extends React.Component {
  render() {
    return (
      <Grid className="Threecarousel">
        <Grid.Column computer={8} mobile={16}>
          <img src="../images/9.jpg" alt="" />
        </Grid.Column>
        <Grid.Column computer={8} mobile={16}>
          <img src="../images/9.jpg" alt="" />
        </Grid.Column>
      </Grid>
    );
  }
}
