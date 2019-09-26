import React, { Component, Fragment } from 'react'
import Header from "@components/header";
import Carousels from "@components/carousel"
import "./style.css"
import { carsouel_api, funNav_api, adv1_api } from "@api/home";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            carImg: [],
            funNav: [],
            adv1: []
        }
    }
    render() {
        let { carImg, funNav, adv1 } = this.state
        return (
            <Fragment>
                <Header />
                <div className="container">
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
                                        <a href="#">
                                            <img src={item.ad_code} alt={item.ad_name} />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="content">
                        <div className="new_register">

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    async componentDidMount() {
        let carData = await carsouel_api();
        let carImg = carData.data;
        let funData = await funNav_api();
        let funNav = funData.data.list;
        let adv1Data = await adv1_api();
        let adv1 = adv1Data.data
        console.log(adv1Data)
        this.setState({
            carImg: carImg,
            funNav: funNav,
            adv1: adv1
        })

    }
}
