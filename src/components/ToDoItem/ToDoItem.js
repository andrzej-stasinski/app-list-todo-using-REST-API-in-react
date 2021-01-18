import React, { Component } from 'react'
import {Item, LinkStyled} from './ToDoItem.css'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'

// const LinkStyled = styled(Link)`
//     text-decoration: none;
//     color: black;
//     border: 1px solid grey;
//     margin-left: 10px;
//     padding: 0 10px;
//     transition: 0.5s linear color;
//     &:hover {
//         color: red;
//     }
// `

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


