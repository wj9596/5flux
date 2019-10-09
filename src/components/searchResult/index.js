import React, { Component } from 'react'
import { connect } from "react-redux"
import searchShop from "@static/images/searchShop.png"
import "./style.css"
import Loading from "@common/loading"
import Bscroll from "@common/bscroll"

class SearchResult extends Component {
    render() {
        let { searchInput, searchResult, flag } = this.props;
        console.log(searchInput, searchResult)
        if (!flag) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className="search-result">
                    <Bscroll >
                        <ul className="sec_result">
                            {
                                searchResult.store_info.map((item, index) => (
                                    <li className="sec_stor border-1px" key={index}>
                                        <div className="sec_list">
                                            <a href="http://m.5lux.com/store/list?keywords=a" className="link">
                                                <div className="link-left">
                                                    <span className="sec_logo">
                                                        <img src={searchShop} alt="" />
                                                    </span>
                                                    <div className="sec_text">搜索“{searchInput}”相关专柜</div>
                                                </div>
                                                <div className="jump">约{item.store_total}家店 <span className=""></span></div>
                                            </a></div>
                                    </li>
                                ))
                            }

                            <ul>
                                {
                                    searchResult.other_info.map((item, index) => (
                                        <li className="sec_list border-1px" key={index}>
                                            <a href="javascript:;" className="link">
                                                <div className="sec_text">{item.label}</div>
                                                <div className="jump">约{item.total}件商品</div>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </ul>
                    </Bscroll>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    searchInput: state.search.searchInput,
    searchResult: state.search.searchResult,
    flag: state.search.flag,
})


const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
