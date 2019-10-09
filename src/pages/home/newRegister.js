import React, { Component, Fragment } from 'react'
import "./style.css"

export default class NewRegister extends Component {
    render() {
        let { con } = this.props
        return (
            <Fragment>
                {
                    con.map((item, index) => (
                        <div className="new_register" key={index} style={{ display: index === 0 ? 'block' : 'none' }}>
                            
                                <img src={item.ad_code} alt="" />
                         
                            <div className="vip_small">
                                {
                                    con.map((key, idx) => (
                                        <div className="vip_small_list" 
                                             style={{ display: idx === 0 ? 'none' : 'block' }} key={idx}>
                                            <img src={key.ad_code} alt="" />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }
            </Fragment>
        )
    }
}
