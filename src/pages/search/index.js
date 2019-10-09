import React, { Component } from 'react'
import { connect } from "react-redux"
import search from "@static/images/serch-header.png"
import "./style.css"
import { searchRecommd_api } from "@api/search"
import Loading from "@common/loading"
import SearchResult from "@components/searchResult"
import { SEARCH_INPUT_ASYNC_ACTION } from "@actions/actionCreator.js"



class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchList: {},
            bool: false
        }
    }
    render() {
        let { searchList, bool } = this.state;
        let { searchInput } = this.props;
        console.log(searchInput)
        if (!bool) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className="search">
                    <div className="search-header">
                        <div className="search-right">
                            <div className="search-logo">
                                <img src={search} alt="" />
                            </div>
                            <input type="text" placeholder={searchList.search_keyword} value={searchInput} onChange={this.props.handleSearchInput.bind(this)} />
                        </div>
                        <div className="cancle" onClick={this.handleBack.bind(this)}>取消</div>
                    </div>
                    {
                        !searchInput ? <div className="search-content">
                            <div className="hotsearch">
                                <div className="hot_title">热门搜索</div>
                                <ul className="hot_con">
                                    {
                                        searchList.hot_search.map((item, index) => (
                                            <li className="hotlist" key={index}>
                                                <a href="javascript:;">{item.keyword}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="searchRec">
                                <div className="rectitle">
                                    <div className="line"></div>
                                    <div className="text">为您推荐</div>
                                    <div className="line"></div>
                                </div>
                                <ul className="searchrec_con">
                                    {
                                        searchList.recommend_products.map((item, index) => (
                                            <li className="searchrec_list" key={index}>
                                                <a>
                                                    <div className="rec_img">
                                                        <div className="img">
                                                            <img src={item.product_thumb} />
                                                        </div>
                                                    </div>
                                                    <p className="searchrec_desc">{item.product_name}</p>
                                                    <p className="searchrec_price">￥{item.product_price}</p>
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div> : <SearchResult />
                    }



                </div>
            )
        }
    }
    handleBack() {
        this.props.history.goBack();
    }

    async componentDidMount() {
        let data = await searchRecommd_api();
        let bool
        if (data.data) {
            bool = true;
        }
        console.log(data.data)
        this.setState({
            searchList: data.data,
            bool: bool
        })
    }
}

const mapStateToProps = (state) => ({
    searchInput: state.search.searchInput
})


const mapDispatchToProps = (dispatch) => ({
    handleSearchInput(e) {
        let val = e.target.value;
        dispatch(SEARCH_INPUT_ASYNC_ACTION(val))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)
