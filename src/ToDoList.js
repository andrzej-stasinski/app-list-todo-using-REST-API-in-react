import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

const todo = [
    {text: 'to do some shopping'},
    {text: 'to do breakfast'},
  ]
  
class ToDoList extends Component {
  
    state = {
      tasks: todo,
      task: '',
    }
  
    handleInput = (e) => {
      this.setState({ task: e.target.value });
    }
    addTask = (e) => {
      this.setState({ 
        tasks: [...this.state.tasks, {text: this.state.task}],
        task: ''
      });
    }
  
    render() {
      return (
        <div>
          <h2 className='title'>{this.props.title}</h2> 
          {
            this.state.tasks.map(task => (
                <ToDoItem key={task.text} text={task.text} />
            ))
          }
          <input type='text' value={this.state.task} onChange={this.handleInput} /> 
          <button onClick={this.addTask}>Add</button>      
        </div>
      )
    }
}

export default ToDoList