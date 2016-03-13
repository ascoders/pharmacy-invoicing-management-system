import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

import { Link } from 'react-router'

@connect(
    state => {
        let { selectedReddit, postsByReddit } = state
        selectedReddit = selectedReddit.present
        postsByReddit = postsByReddit.present
        const {
            isFetching,
            lastUpdated,
            error,
            items: posts
            } = postsByReddit[selectedReddit] || {
            isFetching: true,
            error: {},
            items: []
        }

        return {
            selectedReddit,
            posts,
            isFetching,
            lastUpdated,
            error
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
        const { selectedReddit } = this.props
        this.props.fetchPostsIfNeeded(selectedReddit)
    }

    render() {
        const { posts } = this.props

        const Posts = posts.map((item, index) => {
            return (
                <div key={index}>{item.author}</div>
            )
        })

        return (
            <div>
                {Posts}
                <Link to="/counter">counter</Link>
            </div>
        )
    }
}

Home.need = [
    actions.fetchPosts
]

export default Home