import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import Video from '../Video/Video'
import Aux from '../Aux/Aux'



const Home = () => (
  <Aux>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>{`
      html, body {
        background-color: #252839 !important;
      }

      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }

      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}</style>

    <Header as='h2' inverted textAlign='center'>
      Popular Videos
    </Header>
    <Grid columns='equal'>
      <Grid.Row columns='equal'>
        <Grid.Column>
          <Video channelId="UCLrcHz9qNbZbTjxsvharjvg"/>
        </Grid.Column>

        <Grid.Column>
          <Video channelId="UCtuAqb5CcHeO6u3wb2j1OZQ"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </Aux>
)

export default Home;