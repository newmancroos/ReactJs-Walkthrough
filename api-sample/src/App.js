import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component{
  //#region Call external api using fetch
//   constructor(props)
//   {
//     super()
//     this.state={
//       loading: false,
//       character : []
//     }
//   }
//   componentDidMount(){
//     this.setState({
//       loading : true
//     })
//     fetch("https://api.github.com/users/hadley/orgs")
//     .then(response => response.json())
//     .then(data => {
//       //console.log(data)
//        this.setState({
//          character: data,
//          loading : false
//        })
//     })
//   }
//   render()
//   {
//     const text = this.state.loading ? "Loading..." : this.state.character.map((item)=>{
//       return <div>{item.url}</div>});
//     return(
//         <div>
//          {text}
//         </div>
//     );
//   }
// }
//#endregion

constructor(props)
{
  super(props)
  this.state={
    firstName:"",
  lastName: "",
  description:"",
  isFriendly:true,
  gender:""
}
  // this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
  this.handleChange = this.handleChange.bind(this)
}
// handleFirstNameChange(e)
// {
//   this.setState({
//     firstName : e.target.value
//   })
// }
handleChange(e)
{

  //[e.target.name] : e.target.value
  const {name, value, type, checked} = e.target;
  type === "checkbox" ? 
  this.setState({[name] : checked}) :
  this.setState({[name] : value })
}
render(){
  return(
    <form>
      <input 
        type="text" 
        name="firstName" 
        placeholder = "First Name" 
        onChange={this.handleChange} 
        value={this.state.firstName} 
      />
      {this.state.firstName}
      <br/>
      <input 
        type="text" 
        name="lastName" 
        placeholder = "Last Name" 
        onChange={this.handleChange} 
        value={this.state.lastName} 
      />
      <br />
      <textarea 
        name="description" 
        value={this.state.description} 
        onChange={this.handleChange} 
      />
      <br/>{this.state.description}
      <br/>
      <label>
      <input
        name="isFriendly"  
        type="checkbox" 
        checked={this.state.isFriendly} 
        onChange={this.handleChange} />
        Is Friendly?
        </label>
    <br/>
      <label>
        <input
        name="gender"  
        type="radio" 
        value="male"
        checked = {this.state.gender == "male"}
        onChange={this.handleChange} />
        Male
      </label>
      
      <label>
        <input
        name="gender"  
        type="radio" 
        value="female"
        checked = {this.state.gender == "female"}
        onChange={this.handleChange} />
        Female
      </label>    
      <br/>
      {this.state.gender}             
    </form>
  )
}
}
export default App;
