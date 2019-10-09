import React, { Component, Fragment } from 'react'
import Header from "@components/header";
import Carousels from "@components/carousel";
import NewRegister from "./newRegister"
import "./style.css"
import { PageContainer } from "@/globalStyled.js"
import shangou from "@static/images/shangou.png"
import { carsouel_api, funNav_api, adv1_api, homeCon_api, upLoad_api } from "@api/home";
import Bscroll from "@common/bscroll"
import Content from "./content"

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            carImg: [],
            funNav: [],
            adv1: [],
            content: [],
            newReg: [],
            vip: [],
            five_example: [],
            flash_sales: [],
            page: 1,
            more: []
        }
    }
    render() {
        let { carImg, funNav, adv1, content, newReg, vip, five_example, flash_sales, more } = this.state;
        // console.log(more)
        return (
            <Fragment>
                <Header />
                <PageContainer>
                    <Bscroll ref="bscroll">
                        <div className="content_load">
                            <Carousels carouselImg={carImg} />
                            <div className="fun_nav">
                                <ul className="fun_list">
                                    {
                                        funNav.map((item, index) => (
                                            <li key={index}>
                                                <img src={item.ad_code} alt={item.ad_name} />
                                                <span>{item.ad_name}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="adv1">
                                <ul className="adv1_list">
                                    {
                                        adv1.map((item, index) => (
                                            <li key={index}>

                                                <img src={item.ad_code} alt={item.ad_name} />

                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="content">
                                <Fragment>
                                    <NewRegister con={newReg} />
                                    <NewRegister con={vip} />
                                    <NewRegister con={five_example} />
                                </Fragment>
                                <Content content={content} />
                                {
                                    flash_sales.map((item, index) => (
                                        <div className="shangou" key={index}>
                                            <a href="http://m.5lux.com/promote/special/5013">
                                                <div className="img_warpper">
                                                    <div className="s-flag">
                                                        <img src={shangou} alt="" />
                                                    </div>
                                                    <img className="s-img" src={item.sales_thumb} alt="" />
                                                </div>
                                                <div className="content-warpper">
                                                    <div className="conleft">
                                                        <p className="name_wrapper">
                                                            <span className="top_title">{item.sales_title}</span>
                                                            <span className="zhekou">{item.discount_info} </span></p>
                                                        <p className="detail">{item.sales_desc}</p></div>
                                                    <div className="conright">
                                                        <img className="logo" src={item.sales_logo} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }
                                <Content content={more} />
                            </div>
                        </div>
                    </Bscroll>
                </PageContainer>
            </Fragment>
        )
    }
    async componentDidMount() {
        // 轮播图
        let carData = await carsouel_api();
        let carImg = carData.data;
        // 导航
        let funData = await funNav_api();
        let funNav = funData.data.list;
        // 四张广告图
        let adv1Data = await adv1_api();
        let adv1 = adv1Data.data
        // 内容
        let data = await homeCon_api();
        // 内容列表
        let content = data.data.article_list
        // 新人注册
        let newReg = data.data.new_register;
        // vip尊享
        let vip = data.data.vip_member;
        // 潮流尖货
        let five_example = [];
        five_example.push(data.data.five_example.ads_info);
        let flash_sales = data.data.flash_sales;
        this.setState({
            carImg: carImg,
            funNav: funNav,
            adv1: adv1,
            content: content,
            newReg: newReg,
            vip: vip,
            five_example: five_example,
            flash_sales: flash_sales
        })

        // 上拉加载更多
        this.refs.bscroll.handlepullingUp(async () => {
            let upLoad = await upLoad_api(this.state.page);
            let more = this.state.more;
            more.push(...upLoad.data.ads_info);
            let pages = this.state.page;
            pages++;
            console.log(pages)
            this.refs.bscroll.handlefinishPullUp();
            this.setState({
                more: more,
                page: pages
            })
            // console.log(this.state.page)
        })
    }
}
