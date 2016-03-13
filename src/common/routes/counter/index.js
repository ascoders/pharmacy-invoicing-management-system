import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

@connect(
    state => ({
        counter: state.counter.present
    }),
    dispatch => ({
        ...bindActionCreators(actions, dispatch)
    })
)
@immutableRenderDecorator
export default class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { incrementCounter, decrementCounter, counter } = this.props
        return (
            <div className="posts">
                <h1>Counter</h1>
                <p>This counter is here to show the state is conserved as you navigate through the app.</p>
                <p>
                    <b>Counter: {counter} times</b>
                    <button onClick={incrementCounter}>+</button>
                    <button onClick={decrementCounter}>-</button>
                </p>
            </div>
        )
    }
}