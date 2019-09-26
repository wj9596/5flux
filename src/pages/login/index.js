import React, { Component, Fragment } from 'react'
import './index.css'

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="login-header">
                    <span className="login-header-return"></span>
                    <div className="login-header-text">登录第五大道</div>
                </div>
                <div className="login">
                    <input type="text" placeholder="请输入邮箱/手机号" className="login-text"/>
                    <br/>
                    <input type="password" placeholder="请输入密码"/>
                    <button className="login-button">登录</button>
                    <div className="login-footer">
                        <span>忘记密码？</span>
                        <span>用户注册</span>
                    </div>
                </div>
            </Fragment>
                    )
                }
            }
