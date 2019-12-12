import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.index,
      editing: false,
      editTodo: this.props.todo,
      oldTodo: this.props.todo
    }
  }

  deleteTodo = (event) => {
    event.preventDefault();
    this.props.deleteTodo(this.state.id);
  }
  updateTodo = (event) => {
    event.preventDefault();
    this.setState({editing: true})
  }
  saveUpdatedTodo = (event) => {
    event.preventDefault();
    this.props.updateTodo(this.state.id, this.state.editTodo);
    this.setState({editing: false})
    console.log('testing')
  }

  inputOnchange = (event) => {
    event.preventDefault();
    this.setState({editTodo: event.target.value})
  }

  cancelUpdatedChange = (event) => {
    event.preventDefault();
    this.setState({editing: false})
  }

  render() {
    return (
      <li>

        {
          (this.state.editing)
          ? 
          <span>
                <input type="text" value={this.state.editTodo} onChange= {this.inputOnchange} />
                <button onClick = {this.cancelUpdatedChange}>Cancel</button>
              </span>
            : 
            <span>{' ' + this.props.todo+"\t"}</span>
          }
          <button disabled={this.state.editing} onClick={this.deleteTodo}>Delete</button>
          <button hidden={this.state.editing} onClick={this.updateTodo}>Update</button>
          <button hidden={!this.state.editing} disabled={!this.state.editTodo} onClick={this.saveUpdatedTodo}>Save</button>
      </li>
    )
  }

}

export default Todo;
