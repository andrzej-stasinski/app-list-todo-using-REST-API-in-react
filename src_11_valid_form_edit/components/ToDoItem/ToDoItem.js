import React, { Component } from 'react'
import {Item, LinkStyled} from './ToDoItem.css'

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
        // console.log(this.props)
        const {id, done} = this.props
        return (
            <div>
                <Item 
                    done={done}
                    onClick={this.toggleDone}
                >
                    <div>{this.props.text}</div>
                    <div>{this.props.date}</div>
                </Item> 
                <button onClick={this.deleteTask} style={{padding: '0 10px'}}>DEL</button> 
                <LinkStyled to={`edit/${id}`}>Edit</LinkStyled>     
            </div>
        )
    }
}
export default ToDoItem


