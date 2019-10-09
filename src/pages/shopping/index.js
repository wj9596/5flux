import React, { Component } from 'react';
import Header from "@components/header"
import { PageContainer } from "@/globalStyled.js"
import { catalist_api, searchCarousel_api, funNav_api, searchSmallCarousel_api } from "@api/shop"
import "./style.css"
import Bscroll from "@common/bscroll"
import Carousels from "@components/carousel";
import ShopContent from "@components/shopContent"
import ShopOthers from "@components/shopOthers"
import BackTop from "@common/backTop"

export default class Shopping extends Component {
    constructor() {
        super();
        this.state = {
            catalist: [],
            activeIndex: 0,
            carImg: [],
            funNav: [],
            smallImg: [],
            id: 0
        }
    }
    render() {
        let { catalist, activeIndex, carImg, funNav, smallImg, id } = this.state;
        return (
            <div>
                <Header />
                <PageContainer>
                    <div className="shopTab">
                        <Bscroll >
                            <ul className="tabWarp">
                                {
                                    catalist.map((item, index) => (
                                        <li className={`tab_list ${index === activeIndex ? 'active' : null}`}
                                            key={index}
                                            onClick={this.handleActive.bind(this, index, item.cata_id)}>
                                            <a className="a-hook">
                                                {item.cata_name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Bscroll>
                    </div>
                    {
                        id === 0 ? <div className="shop-middle">
                            <div className="shop_banner">
                                <Carousels carouselImg={carImg} />
                            </div>
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
                            <Carousels carouselImg={smallImg} />
                            <ShopContent />
                        </div> : <ShopOthers id={id}></ShopOthers>
                    }
                    <BackTop />
                </PageContainer>

            </div>
        )
    }

    handleActive(index, id) {
        this.setState({
            activeIndex: index,
            id: id
        })
    }

    async componentDidMount() {
        let data = await catalist_api();
        let catalist = data.data
        let cardata = await searchCarousel_api();
        let carImg = cardata.data
        let fundata = await funNav_api();
        let funNav = fundata.data.button_list
        let carsmalldata = await searchSmallCarousel_api()
        let smallImg = carsmalldata.data;
        this.setState({
            catalist: catalist,
            carImg: carImg,
            funNav: funNav,
            smallImg: smallImg
        })

    }
}
