import React, { Component, createRef } from 'react';
import ToDoItem from '../components/ToDoItem'
import FormToDo from '../components/FormToDo'
import {ToDoContainer, Title, Tasks, ErrorDiv} from './ToDoList.css'

class ToDoList extends Component {

    state = {
      tasks: [],
      task: '',
    }

    getData = () => {
      fetch('http://localhost:3004/transactions')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ tasks: data });
      })      
    }

    componentDidMount() {
      console.log('componentDidMount')
      this.getData()
    }
  
    refError = createRef()

    handleInput = (e) => {
      this.setState({ task: e.target.value });
    }

    addTask = (e) => {
      e.preventDefault()

      if(this.state.task.length === 0) {
        console.log(this.refError.current)
        this.refError.current.textContent = '*** Input empty ***'
        return
      } else {
        this.refError.current.textContent = ''
      }

      // add task to REST API
      // -----------------  
      const taskObj = {
        text: this.state.task,
        date: new Date().toLocaleString(),
        done: false,
      }
      fetch('http://localhost:3004/transactions', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },         
        body: JSON.stringify(taskObj)
      })
      .then(() => {
        console.log('Task Added')
        this.setState({ task: '' });
        this.getData()
      })
      .catch((err) => console.log('Task NOT added', err))          
    }

    removeAll = () => {
      this.setState({ tasks:  []  });
    }

    // task const to REST API
    addJSON = () => {
      const taskObj = {
        text: 'New task',
        date: new Date().toLocaleString(),
        done: false,
      }
      fetch('http://localhost:3004/transactions', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },         
        body: JSON.stringify(taskObj)
      })
      .then(() => console.log('Task Added'))
      .catch((err) => console.log('Task NOT added', err))
    }
  
    render() {

      return (
        <ToDoContainer>
          <Title>{this.props.title}</Title> 
            <Tasks className='tasks'>
            {
                this.state.tasks.map(task => (
                    <ToDoItem 
                      key={task.id} 
                      id={task.id}
                      text={task.text} 
                      done={task.done}
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

            <br/>
            <button onClick={this.removeAll}>Remove All tasks</button>

            <br/><br/>
            <button onClick={this.addJSON}>Add task to REST API</button>

     
        </ToDoContainer>
      )
    }
}

export default ToDoList