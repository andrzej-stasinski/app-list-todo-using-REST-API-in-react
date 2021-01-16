import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

const todo = [
    {text: 'to do some shopping', done: true},
    {text: 'to do breakfast', done: false},
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
            <div className='tasks'>
            {
                this.state.tasks.map(task => (
                    <ToDoItem key={task.text} text={task.text} done={task.done} />
                ))
            }            
            </div>
            <div className='form'>
                <input 
                    type='text' 
                    value={this.state.task} onChange={this.handleInput} 
                    className='form__input'
                /> 
                <button onClick={this.addTask} 
                    className='form__button'
                >
                    Add
                </button>                 
            </div>
     
        </div>
      )
    }
}

export default ToDoList