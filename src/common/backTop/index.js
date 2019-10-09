import React, { Component } from 'react'
import top from "@static/images/top.png"
import "./style.css"

export default class BackTop extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    render() {
        let { show } = this.state
        return (
            <div className="back-top">
                {
                    show &&
                    <img onClick={this.goTo} src={top} alt="" />
                }
            </div>
        )
    }

    // 跳到顶部
    goTo(){
        let scrollToTop = window.setInterval(function() {
          let pos = window.pageYOffset;
          if ( pos > 0 ) {
              window.scrollTo( 0, pos - 100 ); // how far to scroll on each step
          } else {
              window.clearInterval( scrollToTop );
          }
      }, 2);
      }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 500) {
                this.setState({
                    show: true
                })
            } else {
                this.setState({
                    show: false
                })
            }
        })
    }
}
