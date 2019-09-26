import React, { Component } from 'react'
import "./style.css"

export default class Carousel extends Component {
    render() {
        return (
            <div id="carousel">
                <ul className="carousel-container">
                    <li>
                        <img src="http://img550.5lux.com.cn/2019/08/20/hi/156629900035_750x825.jpg" alt=""/>
                    </li>
                </ul>
            </div>
        )
    }
}
