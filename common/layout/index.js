import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './action'

import {Layout, Header, Sidebar, Section} from 'fit-layout-global'
import {Menu, SubMenu, MenuItem} from 'fit-menu'

@connect(
    state => ({}),
    dispatch => ({
        ...bindActionCreators(actions, dispatch)
    })
)
export default class LayoutComponent extends Component {
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
            <Layout>
                <Header height="45">
                    <Menu inverse>
                        <MenuItem brand
                                  to="/"
                                  style={{width:200}}>药店进销存管理系统</MenuItem>
                        <MenuItem to="/add">药品入库</MenuItem>
                        <MenuItem to="/sell">药品销售</MenuItem>
                    </Menu>
                </Header>
                <Sidebar width="150">
                    <Menu inverse
                          vertical>
                        <MenuItem to="/search">库存查询</MenuItem>
                    </Menu>
                </Sidebar>
                <Section>{this.props.children}</Section>
            </Layout>
        )
    }
}