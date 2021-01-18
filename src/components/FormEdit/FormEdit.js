import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'
import {LinkStyled} from './FormEdit.css'

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