import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

import productData from './productData';
import Product from './components/Product';

//#region 
// function App() {
//   //#region old
//   // const nums = [1,2,3,4,5,6,7,8,9,10];
//   // var doubles = nums.map((x) => {
//   //       //console.log(x);
//   //       return x * 2;
//   // });
//   // doubles.map((x) =>{
//   //   console.log(x);
//   // });
//#endregion

//#region 

// function App(){
//  //const proddata = productData.map(item=> <Product key= {item.id} product={item}/>);

//   return (
//     <div>
//       <Header  />
//      {
//         productData.map((item)=>
//           <div>
//               <Product key={item.id} product={item} /> <hr/>
//           </div>
//         )
//       }
//       {/* {proddata} */}
//       <MainContent/>
//       <Footer/>
//     </div>
//   );
// }
//#endregion
//#region 
// class App extends Component{
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       count : 0
//     }
//     this.HandleClick = this.HandleClick.bind(this);
//   }

//   HandleClick()
//   {
//     this.setState(prevState => {
//         return {
//             count : prevState.count +1
//         }
//     });
//   }
//   render(){
//     return (
//     <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.HandleClick}> Change</button>
//     </div>

//     )
//   }

// }
//#endregion

//#region Conditional Components
// import Conditional from './components/Conditional'
// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       isLoading : true
//     }
//   }
//   componentDidMount(){
//     setTimeout(() =>{
//       this.setState({
//         isLoading : false
//       })
//     }, 1500)
//   }
//   render(){
//     return(
//       <div>
//         {this.state.isLoading ? 
//           <h1> Loading....</h1>:
//           // <Conditional isLoading={this.state.isLoading} />
//           <Conditional />
//         }
//       </div>
//     )
//   }
// }

//#endregion

//#region 
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       unreadMessages: [
//         "Call your mom!", "New spam email available, All links are definitely safe to click."
//       ]
//     }
//   }
//   render(){
//     return(
//       <div>
//         {
//           // this.state.unreadMessages.length > 0 ?
//           // <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//           // : null

//           //We can also code like below
//           this.state.unreadMessages.length > 0 && <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//         }
//       </div>
//     )
//   }

// }
//#endregion
class App extends Component{
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () =>{
    this.setState((prevState) => {
      return this.state.loggedIn = !prevState.loggedIn
    })
  }
  render(){
    return(
      <div>
        <button id="btnLogIn" onClick={this.handleClick}>{this.state.loggedIn ? "Logout": "LogIn"}</button>
      </div>
    )
  }

}
export default App;
