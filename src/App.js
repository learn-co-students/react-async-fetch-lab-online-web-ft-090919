// create your App component here
import React, { Component } from 'react';
import { render } from 'enzyme';

class App extends Component {

    state ={
        peopleInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        }
        )
    }

    render(){
        return(
            <div>
                <ul>{this.state.peopleInSpace.map(p => p.name)}</ul>
            </div>
        )
    }

}
export default App