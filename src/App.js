import React, {Component} from "react";
import './App.css'
import ToDoList from './container/ToDoList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components'
import FormEdit from './components/FormEdit'

const Container = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px blue dotted;
  background-color: #ddd;
`

const App = () => {

    return (

        <Router>
          <Container>
            <Route path='/'><ToDoList /></Route>
            <Route path='/edit'><FormEdit /></Route>
          </Container>          
        </Router>

    );
}

export default App