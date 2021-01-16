import React, {Component} from "react";
import './App.css'

class ToDoList extends Component {
  render() {
    console.log(this.props)
    return (
      <h2>{this.props.title}</h2>
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