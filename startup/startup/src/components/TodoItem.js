import React from 'react';
import '../App.css';
import toDoData from '../todosData';
//#region 
// function TodoItem(props)
// {
//     return(
//         <div className="todo-item">
//             <input type="checkbox" checked={props.item.completed} />
//             {props.item.text}
//         </div>
//     )
// }
//#endregion
class TodoItem extends React.Component{
    //when we use proprs in side class based component we have to use this.props
    constructor(props)
    {
        super(props);
    }
    render(){

        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.completed} />
                {this.props.item.text}
            </div>
        );
    }
}
export default TodoItem;