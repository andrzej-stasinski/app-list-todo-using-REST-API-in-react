import React, {Component} from "react";
import './App.css'
import ToDoList from './ToDoList'


const App = () => {

    return (
        <div className="App">
          <ToDoList title='My ToDo List' />
        </div>
    );
}

export default App