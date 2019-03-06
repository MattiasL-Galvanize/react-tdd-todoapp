import React from 'react'

class AddTodo extends React.Component {
  state = {
    name: '',
    assignee: ''
  }

  handleChange = (fieldId) => {
    return (event) => {
      this.setState({[fieldId]: event.target.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name" onChange={this.handleChange('name')}/>
        <input id="assignee" onChange={this.handleChange('assignee')}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AddTodo