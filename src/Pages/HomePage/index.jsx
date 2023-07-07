import React, { Component } from 'react'
import Counter from '../../Components/Counter'
import Counters from '../../mook/counters'

class index extends Component {
    state = {
        counter: Counters


    }




    handelincrees = (counterid) => {
        this.setState((prestate) => {
            return {
                counter: prestate.counter.map((item) => {
                    if (item.id === counterid) {
                        return {
                            ...item,
                            value: item.value + item.amount

                        }

                    }
                    return item
                })


            }
        })

    }
    handeldecrees = (counterid) => {
        this.setState((prestate) => {
            return {
                counter: prestate.counter.map((item) => {
                    if (item.id === counterid && item.value > 0) {
                        return {
                            ...item,
                            value: item.value - item.amount
                        }
                    }
                    return item
                })

            }

        })



    }







    render() {

        const calculateTotal = () => {
            let total = 0;
            this.state.counter.map((item) => {
                total = total + item.value;
            });
            return total;
        };

        return (
            <div>
                {
                    this.state.counter.map((item) => {
                        return (
                            <>
                                <Counter key={item.id}

                                    counternum={item.value > 0 ? item.value : 0}
                                    incrres={() => this.handelincrees(item.id)}
                                    decrees={() => this.handeldecrees(item.id)} />

                            </>
                        )
                    })


                }

                <h1 style={{ textAlign: 'center' }}> Totle : {calculateTotal()}</h1>





            </div>
        )
    }
}

export default index