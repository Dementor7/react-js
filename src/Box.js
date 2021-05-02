import React,{Component } from 'react'
import './Box.css'

export default class Box extends Component {
    state = { count: 0 }
    increment = () => this.setState({ count: this.state.count + 1 })
    decrement = () => this.setState({ count: this.state.count - 1 })
    
    render() {
        return (
        <div className='box'>
        <h2> Counter </h2>
        <h1>{this.state.count}</h1>
        <button className="incr" onClick={this.increment}>+</button>
        <button className="decr" onClick={this.decrement}>-</button>

        </div>
        );
    }
}



