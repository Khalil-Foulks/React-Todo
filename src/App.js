import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css"

const listArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      listArray:listArray
    };
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      listArray: [...this.state.listArray, newItem]
    });
  }

  toggleItem = itemId => {
    this.setState({
      listArray: this.state.listArray.map(item =>{
        if(item.id === itemId){
          return{
          ...item,
          completed:!item.completed
          }
        } else{
          return item;
        }
      })
    })
  };
  
  clearItem = event => {
    event.preventDefault();
    this.setState( prevState=>{
      const list = this.state.listArray.filter(item=>{
        return !item.completed
      })
    })
  }




  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addItem = {this.addItem} 
            clearItem = {this.clearItem}
          />
        </div>
        <TodoList
          listArray={this.state.listArray}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
