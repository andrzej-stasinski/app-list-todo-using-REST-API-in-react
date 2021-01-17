import React, {Component} from "react";
import './App.css'
import ToDoList from './container/ToDoList'


const App = () => {

    return (
        <div className="App">
          <ToDoList title='My ToDo List' />
        </div>
    );
}

export default App