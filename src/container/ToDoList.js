import React, { Component, createRef } from 'react';
import ToDoItem from '../components/ToDoItem'
import FormToDo from '../components/FormToDo'
import {ToDoContainer, Title, Tasks, ErrorDiv} from './ToDoList.css'

class ToDoList extends Component {

    static defaultProps = {
      todo: [
        {id: 1, text: 'to do some shopping', done: true},
        {id: 2, text: 'to do breakfast', done: false},        
      ]
    }

    state = {
      tasks: this.props.todo,
      task: '',
    }
  
    handleInput = (e) => {
      this.setState({ task: e.target.value });
    }

    refError = createRef()

    addTask = (e) => {
      e.preventDefault()

      if(this.state.task.length === 0) {
        console.log(this.refError.current)
        this.refError.current.textContent = '*** Input empty ***'
        return
      } else {
        this.refError.current.textContent = ''
      }
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
        <ToDoContainer>
          <Title>{this.props.title}</Title> 
            <Tasks className='tasks'>
            {
                this.state.tasks.map(task => (
                    <ToDoItem 
                      key={task.id} text={task.text} done={task.done}
                      onToggleTaskDone={() => this.toggleTaskDone(task.id)} 
                    />
                ))
            }            
            </Tasks>

            <ErrorDiv 
              ref={this.refError} 
              style={{marginTop: '10px'}}
            ></ErrorDiv>

            <FormToDo 
              onHandleInput={this.handleInput}
              taskValue={this.state.task}
              onAddTask={this.addTask}
            />

     
        </ToDoContainer>
      )
    }
}

export default ToDoList