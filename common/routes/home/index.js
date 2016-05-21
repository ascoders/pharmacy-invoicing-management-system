import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './action'
import Input from 'fit-input'
import {Button} from 'fit-button'
import request from 'axios'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'
import {store} from 'redux'

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
        this.state = {
            isLogin: false
        }
    }

    componentWillMount() {
        request.get('/api/is-login', {}).then((res)=> {
            if (res.data) {
                this.setState({
                    isLogin: true
                })
            }
        })
    }

    handleLogin() {
        request.get('/api/login', {}).then((res)=> {
            this.setState({
                isLogin: true
            })
        })
    }

    handleSignOut() {
        request.get('/api/sign-out', {}).then((res)=> {
            this.setState({
                isLogin: false
            })
        })
    }

    render() {
        return (
            <div className="_namespace">
                欢迎光临药店进销存管理系统
                {!this.state.isLogin ?
                    <div>
                        <div className="login"
                             style={{marginTop:20,display:'flex'}}>
                            <Input label="帐号"
                                   style={{marginRight:10}}/>
                            <Input label="密码"/>
                        </div>
                        <Button onClick={this.handleLogin.bind(this)}>登录</Button>
                    </div>
                    :
                    <div><Button onClick={this.handleSignOut.bind(this)}>退出</Button></div>
                }
            </div>
        )
    }
}

export default Home