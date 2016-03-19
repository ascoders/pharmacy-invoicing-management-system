import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { Link } from 'react-router'

import Button from 'fit-button'
import { Select, Option } from 'fit-select'

import './index.scss'

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
            <div className="_namespace">
                {Lists}
                <Button type="primary">按钮</Button>

                <Select width="300"
                        value="b">
                    <Option value="a">小明</Option>
                    <Option value="b">小红</Option>
                    <Option value="c">小白</Option>
                    <Option value="d">小王</Option>
                    <Option value="e">小李</Option>
                    <Option value="f">小刚</Option>
                </Select>

                <Link to="/counter">jump to counter</Link>
            </div>
        )
    }
}

Home.need = [
    actions.fetchLists
]

export default Home