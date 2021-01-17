import React, { Component } from 'react'
import {Item} from './ToDoItem.css'
import {REST_API_URL} from '../utiles'
class ToDoItem extends Component {

    static defaultProps = {
        done: false,
    }

    state = {
        done: this.props.done,
    }

    toggleDone = () => {
        // change done in REST API
        fetch(`${REST_API_URL}/${this.props.id}`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },         
            body: JSON.stringify({
                "text": this.props.text,
                "date": new Date().toLocaleString(),
                "done": !this.state.done,
            })
            })
            .then((res) => {
              if(res.ok) {
                this.setState({ done: !this.state.done });
                return res.json()
              }
            })
            .then(data => {
                console.log(data)
                this.props.onGetData()
            })
            .catch((err) => console.log('toggleDone no', err))      
    }

    render() {

        return (
            <div>
            <Item 
                done={this.state.done}
                onClick={this.toggleDone}
            >
                <div>{this.props.text}</div>
                <div>{this.props.date}</div>
            </Item> 
            <button onClick={() => this.props.onDeleteTask(this.props.id)}>DEL</button>           
            </div>

        )
    }
}
export default ToDoItem


