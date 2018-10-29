import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { Grid, Segment, Button } from 'semantic-ui-react';
=======
import { Grid, Segment } from 'semantic-ui-react';
>>>>>>> fa1fe3d5a8adf2f9031f1f5765f2bd5cf8cc1e99
import Form from './SupplyForm';
import Aux from '../Aux/Aux';


const styles = {
  item: {
    color: '#fff',
<<<<<<< HEAD
    minHeight: '1em',
  },
  columnStyle: {
    backgroundColor: '#495285',
  },
  profit: {
    color: '#14a014',
  },
  waste: {
    color: '#c74f4f',
  },

  grid: {
    marginTop: '2rem',
=======
    minHeight: '2em',
  },
  columnStyle: {
    backgroundColor: '#495285',
>>>>>>> fa1fe3d5a8adf2f9031f1f5765f2bd5cf8cc1e99
  }
};

class Analyser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 0,
      player2: 0,
      player3: 0,
      player4: 0,
      prices: {
<<<<<<< HEAD
        mana: 56,
        smana: 93,
        gmana: 144,
        umana: 438,
        health: 50,
        shealth: 115,
        ghealth: 225,
        uhealth: 379,
        suhealth: 625,
        gspirit: 228,
        uspirit: 438,
=======
        mana: 50,
        smana: 80,
        gmana: 120,
        umana: 350,
        health: 45,
        shealth: 100,
        ghealth: 190,
        uhealth: 310,
        suhealth: 500,
        gspirit: 190,
        uspirit: 350,
>>>>>>> fa1fe3d5a8adf2f9031f1f5765f2bd5cf8cc1e99
      }
    };
    this.addWaste = this.addWaste.bind(this);
    this.handleClick = this.handleClick.bind(this);
<<<<<<< HEAD
    this.resetPlayerWaste = this.resetPlayerWaste.bind(this);
    this.returnWaste = this.returnWaste.bind(this);
=======
>>>>>>> fa1fe3d5a8adf2f9031f1f5765f2bd5cf8cc1e99
  }

  addWaste(player, amount, type) {
    const price = this.state.prices[type];
    console.log(price);
    this.setState((state, props) => {
      return { [player]: state[player] + (price * amount) };
    });
  }

  async resetPlayerWaste(player) {
    await this.setState({[player]: 0});
  }

  returnWaste() {
    const { player1, player2, player3, player4} = this.state;
    const waste = player1 + player2 + player3 + player4;
    return waste;
  }

  handleClick() {
    this.setState( {player1: 0, player2:0, player3:0, player4: 0} )
  }

  render() {
    const { player1, player2, player3, player4 } = this.state;

    return (
      <Aux>
        <Grid columns='equal'>
          <Grid.Column  width={10}>
            <h2 style={styles.item}>Player Nº1</h2>
            <Form
              player="player1"
              sumWaste={this.addWaste}
              resetWaste={this.resetPlayerWaste}
            />
            <h2 style={styles.item}>Player Nº2</h2>
            <Form
              player="player2"
              sumWaste={this.addWaste}
              resetWaste={this.resetPlayerWaste}
            />
            <h2 style={styles.item}>Player Nº3</h2>
            <Form 
              player="player3"
              sumWaste={this.addWaste}
              resetWaste={this.resetPlayerWaste}
            />
            <h2 style={styles.item}>Player Nº4</h2>
            <Form
              player="player4"
              sumWaste={this.addWaste}
              resetWaste={this.resetPlayerWaste}
            />
          </Grid.Column>
          <Grid.Column style={styles.columnStyle}>
            <Grid columns='equal'>
              <Grid.Column  width={10}>
                <h2 style={styles.item}>Summary</h2> 
              </Grid.Column>

              <Grid.Column>
                <Button onClick={this.handleClick}>Reset</Button>
              </Grid.Column>
            </Grid>
            <h3 style={styles.item}>Loot: </h3>
            <h3 style={styles.item}> · Waste player Nº1: {player1} </h3>
            <h3 style={styles.item}> · Waste player Nº2: {player2} </h3>
            <h3 style={styles.item}> · Waste player Nº3: {player3} </h3>
            <h3 style={styles.item}> · Waste player Nº4: {player4} </h3>

            <Grid style={styles.grid} columns='equal'>
              <Grid.Column>
                <h3 style={styles.waste}>Waste: {this.returnWaste()} </h3> 
              </Grid.Column>
              <Grid.Column>
                <h3 style={styles.profit}>Profit Each: </h3>
              </Grid.Column>
            </Grid>

          </Grid.Column>
        </Grid>
        

      </Aux>
    );
  }
}

export default Analyser;
