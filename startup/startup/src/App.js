import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

// import productData from './productData';
// import Product from './components/Product';

import TodoItem from './components/TodoItem';
import todosData from './todosData';
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

//  //const proddata = productData.map(item=> <Product key= {item.id} product={item}/>);

//   // return (
//   //   <div>
//   //     <Header  />
//   //    {
//   //       productData.map((item)=>
//   //         <div>
//   //             <Product key={item.id} product={item} /> <hr/>
//   //         </div>
//   //       )
//   //     }
//   //     {/* {proddata} */}
//   //     <MainContent/>
//   //     <Footer/>
//   //   </div>
//   // );
// //#endregion

//   //Todo start here
//   const todoItems = todosData.map((item) => <TodoItem key={item.id} item={item} />)
//   return(
//     <div>
//     {todoItems}
//     </div>
//   )

// }
//#endregion
class App extends Component{
  constructor(props)
  {
    super()
    this.state = {
      answer : "Yes",
      isLoggedIn: false
    }
  }
  //Our own method goes here
  render()
  {
    //call you own method here before return
    const todoItems = todosData.map((item) => <TodoItem key={item.id} item={item} />)
    return(
      <div>
      {todoItems}
      </div>
    )
  }
}

export default App;
