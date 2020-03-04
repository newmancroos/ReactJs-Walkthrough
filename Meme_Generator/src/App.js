import React, {Component} from 'react';
import MemeGenerator from './MemeGenerator'
import Header from './Header'

class App extends Component{
  constructor(props)
  {
    super()
    this.state = {
   }
  }
  
  render()
  {
    return(
      <div className="container">
        <Header/>
        <MemeGenerator />
      </div>
    )
  }
}

export default App;
