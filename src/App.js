import React, { Component } from 'react'
import TodoItem from "./Component/todoItems/todoItem";
import TodoAdd from "./Component/todoAdd/todoAdd";

export default class App extends Component {

  state = {

    Items: [
      {id:1,nickname:'zead',age:23},
      {id:2,nickname:'kareem',age:27},
      {id:3,nickname:'omer',age:25},
      {id:4,nickname:'ramy',age:26}
    ]
  }

   deleteItem = (id) => {
    let items = this.state.Items;
    let i = items.findIndex(item => item.id ===id) 
    items.splice(i,1)
    this.setState({items})

  }

   addItem = (item) => {
      let items = this.state.Items;
      item.id = Math.random();
      items.push(item);
      this.setState({items})
   }
  render() {
    return (
      <div className='App container'>
        <h2 className='Text-center'>Todo App</h2> 

       <TodoItem Items = {this.state.Items}  deleteItem = {this.deleteItem} />


        <TodoAdd addItem = {this.addItem} />
      </div>
    )
  }
}



