import React, { Component,Fragment} from 'react'
import TabBar from "@common/tabBar/index.js"
export default class Layout extends Component {
    render() {
        let flag = this.props.meta.flag
        console.log(this.props)
        return (
            <Fragment>
                    {this.props.children}
                    {flag?<TabBar/>:""}
            </Fragment>
        )
    }
}

/*
在React中组件当做标签使用的时候，如果在组件标签内部嵌套一些元素或者标签的时候如何进行显示？
    this.props.children ： 插槽作用域


*/