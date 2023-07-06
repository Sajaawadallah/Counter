import React, { Component } from 'react'
import Counter from '../../Components/Counter'
import Counters from '../../mook/counters'

class index extends Component {
    state = {
        counter: Counters,

    }




    handelincrees = (counterid) => {

        this.setState((state) => {
            state.counter.map((item) => {
                if (item.id === counterid) {
                    return {
                        ...item,
                        value: item.value + 1

                    }

                }
                return item
            })
        })

    }
    handeldecrees = (counterid) => {

        this.setState((state) => {
            state.counter.map((item) => {
                if (item.id === counterid) {
                    return {
                        ...item,
                        value: item.value - 1

                    }

                }
                return item
            })
        })

    }



    render() {

        return (
            <div>
                {
                    this.state.counter.map((item) => {
                        return (
                            <Counter key={item.id} counternum={item.value} incrres={() => { this.handelincrees(item.id) }} decrees={() => { this.handeldecrees(item.id) }} />

                        )
                    })
                }



            </div>
        )
    }
}

export default index