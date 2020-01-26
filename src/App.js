import React, {Component} from 'react'

export default class App extends Component {

    render() {
    }

    async componentDidMount() {
         await fetch('http://api.open-notify.org/astros.json')
    }

}