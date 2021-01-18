import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Page - Not Found</h2>
                <h4>Route match not found - {this.props.location.pathname} </h4>
            </div>
        )
    }
}
