import React from 'react';
import {shallow} from 'enzyme'

import TodoList from './TodoList'

describe('TodoList', () => {
  const generateTodoList = (overrides) => {
    const defaultProps = {
      todos: []
    }

    const props = {...defaultProps, ...overrides}

    return shallow(<TodoList {...props}/>)
  }

  it('renders a ul', () => {
    const wrapper = generateTodoList({})

    expect(wrapper.find('ul')).toHaveLength(1)
  })

  it('displays the name and asignee of a todo', () => {
    const todos = [{name: 'foo', assignee: 'bar'}]
    const wrapper = generateTodoList({todos})

    expect(wrapper.find('li').text()).toContain(todos[0].name)
    expect(wrapper.find('li').text()).toContain(todos[0].assignee)
  })

  it('displays multiple todos', () => {
    const todos = [{name: 'foo', assignee: 'bar'},{name: 'foo', assignee: 'bar'},{name: 'foo', assignee: 'bar'}]
    const wrapper = generateTodoList({todos})

    expect(wrapper.find('li')).toHaveLength(3)
  })
})