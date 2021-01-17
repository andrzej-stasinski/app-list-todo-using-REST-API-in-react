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
        // change done in REST API
        fetch(`http://localhost:3004/transactions/${this.props.id}`, {
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
              console.log('toggleDone ok')
              console.log(res)
              if(res.ok) {
                this.setState({ done: !this.state.done });
                return res.json()
              }
            })
            .then(data => console.log(data))
            .catch((err) => console.log('toggleDone no', err))      
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Item 
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


