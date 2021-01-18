import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: black;
    border: 1px solid grey;
    margin-left: 10px;
    padding: 0 10px;
    transition: 0.5s linear color;
    &:hover {
        color: red;
    }
`
class FormEdit extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>FormEdit</h2>
                <h4>params id = {this.props.match.params.id}</h4>
                <br/>
                <LinkStyled to='/'>ToDo List</LinkStyled>
            </div>
        )
    }
}
export default FormEdit