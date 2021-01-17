import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem'
import FormToDo from '../components/FormToDo'

// 1 sposób przekazania do state
const todo = [
    {id: 1, text: 'to do some shopping', done: true},
    {id: 2, text: 'to do breakfast', done: false},
  ]
  
class ToDoList extends Component {

    // 2 sposób przekazania do state
    static defaultProps = {
      todo: [
        {id: 1, text: 'to do some shopping', done: true},
        {id: 2, text: 'to do breakfast', done: false},        
      ]
    }

    state = {
      // tasks: todo,
      tasks: this.props.todo,
      task: '',
    }
  
    handleInput = (e) => {
      this.setState({ task: e.target.value });
    }
    addTask = (e) => {
      const id = Date.now()
      console.log(id)
      this.setState({ 
        tasks: [
          ...this.state.tasks, 
          {text: this.state.task, id: id, done: false}
        ],
        task: ''
      });
    }
    toggleTaskDone = (id) => {
      console.log(id)
      // find return new element {}, changing it we change object & reference in state
      const task = this.state.tasks.find(task => task.id === id)
      task.done = !task.done
      this.setState({ tasks: [
        ...this.state.tasks,
        ] 
      });
    }
  
    render() {
      console.log('state', this.state.tasks)
      console.log('props', this.props)
      return (
        <div className='ToDoContainer'>
          <h2 className='title'>{this.props.title}</h2> 
            <div className='tasks'>
            {
                this.state.tasks.map(task => (
                    <ToDoItem 
                      key={task.id} text={task.text} done={task.done}
                      onToggleTaskDone={() => this.toggleTaskDone(task.id)} 
                    />
                ))
            }            
            </div>
            <FormToDo 
              onHandleInput={this.handleInput}
              taskValue={this.state.task}
              onAddTask={this.addTask}
            />

     
        </div>
      )
    }
}

export default ToDoList