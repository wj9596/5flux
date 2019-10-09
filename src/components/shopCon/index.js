import React, { Component } from 'react'
import "./style.css"
import Loading from "@common/loading"

export default class ShopCont extends Component {
    render() {
        let { fashion_video } = this.props
        if (!fashion_video) {
            return (
                <Loading />
            )

        } else {
            return (
                <div className="com_warp">
                    <div className="com_title">
                        <p className="name">{fashion_video.title}</p>
                        <p className="en_name">
                            <span className="line">
                                <span className="text">{fashion_video.title_en}</span>
                            </span>
                        </p>
                    </div>
                    <div className="adv_fir">
                        <img src={fashion_video.list[2].ad_code}  alt />
                        <p className="com_text_menu">{fashion_video.list[2].ad_name}</p>
                    </div>
                    <ul className="adv_sec">
                        {
                            fashion_video.list.slice(0, 2).map((item, index) => (
                                <li className="adv_list" key={index}>
                                    <img src={item.ad_code} alt />
                                    <p className="com_text_list">{item.ad_name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    }
}
