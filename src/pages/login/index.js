import React, { Component ,Fragment} from 'react'
import './index.css'

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="login-header">
                    <span className="login-header-return"></span>
                    <div className="login-header-text">登录第五大道</div>
                </div>  
            </Fragment>
        )
    }
}
