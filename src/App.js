// create your App component here

import React, { Component } from 'react'


class App extends Component {
    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.updateState(data))
    }

    updateState = (data) => {
        this.setState({
            people: data.people
        })
    }



    render() {
        return (
            <div>
                {/* {this.state.people} */}
                {this.state.people.map(person => person.name + " ")}
            </div>
        )
    }


}





export default App
