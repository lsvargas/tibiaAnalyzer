import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import Form from './SupplyForm';
import Aux from '../Aux/Aux';


const styles = {
  item: {
    color: '#fff',
    minHeight: '2em',
  },
  columnStyle: {
    backgroundColor: '#495285',
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
      }
    };
    this.addWaste = this.addWaste.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addWaste(player, amount, type) {
    const price = this.state.prices[type];
    console.log(price);
    this.setState((state, props) => {
      return { [player]: state[player] + (price * amount) };
    });
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
            />
            <h2 style={styles.item}>Player Nº2</h2>
            <Form
              player="player2"
              sumWaste={this.addWaste}
            />
            <h2 style={styles.item}>Player Nº3</h2>
            <Form 
              player="player3"
              sumWaste={this.addWaste}
            />
            <h2 style={styles.item}>Player Nº4</h2>
            <Form
              player="player4"
              sumWaste={this.addWaste}
            />
          </Grid.Column>
          <Grid.Column style={styles.columnStyle}>
            <h2 style={styles.item}>Summary</h2> <button onClick={this.handleClick}>Reset</button>
            <h3 style={styles.item}> · Waste player Nº1 = {player1} </h3>
            <h3 style={styles.item}> · Waste player Nº2 = {player2} </h3>
            <h3 style={styles.item}> · Waste player Nº3 = {player3} </h3>
            <h3 style={styles.item}> · Waste player Nº4 = {player4} </h3>
          </Grid.Column>
        </Grid>
        

      </Aux>
    );
  }
}

export default Analyser;
