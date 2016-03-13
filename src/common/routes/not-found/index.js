import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

@connect(
    state => ({}),
    dispatch => ({
        ...bindActionCreators({}, dispatch)
    })
)
@immutableRenderDecorator
export default class NotFound extends Component {
    render() {
        return (
            <div>
                404
                <Link to="/">回到首页</Link>
            </div>
        )
    }
}