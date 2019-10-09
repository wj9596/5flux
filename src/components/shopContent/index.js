import React, { Component } from 'react'
import { shopContent_api } from "@api/shop"
import "./style.css"
import ShopCont from "@components/shopCon"
import Loading from "@common/loading"
import Bscroll from "@common/bscroll";
import {Link} from "react-router-dom"

export default class ShopContent extends Component {
    constructor() {
        super();
        this.state = {
            content: {}
        }
    }
    render() {
        let { content } = this.state
        console.log(content)
        if (!content.star_outfits) {
            return (
                <Loading />
            )

        } else {
            return (
                <div className="shopContent">
                    <ShopCont fashion_video={content.fashion_video} />
                    <div className="com_warp">
                        <div className="com_title">
                            <p className="name">{content.star_outfits.title}</p>
                            <p className="en_name">
                                <span className="line">
                                    <span className="text">{content.star_outfits.title_en}</span>
                                </span>
                            </p>
                        </div>
                        <div className="adv_fir">
                            <img src={content.star_outfits.list.ad_code} alt />
                            <p className="com_text_menu">{content.star_outfits.list.ad_name}</p>
                        </div>
                    </div>
                    <ShopCont fashion_video={content.oversea_recommend} />
                    <ShopCont fashion_video={content.vip_special} />
                    <ShopCont fashion_video={content.new_recommend} />
                    <div className="com_warp">
                        <div className="com_title">
                            <p className="name">{content.star_outfits.title}</p>
                            <p className="en_name">
                                <span className="line">
                                    <span className="text">{content.star_outfits.title_en}</span>
                                </span>
                            </p>
                        </div>
                        {
                            content.top5flag.list.map((item, index) => (
                                <div className="adv_fir" key={index}>
                                    <img src={item.ad_code} alt />
                                    <p className="com_text_menu">{item.ad_name}</p>
                                </div>
                            ))
                        }

                        {
                            content.fashion_guide.list.map((item, index) => (
                                <div className="new_register" key={index}>
                                    <img src={item.ad_top.ad_code} alt="" />
                                    <div className="scroll" >
                                        <Bscroll>
                                            <ul className="scrollul">
                                                {
                                                    item.product_info.map((key, idx) => (
                                                        <li key={idx} className="item">
                                                            <Link className="jump_warp" to={'/detail/' + key.product_id}>
                                                                <div className="img">
                                                                    <img className="img-hook" src={key.product_thumb} alt="" />
                                                                </div>
                                                                <p className="name">{key.ad_subtitle}</p>
                                                                <p className="price">{key.ad_title}</p>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </Bscroll>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

            )
        }
    }

    async componentDidMount() {
        let data = await shopContent_api();
        let content = data.data
        this.setState({
            content: content
        })

    }
}
