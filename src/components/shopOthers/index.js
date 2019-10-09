import React, { Component } from 'react'
import { shopOtherTopImg_api, shopOtherImg_api } from "@api/shop"
import "./style.css"
import { Link } from "react-router-dom"

export default class ShopOthers extends Component {
    constructor() {
        super();
        this.state = {
            topImg: [],
            images: []
        }
    }
    render() {
        let { topImg, images } = this.state
        return (
            <div className="shopother">
                <div className="banner">
                    {
                        topImg.map((item, index) => (
                            <img key={index} src={item.ad_code} alt="" />
                        ))
                    }
                </div>
                <div className="goods_list">
                    <ul className="goods_list_warpper">
                        {
                            images.map((item, index) => (
                                <li className="goodsli" key={index}>
                                    <Link to={'/detail/' + item.product_id}>
                                        <div className="imgwarpper">
                                            <div className="img">
                                                <img src={item.big_thumb} alt />
                                            </div>
                                        </div>
                                        <div className="list_con">
                                            <p className="en_name">{item.brand_enname}</p>
                                            <p className="name">{item.brand_cnname}</p>
                                            <div className="price_warpper">
                                                <span className="price">￥{item.product_price}</span>
                                                <span className="old_price">￥{item.market_price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        let { id } = this.props
        console.log(id)
        let data = await shopOtherTopImg_api(id);
        let images = await shopOtherImg_api(id);
        console.log(images)
        this.setState({
            topImg: data.data.ads_list,
            images: images.data.goods_list
        })
    }
}
