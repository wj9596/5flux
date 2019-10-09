import React, { Component,Fragment } from 'react'
import { Carousel } from 'antd-mobile';
import "./style.css"
import { Link } from "react-router-dom"
import connect from "./connect";



@connect
class Carousels extends Component {
    render() {
        let { carouselImg, goods,detailCar } = this.props
        return (
            <Carousel
                autoplay={true}
                infinite
            >
                {
                    (carouselImg || goods || detailCar || []).map((item, index) => (
                        <Fragment key={index}>
                            <img
                                src={item.slide_thumb || item.filepath || item.silde_original || item.img_url} alt={item.slide_title ? item.slide_title : null}
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'), { passive: false });
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </Fragment>


                    ))
                }
            </Carousel>
        )
    }
}

export default Carousels

// <Link to={'/special/' + item.slide_url.split('/')[5]} key={index}></Link>