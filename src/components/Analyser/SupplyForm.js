import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Aux from '../Aux/Aux';
import { Form, Button } from 'semantic-ui-react'


const styles = {
  item: {
    color: '#fff',
  },
};

class SupplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mana: '',
      smana: '',
      gmana: '',
      umana: '',
      health: '',
      shealth: '',
      ghealth: '',
      uhealth: '',
      suhealth: '',
      gspirit: '',
      uspirit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    const { player, sumWaste } = this.props;
    const array = Object.keys(this.state);
    array.map((x,i) => {
      console.log(x);
      if (x == '') {
        sumWaste(player, 0, x);
        //this.setState({ [x]: ''});
      } else {
        sumWaste(player, this.state[x], x);
        //this.setState({ [x]: ''});
      }
    });

  }

  render() {
    const { 
      mana, smana, gmana, umana,
      health, shealth, ghealth,
      uhealth, suhealth, gspirit,
      uspirit
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            name="mana" 
            onChange={this.handleChange}
            value={mana}
            placeholder='MP'
            width={3}
          />
          <Form.Input 
            name="smana"
            onChange={this.handleChange}
            value={smana}
            placeholder='Strong MP'
            width={3}
          />
          <Form.Input
            name="gmana"
            onChange={this.handleChange}
            value={gmana}
            placeholder='Great MP'
            width={3}
          />
          <Form.Input
            name="umana"
            onChange={this.handleChange}
            value={umana}
            placeholder='Ultimate MP'
            width={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            name="shealth"
            onChange={this.handleChange}
            value={shealth}
            placeholder='Strong HP'
            width={3}
          />
          <Form.Input
            name="ghealth"
            onChange={this.handleChange}
            value={ghealth}
            placeholder='Great HP'
            width={3} 
          />
          <Form.Input
            name="uhealth"
            onChange={this.handleChange}
            value={uhealth}
            placeholder='Ultimate HP'
            width={3}
          />
          <Form.Input
            name="suhealth"
            onChange={this.handleChange}
            value={suhealth}
            placeholder='Supreme HP'
            width={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            name="health"
            onChange={this.handleChange}
            value={health}
            placeholder='HP'
            width={4}
          />
          <Form.Input
            name="gspirit"
            onChange={this.handleChange}
            value={gspirit}
            placeholder='Great SP'
            width={4}
          />
          <Form.Input
            name="uspirit"
            onChange={this.handleChange}
            value={uspirit}
            placeholder='Ultimate SP'
            width={4}
          />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SupplyForm;
