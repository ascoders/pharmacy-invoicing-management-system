import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

import { Link } from 'react-router'

@connect(
    state => {
        let { home } = state

        return {
            lists: home.lists || [],
            isFetching: true,
            lastUpdated: null,
            error: {}
        }
    },
    dispatch => ({
        ...bindActionCreators(actions, dispatch)
    })
)
@immutableRenderDecorator
class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchListsIfNeeded()
    }

    render() {
        const { lists } = this.props

        const Lists = lists.map((item, index) => {
            return (
                <div key={index}>{item.author}</div>
            )
        })

        return (
            <div>
                {Lists}
                <Link to="/counter">counter</Link>
            </div>
        )
    }
}

Home.need = [
    actions.fetchLists
]

export default Home