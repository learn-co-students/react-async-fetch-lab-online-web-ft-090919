import React, { Component } from 'react';

export default class App extends Component {
    state = {
        astronauts: []
    }
    getAstronauts = () => {
        return this.state.astronauts.map(astronaut => <p>Name: {astronaut.name} On the: {astronaut.craft}</p>);
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(json => {
            this.setState({
                astronauts: json.people
            });
        });
    }
   render() {
        return (
            <div>
               {this.getAstronauts()} 
            </div>
        );
   }
}
