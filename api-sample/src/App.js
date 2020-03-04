import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/FormContainer'
//class App extends Component{
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

//#region handler Common event with form
// constructor(props)
// {
//   super(props)
//   this.state={
//     firstName:"",
//   lastName: "",
//   description:"",
//   isFriendly:true,
//   gender:""
// }
//   // this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
//   this.handleChange = this.handleChange.bind(this)
// }
// // handleFirstNameChange(e)
// // {
// //   this.setState({
// //     firstName : e.target.value
// //   })
// // }
// handleChange(e)
// {

//   //[e.target.name] : e.target.value
//   const {name, value, type, checked} = e.target;
//   type === "checkbox" ? 
//   this.setState({[name] : checked}) :
//   this.setState({[name] : value })
// }
// render(){
//   return(
//     <form>
//       <input 
//         type="text" 
//         name="firstName" 
//         placeholder = "First Name" 
//         onChange={this.handleChange} 
//         value={this.state.firstName} 
//       />
//       {this.state.firstName}
//       <br/>
//       <input 
//         type="text" 
//         name="lastName" 
//         placeholder = "Last Name" 
//         onChange={this.handleChange} 
//         value={this.state.lastName} 
//       />
//       <br />
//       <textarea 
//         name="description" 
//         value={this.state.description} 
//         onChange={this.handleChange} 
//       />
//       <br/>{this.state.description}
//       <br/>
//       <label>
//       <input
//         name="isFriendly"  
//         type="checkbox" 
//         checked={this.state.isFriendly} 
//         onChange={this.handleChange} />
//         Is Friendly?
//         </label>
//     <br/>
//       <label>
//         <input
//         name="gender"  
//         type="radio" 
//         value="male"
//         checked = {this.state.gender == "male"}
//         onChange={this.handleChange} />
//         Male
//       </label>
      
//       <label>
//         <input
//         name="gender"  
//         type="radio" 
//         value="female"
//         checked = {this.state.gender == "female"}
//         onChange={this.handleChange} />
//         Female
//       </label>    
//       <br/>
//       {this.state.gender}      
//       <br/>
//       <label>
//       Select city :
//       <select name="city" value={this.state.city} onChange={this.handleChange}>
//         <option value="1"></option>  
//         <option value="2">Rockville</option> 
//         <option value="3">Shadygrow</option> 
//       </select>  
//       </label>    
//       <br/>
//       {this.state.city}  <br/> 
//       <button>Submit</button>
//       {/* <input type="submit" value="Submit"></input> */}
//     </form>
//   )
// }
//#endregion
//#region Form with some controls
// constructor(props)
// {
//   super(props)
//   this.state={
//     firstName:"",
//     lastName: "",
//     age:"",
//     gender:"",
//     destination:"",
//     isVegan : false,
//     isKosher: false,
//     isLactoseFree : false
//  }
//   this.handleChange = this.handleChange.bind(this)
// }

// handleChange(e)
// {
//   const {name, value, type, checked} = e.target;
//   type === "checkbox" ? 
//   this.setState({[name] : checked}) :
//   this.setState({[name] : value })
// }
// render(){
//   return(
//     <form>
//       <input 
//         type="text" 
//         name="firstName" 
//         placeholder = "First Name" 
//         onChange={this.handleChange} 
//         value={this.state.firstName} 
//       />
//       <br/>
//       <input 
//         type="text" 
//         name="lastName" 
//         placeholder = "Last Name" 
//         onChange={this.handleChange} 
//         value={this.state.lastName} 
//       />
//       <br/>
//       <input 
//         type="text" 
//         name="age" 
//         placeholder = "Age" 
//         onChange={this.handleChange} 
//         value={this.state.age} 
//       />
//       <br/>
//       <label>
//         <input 
//           type="radio" 
//           name="gender" 
//           value="male" 
//           checked={this.state.gender === "male"} 
//           onChange={this.handleChange}/> Male
//       </label>
//       <br/>
//       <label>
//         <input 
//           type="radio" 
//           name="gender" 
//           value="female" 
//           checked={this.state.gender === "female"} 
//           onChange={this.handleChange}/> Female
//       </label>
//       <br/>
//       <select name="destination" onChange={this.handleChange} value={this.state.destination}>
//         <option value="">---Please Choose a Destination---</option>
//         <option value="germany">Germany</option>
//         <option value="norway">Norway</option>
//         <option value="north pole">North Pole</option>
//         <option value="south pole">South Pole</option>
//       </select>
//       <br/>
//       <label>
//         <input type="checkbox" name="isVegan" checked={this.state.isVegan == true} onChange={this.handleChange} />
//         Is Vegan?
//       </label>
//       <label>
//         <input type="checkbox" name="isKosher" checked={this.state.isKosher == true} onChange={this.handleChange} />
//         Is Kosher?
//       </label>
//       <label>
//         <input type="checkbox" name="isLactoseFree" checked={this.state.isLactoseFree == true} onChange={this.handleChange} />
//         Is Lactose Free?
//       </label>
//       <br/>
//       <br/>
//       <button>Submit</button>
//       <hr />
//       <h2>Entered Information</h2> <br/>
//       Your Name : {this.state.firstName}  {this.state.lastName} <br/>
//       Your Age : {this.state.age} <br/>
//       Gender : {this.state.gender} <br/>
//       Destination : {this.state.destination} <br/>
//       Is Vegan? {this.state.isVegan === true? "True": "False"} <br/>
//       Is Kosher? {this.state.isKosher ===true? "True":"False"} <br/>
//       Is Lacotse Free? {this.state.isLactoseFree===true? "True" : "False"}
//     </form>
//   )
// }
//#endregion
//}

function App(){
  return(
    <FormContainer />
  )
}
export default App;
