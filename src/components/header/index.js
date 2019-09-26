import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import cart from "@static/images/cart.png";
import search from "@static/images/search.png"
import "./style.css"


export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="head-search">
                    <img src={search} />
                    <span>5FLUX.COM</span>
                </div>
                <div className="head-cart">
                    <img src={cart} alt=""/>
                </div>
            </div>
        )
    }
}
