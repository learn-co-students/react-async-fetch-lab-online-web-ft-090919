import React, {Component} from 'react';


export default class Astronaut extends Component{

  render(){
    console.log(this.props)
    return (<li>{this.props.name}</li>)
  }
}
