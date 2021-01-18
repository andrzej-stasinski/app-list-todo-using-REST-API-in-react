import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
export default class NotFound extends Component {
    state = {
        counter: 10,
        interval: null,
    }
    countDown = () => {
        console.log(this.state.counter)
        this.setState({ counter: this.state.counter - 1 });
    }
    componentDidMount() {
        const intervalId = setInterval(this.countDown, 1000)
        this.setState({ interval: intervalId });
    }
    componentWillUnmount() {
        'componentWillUnmount'
        clearInterval(this.state.interval)
    }
    render() {

        return (
            <div>
                <h2>Page - Not Found</h2>
                <h4>Route match not found - {this.props.location.pathname} </h4>
                <h4>Countdown to redirection: {this.state.counter} seconds</h4>
                {this.state.counter < 0 && <Redirect to='/' />}
                
            </div>
        )
    }
}
