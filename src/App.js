import React, {Component} from 'react';
import AstronautList from './AstronautList'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      people: ''
    }
  }


  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
      people: json['people']
    })
  })
  }

  render(){
    return <AstronautList people={this.state.people} />
  }
}
