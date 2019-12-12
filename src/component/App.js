import React, { Component } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: ['laundry', 'dishes']
    }
  }

  addTodo = (todo) => {
    this.setState((state) => ({todos: [...state.todos, todo]}))
    //this.setState({todos: [...this.state.todos, todo]})
  }

  updateTodo = (todoId, newTodo) => {
    this.setState(
      (state) => {
        let newTodos = [...state.todos];
        newTodos[todoId] = newTodo;
        return ({todos: newTodos})
      }
    )
  }

  deleteTodo = (todoId) => {
    this.setState(
      (state) => {
        //remove index = todoId from todos
        return ({
          todos: [...state.todos].filter((val, id) => id !== todoId)
        })
      }
    )
  }


  render() {
    return (
      <main>
        <br />
        <NewTodo  addTodo={this.addTodo}/>
        <br />
        <p>Current To Do List: </p>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo} updateTodo = {this.updateTodo}
        />
      </main>
    );
  }
}

export default App;
