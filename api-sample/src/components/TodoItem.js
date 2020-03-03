import React from 'react';
import '../App.css';
import toDoData from '../todosData';
class TodoItem extends React.Component{
    constructor(props)
    {
        super(props);
    }
   
    render(){
        const completedStle = {
            fontStyle : "italic",
            color: "#cdcdcd",
            textDecoration : "line-through"
        }
        return(
            <div className="todo-item">
                <input type="checkbox" 
                checked={this.props.item.completed} 
                onChange={() => this.props.handleChange(this.props.item.id)}/>
                <p style={this.props.item.completed ? completedStle : null}>{this.props.item.text}</p>
            </div>
        );
    }
}
export default TodoItem;