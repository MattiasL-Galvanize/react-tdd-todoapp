import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [{"assignee": "Daniel", "name": "Take out trash"}]
  }

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }

  render() {
    return (
      <div id="main">
        <TodoList todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
