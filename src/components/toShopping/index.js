import React, { Component } from 'react'
import big from "@static/images/bigcart.png"

export default class ToShop extends Component {
    render() {
        return (
            <div class="isnulltop">
                <div class="is_img_wps">
                    <img src={big} alt=""/>
                </div>
                <p class="is_name">暂无商品</p>
                <p class="is_detail">您的金袋子空了，快让他变奢侈吧~</p>
                <p class="is_go">
                    去奢侈
                </p>
            </div>
        )
    }
}
