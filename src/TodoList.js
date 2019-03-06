import React from 'react'

const TodoList = ({todos}) => (
  <ul>
    {todos.map((todo, i) => <li key={i}>{todo.name} {todo.assignee}</li>)}
  </ul>
)

export default TodoList