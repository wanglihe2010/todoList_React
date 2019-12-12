import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  handleCHange = (event) => {
   this.setState({newTodo: event.target.value}); 
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.clearForm()
  }

  clearForm() {
    this.setState({newTodo: ''});
    document.getElementById('todoForm').reset();
  }

  render() {
    return (
      <form onSubmit={this.submitForm} id='todoForm' >
        <input 
          type="text"
          name="todoText" onChange={this.handleCHange}/>
        <input type="submit" disabled={!this.state.newTodo}/>
      </form>
    )
  }
}

export default NewTodo
