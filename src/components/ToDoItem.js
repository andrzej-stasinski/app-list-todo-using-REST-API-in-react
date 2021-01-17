import React, { Component } from 'react'

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
                <div 
                    className={this.state.done ? "task doneTask" : 'task'}
                    onClick={this.toggleDone}
                >
                    {this.props.text}
                </div>
            </div>
        )
    }
}
export default ToDoItem


