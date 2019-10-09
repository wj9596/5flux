import React, { Component, Fragment } from 'react'
import "./style.css"
import Bscroll from "@common/bscroll";
import {Link} from "react-router-dom"

export default class Content extends Component {
    render() {
        let { content } = this.props
        return (
            <Fragment>
                {
                    content.map((item, index) => (
                        <div className="new_register" key={index}>
                            <img src={item.ads_info ? item.ads_info.ad_code : item.ad_code} alt="" />
                            <div className="artical-warpper">
                                <strong className="name">{item.ads_info ? item.ads_info.ad_name : item.ad_name}</strong>
                                <p className="detail">{item.ads_info ? item.ads_info.ad_title : item.ad_title}</p>
                            </div>
                           
                            <div className="scroll" >
                             <Bscroll>
                                <ul className="scrollul">
                                    {
                                        (item.ads_info?item.ads_info.product_info : item.product_info).map((key, idx) => (
                                            <li key={idx} className="item">
                                                <Link className="jump_warp" to={'/detail/'+key.product_id}>
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
            </Fragment>
        )
    }
}


