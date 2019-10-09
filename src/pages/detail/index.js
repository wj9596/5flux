import React, { Component, Fragment } from 'react'
import { goodsDetail_api, detail_api, detailCarousel_api } from "@api/detail";
import Carousel from "@components/carousel"
import BackTop from "@common/backTop"
import "./style.css"
import back from "@static/images/back.png";
import global from "@static/images/global.png";
import more from "@static/images/more.png";
import Loading from "@common/loading"
import YouLike from "./youLike"
import AddCart from "./addCart/index"


export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            goodDetail: {},
            carImg: [],
            bool: false,
            youLike: {},
            num: 1,
            good: {}
        }
    }
    render() {
        let { goodDetail, carImg, bool, youLike, num, good } = this.state
        if (!bool) {
            return (
                <Loading />
            )
        } else {
            return (
                <Fragment>
                    <div className="detail">
                        <div className="banner">
                            <div className="back" onClick={this.handleBack.bind(this)}>
                                <img src={back} alt="" className="back_img" />
                            </div>
                            <Carousel goods={goodDetail.goods_gallery} />
                            <div className="banner_bottom"></div>
                        </div>
                        <div className="extrawarpper">
                            <div className="extra">
                                <div className="price">￥{goodDetail.goods_info.product_price}</div>
                                <div className="oldprice">￥{goodDetail.goods_info.good_price}</div>
                                <div className="note">
                                    <span>红卡价</span>
                                    <span className="fight"></span>
                                </div>
                            </div>
                            <div className="tax border-1px">税费说明 </div>
                        </div>

                        <div className="tittlewarpper">
                            <div className="introduce"> {goodDetail.goods_info.sku_title}</div>
                            <div className="recommend">
                                <span className="type">[{goodDetail.editor_recommend.ad_type}]</span>
                                <span className="typetext">{goodDetail.editor_recommend.ad_name}</span>
                            </div>
                            <div className="pre">
                                <div className="global">
                                    <img src={global} alt="" />
                                </div>
                                <span className="cont">{goodDetail.goods_info.send_time_name}</span>
                                <span className="underline">{goodDetail.goods_info.send_store}</span>
                            </div>
                        </div>

                        <div className="argborder">
                            <div className="list border-1px">
                                <span className="list_left">产品参数</span>
                                <div className="list_right">
                                    <img src={more} alt="" />
                                </div>
                            </div>
                            <div className="list border-1px">
                                <span className="list_left">
                                    <span>选择：颜色/尺码</span>
                                </span>
                                <div className="list_right">
                                    <img src={more} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="detailCarousel">
                            <Carousel detailCar={carImg} />
                        </div>

                        <div className="goodsDetail">
                            <div className="common-titles">
                                <div className="line">
                                    <div className="text">商品详情</div>
                                </div>
                            </div>
                            <ul className="goods_detail_img_text">
                                {
                                    goodDetail.goods_gallery.map((item, index) => (
                                        <li className="goods_desc_li" key={index}>
                                            <img src={item.filepath} alt="" />
                                        </li>
                                    ))
                                }
                                <img src={goodDetail.cata_thumb_new[0]} alt="" />
                            </ul>
                        </div>

                        <div className="detailGoods list-hook">
                            <div className="title">
                                <span className="like nosel"
                                    onClick={this.handleChangeLike.bind(this, 1)}
                                    style={{ color: num === 1 ? '#000' : '#999' }}>猜你喜欢</span>
                                <span className="like"
                                    onClick={this.handleChangeLike.bind(this, 2)}
                                    style={{ color: num === 2 ? '#000' : '#999' }}>精品推荐</span>
                            </div>
                            {
                                num === 1 ? <YouLike likeRem={youLike.you_like} /> : <YouLike likeRem={youLike.recommend} />
                            }
                        </div>

                        <BackTop />
                    </div>
                    <AddCart good={good} />
                </Fragment>
            )
        }
    }

    handleChangeLike(idx) {
        this.setState({
            num: idx
        })
    }

    

    async componentDidMount() {
        // 商品详情
        let goodDetail = await goodsDetail_api(this.props.match.params.product_id);
        let bool;
        if (goodDetail) {
            bool = true;
        }
        console.log(goodDetail.data)
        // 中间轮播
        let detailCarousel = await detailCarousel_api(this.props.match.params.product_id, goodDetail.data.goods_info.brand_id, goodDetail.data.goods_info.cata_id)
        let carImg = detailCarousel.data.banner_adv_info;
        // 猜你喜欢
        let youLike = await detail_api(this.props.match.params.product_id);
        // 购物车底部弹出内容
        let good = { ...goodDetail.data.goods_info, ...goodDetail.data.sku };
        this.setState({
            goodDetail: goodDetail.data,
            carImg: carImg,
            bool: bool,
            youLike: youLike.data,
            good: good
        })

    }

    handleBack() {
        this.props.history.goBack();
    }
}
