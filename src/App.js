import React, {Component} from "react";
import ToDoList from './container/ToDoList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FormEdit from './components/FormEdit/FormEdit'
import NotFound from './components/NotFound'
import {Container} from './App.css'

const App = () => {
    console.log(process.env.REACT_APP_REST_API)
    return (

        <Router>
          <Container>
            <Switch>
              {/* <Route exact path='/'><ToDoList /></Route> */}
              <Route exact path='/app-list-todo-using-REST-API-in-react/' component={ToDoList} />

              {/* nie ma props */}
              {/* <Route path='/edit'><FormEdit /></Route> */}
              {/* ma props  */}
              <Route path='/app-list-todo-using-REST-API-in-react/edit/:id' component={FormEdit} />

              {/* <Route><NotFound /></Route>               */}
              <Route component={NotFound} />              
            </Switch>
          </Container>          
        </Router>

    );
}

export default App