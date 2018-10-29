import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const styles = {
  item: {
    color: 'white',
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu
          style={styles.container}
          pointing
          secondary
         >
          <Link to="/">
            <Menu.Item 
              style={styles.item}
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/analyser">
            <Menu.Item
              style={styles.item}
              name='analyser'
              active={activeItem === 'analyser'}
              onClick={this.handleItemClick}
            />
          </Link>
      
        </Menu>
    )
  }
}

export default MenuExampleSecondaryPointing;