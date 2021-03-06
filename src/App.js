import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Pay Gas bill',
        completed: false
      },
      {
        id: 2,
        title: 'Call dentist for appointment',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with sister',
        completed: false
      }
    ]
  }

  // Mark completed Todo 
  markComplete = (id) => {
   // console.log(id)
   this.setState({ todos: this.state.todos.map(todo => {
     if(todo.id === id) {
       todo.completed = !todo.completed
     }
     return todo;
   }) });
  }

  // Delete Todo
  delTodo = (id) => {
    //console.log('id')
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
      !== id)] });
  }

  render() { 
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
