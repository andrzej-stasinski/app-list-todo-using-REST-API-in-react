import React, { Component, createRef } from 'react';
import ToDoItem from '../components/ToDoItem'
import FormToDo from '../components/FormToDo'
import {ToDoContainer, Title, Tasks, ErrorDiv} from './ToDoList.css'
import {REST_API_URL} from '../utiles'

class ToDoList extends Component {

    state = {
      tasks: [],
      task: '',
    }

    getData = async () => {   
      const resp = await fetch(REST_API_URL)
      console.log(resp)
      const data = await resp.json()
      console.log(data)
      this.setState({ tasks: data });
    }

    componentDidMount() {
      this.getData()
    }
  
    refError = createRef()

    handleInput = (e) => {
      this.setState({ task: e.target.value });
    }

    addTask = async (e) => {
      e.preventDefault()

      if(this.state.task.length === 0) {
        console.log(this.refError.current)
        this.refError.current.textContent = '*** Input empty ***'
        return
      } else {
        this.refError.current.textContent = ''
      } 
      
      const taskObj = {
        text: this.state.task,
        date: new Date().toLocaleString(),
        done: false,
      }
      const resp = await fetch(REST_API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },         
        body: JSON.stringify(taskObj)
      })
      const data = await resp.json()
      console.log(data)
      this.setState({ 
        tasks: [...this.state.tasks, data],
        task: '',
      })          
    }

    deleteTask = async (id) => {
      console.log('deleteTask', id)
      const resp = await fetch(`${REST_API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },         
      })
      const data = await resp.json()
      console.log(data)
      this.getData()      
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
                      date={task.date}
                      onGetData={this.getData}
                      onDeleteTask={this.deleteTask}
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