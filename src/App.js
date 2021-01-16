import React, {Component} from "react";
import './App.css'

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
    console.log(this.state.tasks)
    return (
      <div>
        <h2>{this.props.title}</h2> 
        {
          this.state.tasks.map(task => (
            <div key={task.text}>{task.text}</div>
          ))
        }
        <input type='text' value={this.state.task} onChange={this.handleInput} /> 
        <button onClick={this.addTask}>Add</button>      
      </div>
    )
  }
}

const App = () => {

    return (
        <div className="App">
          <ToDoList title='My ToDo List' />
        </div>
    );
}

export default App