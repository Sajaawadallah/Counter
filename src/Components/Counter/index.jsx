import React, { Component } from 'react'
import './style.css'

class index extends Component {

    render() {
        return (
            <div className='flex-counter'>
                <button className='increesbntn' onClick={this.props.incrres}>+</button>
                <h1>{this.props.counternum}</h1>
                <button className='decreesbntn' onClick={this.props.decrees}>-</button>

            </div>

        )
    }
}

export default index
