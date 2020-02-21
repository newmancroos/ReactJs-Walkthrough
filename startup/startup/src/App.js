import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

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
      <div>
      {todoItems}
      </div>
    )
  }
}

export default App;
