import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'

import './index.scss'
import Table from 'fit-table'
import tableInfo from './table-info'

@connect(
    state => ({
        state: state.search
    }),
    dispatch => (
        bindActionCreators({}, dispatch)
    )
)
@immutableRenderDecorator
export default class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {state} = this.props

        return (
            <div className="_namespace">
                <Table ref="table" {...tableInfo}/>
            </div>
        )
    }
}