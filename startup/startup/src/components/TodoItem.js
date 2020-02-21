import React from 'react';
import '../App.css';
import toDoData from '../todosData';
class TodoItem extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){

        return(
            <div className="todo-item">
                <input type="checkbox" 
                checked={this.props.item.completed} 
                onChange={() => this.props.handleChange(this.props.item.id)}/>
                {this.props.item.text}
            </div>
        );
    }
}
export default TodoItem;