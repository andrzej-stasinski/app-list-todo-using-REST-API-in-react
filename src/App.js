import React, {Component} from "react";
import ToDoList from './container/ToDoList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FormEdit from './components/FormEdit'
import NotFound from './components/NotFound'
import {Container} from './App.css'

const App = () => {

    return (

        <Router>
          <Container>
            <Switch>
              <Route exact path='/'><ToDoList /></Route>
              {/* <Route exact path='/' component={ToDoList} /> */}

              {/* nie ma props */}
              {/* <Route path='/edit'><FormEdit /></Route> */}
              {/* ma props  */}
              <Route path='/edit/:id' component={FormEdit} />

              {/* <Route><NotFound /></Route>               */}
              <Route component={NotFound} />              
            </Switch>
          </Container>          
        </Router>

    );
}

export default App