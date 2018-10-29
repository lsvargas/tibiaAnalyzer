import React from 'react';
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import Menu from '../Menu/Menu';
import Video from '../Video/Video';
import Home from '../Home/Home';



const Layout = props => (
  <Container>
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

    <Header as='h2' icon inverted textAlign='center'>
      <Icon name='grid layout' />
      Tibia Analyzer
      <Header.Subheader>
        <br />
      </Header.Subheader>
    </Header>
    <Menu />
    <Divider />
    <br />

    { props.children }


  </Container>
)

export default Layout