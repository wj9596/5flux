import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import cart from "@static/images/cart.png";
import search from "@static/images/search.png"
import "./style.css"


export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <NavLink to="/search" className="head-search">
                    <img src={search} alt="1"/>
                    <span>5LUX.COM</span>
                </NavLink>
                <NavLink to="/cart" className="head-cart">
                    <img src={cart} alt=""/>
                </NavLink>
            </div>
        )
    }
}
