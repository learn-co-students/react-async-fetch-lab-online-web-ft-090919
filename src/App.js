// create your App component here
import React from 'react'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }


  componentDidMount(){
    const getData = async () => {
      try{
        let response = await fetch('http://api.open-notify.org/astros.json')
        if(!response.ok){ throw response}
        let data = await response.json()
        this.handleData(data)
      }catch(error){
        console.log(error)
      }
    }
    getData()
  }

  handleData(data){
    this.setState({
      people: data.people
    })
    console.log(this.state)
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