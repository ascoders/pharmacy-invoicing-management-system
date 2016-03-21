import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './action'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'

import './index.scss'

@connect(
    state => ({}),
    dispatch => ({
        ...bindActionCreators(actions, dispatch)
    })
)
@immutableRenderDecorator
class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="_namespace">
                欢迎光临药店进销存管理系统
            </div>
        )
    }
}

export default Home