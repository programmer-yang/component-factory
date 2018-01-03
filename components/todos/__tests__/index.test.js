import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import App from '../index'

describe('Test => Todos', function() {
  it('Todos => 测试组件标题是否正确', () => {
    const app = shallow(<App />)
    expect(app.find('h1').text()).toBe('Todos');
  })
  
  it('Todos => 测试组件初始状态', () => {
    const app = shallow(<App />)
    expect(app.find('li').length).toBe(0);
  })

  it('Todos => 测试新增任务', () => {
    const app = mount(<App />)
    app.find('input').instance().value = '买菜'
    app.find('input').simulate('keyUp', { key: 'Enter' })
    app.find('input').instance().value = '买菜'
    app.find('input').simulate('keyUp', { key: 'Enter' })
    expect(app.find('li').length).toBe(1)
  })
  it('Todos => 测试切换任务状态', () => {
    const app = mount(<App />)
    app.find('input').instance().value = '买菜'
    app.find('input').simulate('keyUp', { key: 'Enter' })
    app.find('li').at(0).simulate('click')
    expect(app.find('li').at(0).hasClass('active')).toBe(true)
  })
})
