import React from 'react';
import {shallow} from 'enzyme'

import App from './App';

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders a main dev', () => {
    expect(wrapper.find('div#main')).toHaveLength(1)
  })

  it('allows me to add a todo to the default', () => {
    //setup
    const defaultTodos = [{
      name: 'Take out trash',
      assignee: 'Daniel'
    }]
    const newTodo = {
      name: 'Some name',
      assignee: 'not me'
    }

    expect(wrapper.state().todos).toEqual(defaultTodos)

    //exercise
    wrapper.instance().addTodo(newTodo)

    //assertion
    expect(wrapper.state().todos).toEqual([...defaultTodos, newTodo])
  })

  it('gives TodoList the todos', () => {
    const todoList = wrapper.find('TodoList')

    expect(todoList.props().todos).toEqual(wrapper.state().todos)
  })

  it('gives addTodo to AddTodo', () => {
    const addTodo = wrapper.find('AddTodo')

    expect(addTodo.props().addTodo).toEqual(wrapper.instance().addTodo)
  })
})
