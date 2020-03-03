import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle } from 'rea';
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoItem from './components/TodoItem';
import todosData from './todosData';

class App extends Component{
  constructor(props)
  {
    super()
    this.state = {
     todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id)
  {
    this.setState(prevState =>{
      const updatedToDos = prevState.todos.map(todo =>{
        if(todo.id === id)
        {
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos : updatedToDos
      }
    })
  }
  render()
  {
    const todoItems = this.state.todos.map((item) => <TodoItem key={item.id} item={item}  handleChange={this.handleChange}/>)
    return(
      <div className="container">
      {todoItems}
      {/* <div className="row">
        <div className="card mb-2" >
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">test</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div> */}
      </div>
    )
  }
}

export default App;
