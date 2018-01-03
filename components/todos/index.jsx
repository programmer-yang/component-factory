import React, { Component } from 'react'
import './index.less'

class Todos extends Component {
  state = {
    todos: [],
  }
  localAddTodo = (v) => {
    const { todos } = this.state
    const text = this.DOMInput.value
    if (v.key === 'Enter' && text && !todos.some(item => item.text === text)) {
      const newTodos = new Array(...todos)
      newTodos.unshift({
        text,
        hasCompleted: false,
      })
      this.setState({ todos: newTodos })
      this.DOMInput.value = ''
    }
  }
  localAddTodoClick = () => {
    const { todos } = this.state
    const text = this.DOMInput.value
    const newTodos = new Array(...todos)
    newTodos.unshift({
      text,
      hasCompleted: false,
    })
    this.setState({ todos: newTodos })
    this.DOMInput.value = ''
  }
  handleComplete = (key) => {
    const newTodos = new Array(...this.state.todos)
    newTodos[key].hasCompleted = !newTodos[key].hasCompleted
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-root">
        <div className="todo-root-title">
          <h1>Todos</h1>
        </div>
        <div className="input-box">
          <input
            ref={(e) => { this.DOMInput = e }}
            type="text"
            onKeyUp={this.localAddTodo}
          />
        </div>
        <ul>
          {todos.map((item, key) => (
            <li
              key={item.text}
              aria-hidden
              className={item.hasCompleted ? 'active' : ''}
              onClick={this.handleComplete.bind(this, key)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Todos
