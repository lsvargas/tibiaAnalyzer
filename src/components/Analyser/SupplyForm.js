import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Form, Button } from 'semantic-ui-react'
import Aux from '../Aux/Aux';
import Mana from '../../assets/images/mpp.gif';
import Smana from '../../assets/images/smp.gif';
import Gmana from '../../assets/images/gmp.gif';
import Umana from '../../assets/images/ump.gif';
import Shealth from '../../assets/images/sh.gif';
import Ghealth from '../../assets/images/gh.gif';
import Uhealth from '../../assets/images/uh.gif';
import SuHealth from '../../assets/images/suh.gif';
import Health from '../../assets/images/h.gif';
import Gspirit from '../../assets/images/gs.gif';
import Uspirit from '../../assets/images/us.gif';


const styles = {
  item: {
    color: '#fff',
  },
  imgDim: {
    width: '35px',
    height: '35px',
  },
  butt: {
    color: 'white',
    backgroundColor: '#475286',
  }
  
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
    const { player, sumWaste, resetWaste } = this.props;
    resetWaste(player);
    
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
      <Aux>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            name="mana" 
            onChange={this.handleChange}
            value={mana}
            placeholder='MP'
            width={2}
          />
          <img style={styles.imgDim} src={Mana}/>
          <Form.Input 
            name="smana"
            onChange={this.handleChange}
            value={smana}
            placeholder='S MP'
            width={2}
          />
          <img style={styles.imgDim} src={Smana}/>
          <Form.Input
            name="gmana"
            onChange={this.handleChange}
            value={gmana}
            placeholder='G MP'
            width={2}
          />
          <img style={styles.imgDim} src={Gmana}/>
          <Form.Input
            name="umana"
            onChange={this.handleChange}
            value={umana}
            placeholder='U MP'
            width={2}
          />
          <img style={styles.imgDim} src={Umana}/>
        </Form.Group>
        <Form.Group>
          <Form.Input
            name="shealth"
            onChange={this.handleChange}
            value={shealth}
            placeholder='S HP'
            width={2}
          />
          <img style={styles.imgDim} src={Shealth}/>
          <Form.Input
            name="ghealth"
            onChange={this.handleChange}
            value={ghealth}
            placeholder='G HP'
            width={2} 
          />
          <img style={styles.imgDim} src={Ghealth}/>
          <Form.Input
            name="uhealth"
            onChange={this.handleChange}
            value={uhealth}
            placeholder='U HP'
            width={2}
          />
          <img style={styles.imgDim} src={Uhealth}/>
          <Form.Input
            name="suhealth"
            onChange={this.handleChange}
            value={suhealth}
            placeholder='Su HP'
            width={2}
          />
          <img style={styles.imgDim} src={SuHealth}/>
        </Form.Group>
        <Form.Group>
          <Form.Input
            name="health"
            onChange={this.handleChange}
            value={health}
            placeholder='HP'
            width={2}
          />
          <img style={styles.imgDim} src={Health}/>
          <Form.Input
            name="gspirit"
            onChange={this.handleChange}
            value={gspirit}
            placeholder='G Spirit'
            width={2}
          />
          <img style={styles.imgDim} src={Gspirit}/>
          <Form.Input
            name="uspirit"
            onChange={this.handleChange}
            value={uspirit}
            placeholder='U Spirit'
            width={2}
          />
          <img style={styles.imgDim} src={Uspirit}/>
        </Form.Group>
        <Button style={styles.butt}>Submit</Button>
      </Form>
      
      </Aux>
    );
  }
}

export default SupplyForm;
