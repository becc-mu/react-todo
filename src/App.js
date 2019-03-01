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
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
