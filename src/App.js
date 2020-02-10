import React from 'react'

export default class App extends React.Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(resp => resp.json())
          .then(
              ({people}) => this.setState({ 
                  astronauts: people 
                })
            )
    }

    render() {
        return (
          <div>
            {this.state.astronauts.map((person, id) => <h1 key={id}>{person.name}</h1>)}
          </div>
        )
      }
    
}
