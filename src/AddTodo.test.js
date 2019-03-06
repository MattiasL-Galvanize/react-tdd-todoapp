import React from 'react';
import {shallow} from 'enzyme'

import AddTodo from './AddTodo'

describe('AddTodo', () => {
  it('renders a form and sumbit button', () => {
    const wrapper = shallow(<AddTodo />)

    expect(wrapper.find('form')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('has default state and updates it when fields are filled out', () => {
    const wrapper = shallow(<AddTodo />)

    expect(wrapper.state()).toEqual({
      name: '',
      assignee: ''
    })

    const nameInput = wrapper.find('input#name')
    const assigneeInput = wrapper.find('input#assignee')

    const name = 'some_name'
    const assignee = 'some_assignee'
    nameInput.simulate('change', {target: {value: name}})
    assigneeInput.simulate('change', {target: {value: assignee}})

    expect(wrapper.state()).toEqual({name, assignee})
  })

  it('calls addTodo with the state', () => {
    const mockAddTodo = jest.fn()
    const wrapper = shallow(<AddTodo addTodo={mockAddTodo}/>)
    const submitState = {name: 'foo', assignee: 'bar'}
    wrapper.setState(submitState)

    wrapper.find('form').simulate('submit', {preventDefault: () => {}})

    expect(mockAddTodo).toHaveBeenCalledWith(submitState)
  })
})