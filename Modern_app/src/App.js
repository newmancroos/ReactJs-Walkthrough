import React, {Component} from 'react'

class  App extends Component{
  state = {
    firstName: ""
  }
  // constructor()
  // {
  //   super()
  //   this.state = {
  //     firstName : ""
  //   }
  //   //this.handlerChange = this.handlerChange.bind(this)  //If we use arrow function we no longer wnat to bind here
  // }
  handlerChange = (e) =>
  {
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }
  render(){
  return(
    <main>
      <form>
        <input 
          type="text" 
          placeholder = "First Name"
          name="firstName"
          value={this.state.firstName} onChange = {this.handlerChange}
        /> 
        <br/>
        First Name : {this.state.firstName}
      </form>
    </main>   
  )
}
}
export default App;
