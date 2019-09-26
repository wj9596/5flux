import React, { Component,Fragment} from 'react'
import Header from "@components/header";
import Carousel from "@components/carousel"
import "./style.css"
import {home_api} from "@api/home";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <Carousel/>
                    <div className="fun_nav">
                        <ul className="fun_list">
                            <li>
                                <img src="http://img540.5lux.com.cn/2016/08/31/ij/147263296079_50x50.png" alt=""/>
                                <span>上新</span>
                            </li>
                            <li>
                                <img src="http://img540.5lux.com.cn/2016/08/31/ij/147263296079_50x50.png" alt=""/>
                                <span>上新</span>
                            </li>
                            <li>
                                <img src="http://img540.5lux.com.cn/2016/08/31/ij/147263296079_50x50.png" alt=""/>
                                <span>上新</span>
                            </li>
                            <li>
                                <img src="http://img540.5lux.com.cn/2016/08/31/ij/147263296079_50x50.png" alt=""/>
                                <span>上新</span>
                            </li>
                            <li>
                                <img src="http://img540.5lux.com.cn/2016/08/31/ij/147263296079_50x50.png" alt=""/>
                                <span>上新</span>
                            </li>
                        </ul>
                    </div>
                    <div className="adv1">
                        <ul className="adv1_list">
                            <li>
                                <a href="#">
                                    <img src="http://img550.5lux.com.cn/2019/07/04/hi/156221175711_368x260.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="http://img550.5lux.com.cn/2019/07/04/hi/156221175711_368x260.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="http://img550.5lux.com.cn/2019/07/04/hi/156221175711_368x260.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="http://img550.5lux.com.cn/2019/07/04/hi/156221175711_368x260.jpg" alt=""/>
                                </a>
                            </li>
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
    async componentDidMount(){
        let data = await home_api();
        console.log(data);
    }
}
