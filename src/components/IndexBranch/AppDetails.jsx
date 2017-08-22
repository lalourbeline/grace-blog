import React from 'react';
import { Grid, Label, Card, Progress } from 'semantic-ui-react';

export default class AppDetails extends React.Component {
  render() {
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
    );
  }
}
