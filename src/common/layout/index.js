import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'

@connect(
    state => ({}),
    dispatch => ({
        ...bindActionCreators({}, dispatch)
    })
)
export default class Layout extends Component {
    constructor(props) {
        super(props)
    }

    eventUndo(e) {
        e.preventDefault()
        this.props.undo()
    }

    eventRedo(e) {
        e.preventDefault()
        this.props.redo()
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}