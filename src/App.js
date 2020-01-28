import React, { Component } from "react";

export default class App extends Component {
  
  state= {
      peopleInSpace: []
  }
    componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }
  }

  render() {
    return <div></div>;
  }
}
