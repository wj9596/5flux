import React, { Component } from 'react'
import './style.css'


export default class YouLike extends Component {
    render() {
        let { likeRem } = this.props;
            return (
                <div className="youlike">
                    <ul className="listwarpper">
                        {
                            likeRem.map((item, index) => (
                                <li className="list" key={index}>
                                    <a >
                                        <span className="imgwarpper">
                                            <div className="img">
                                                <img src={item.thumb}
                                                    className="info-hook" />
                                            </div>
                                        </span>
                                        <p className="name">{item.brand_name}</p>
                                        <p className="price">￥{item.product_price}</p>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            )
    
    }
}
