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

    deleteTask = () => this.props.onDeleteTask(this.props.id)
    toggleDone = () => this.props.onToggleDone(this.props.id)

    render() {

        return (
            <div>
            <Item 
                done={this.props.done}
                onClick={this.toggleDone}
            >
                <div>{this.props.text}</div>
                <div>{this.props.date}</div>
            </Item> 
            <button onClick={this.deleteTask}>DEL</button>           
            </div>
        )
    }
}
export default ToDoItem


