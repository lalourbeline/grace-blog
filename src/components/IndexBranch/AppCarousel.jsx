// import React from 'react';

import { Grid } from 'semantic-ui-react';
import CarouselCom from './CarouselCom';
// import CarouselCom from './CarouselCom1';
const React = require('react');

export default class AppCarousel extends React.Component {
  render() {
    const picArr1 = ['34', '35', '36'];
    const picArr2 = ['1', '3', '4'];
    const picArr3 = ['11', '12', '13'];
    const picArr4 = ['14', '15', '16'];

    return (
      <Grid className="Threecarousel">
        <Grid.Column computer={8} mobile={16}>
          <CarouselCom
            title="Alvear Art Black and White Theme"
            author="By mdkiwol on Jan. 14, 2013"
            content="Suspendisse ornare luctus tempus. Nulla nec orci erat, sed consequat lacus. Curabitur vel odio eu sapien fermentum placerat pharetra ac lectus. Ut erat sapien, lobortis nec mattis eget, tempus sit amet elit. Duis gravida tincidunt fermentum. Etiam metus lectus, facilisis non imperdiet sit amet, fermentum vitae leo [...]"
            picArr={picArr1}
            interTime={5000}
          />
        </Grid.Column>
        <Grid.Column computer={8} mobile={16} className="three-carouse-left">
          <Grid>
            <Grid.Column computer={16} mobile={16}>
              <CarouselCom
                title="Camerette - Your Time to Explore"
                author="By jagerjack on Jan. 13, 2013"
                picArr={picArr2}
                interTime={4000}
              />
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column computer={16} mobile={16}>
              <CarouselCom
                title="Living room in Italy"
                author="By amaah on Jan. 12, 2013"
                picArr={picArr3}
                interTime={3000}
              />
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column computer={16} mobile={16}>
              <CarouselCom
                title="Mosaic Pool is Amazing And Beautiful Place"
                author="By john on Jan. 11, 2013"
                picArr={picArr4}
                interTime={5000}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}
