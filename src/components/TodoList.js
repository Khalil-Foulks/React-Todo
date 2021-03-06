// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props =>{
    console.log('Props.listArray: ',props.listArray)
    return(
        <div className="taskList">
            {props.listArray.map(item =>(
                <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
        </div>
    )
}
        

export default TodoList