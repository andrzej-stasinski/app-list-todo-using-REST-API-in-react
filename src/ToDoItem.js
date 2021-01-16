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
    }
    render() {
        return (
            <div>
                <div 
                    className={this.state.done ? "doneTask" : ''}
                    onClick={this.toggleDone}
                >
                    {this.props.text}
                </div>
            </div>
        )
    }
}
export default ToDoItem


