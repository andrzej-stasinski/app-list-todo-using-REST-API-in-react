import React, { Component } from 'react'
import {Item} from './ToDoItem.css'
class ToDoItem extends Component {
    static defaultProps = {
        done: false,
    }
    state = {
        done: this.props.done,
    }
    toggleDone = () => {
        this.setState({ done: !this.state.done });
        this.props.onToggleTaskDone()
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <Item 
                    // className={this.state.done ? "task doneTask" : 'task'}
                    done={this.state.done}
                    onClick={this.toggleDone}
                >
                    {this.props.text}
                </Item>
            </div>
        )
    }
}
export default ToDoItem


