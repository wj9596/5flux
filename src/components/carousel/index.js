import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import "./style.css"

export default class Carousels extends Component {
    render() {
        let { carouselImg } = this.props
        return (
            
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {
                        carouselImg.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.slide_thumb} alt={item.slide_title}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'),{ passive: false });
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                        ))
                    }
                </Carousel>
           
        )
    }
}
