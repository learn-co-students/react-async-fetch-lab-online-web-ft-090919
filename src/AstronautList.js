import React, {Component} from 'react';
import Astronaut from './Astronaut'

export default class AstronautList extends Component{

  listAstronauts = () => {
    let peeps = [...this.props.people]

    return peeps.map( person =>  <Astronaut name={person.name} /> )
  }

  render(){
    return <ul>{this.listAstronauts()}</ul>
  }
}
