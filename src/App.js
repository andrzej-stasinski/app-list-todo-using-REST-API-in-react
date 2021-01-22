import React, {Component} from "react";
import ToDoList from './container/ToDoList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FormEdit from './components/FormEdit/FormEdit'
import NotFound from './components/NotFound'
import {Container} from './App.css'

const App = () => {

  return (

        <Router>
          <Container>
            <Switch>
              <Route exact path='/' component={ToDoList} />

              <Route path='/edit/:id' component={FormEdit} />
              <Route component={NotFound} />              
            </Switch>
          </Container>          
        </Router>

    );
}

export default App