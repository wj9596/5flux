import React, { Component } from 'react'
import backWhiteBg from "@static/images/backWhiteBg@2x.png"
import { connect } from "react-redux"
import "./style.css"
import { COUNT_ADD_ACTION, COUNT_REDUCE_ACTION, CHECKED_ACTION, ALLCHECKED_ACTION,DELETE_GOOD_ACTION,ALL_DELETE_ACTION } from "@actions/actionCreator.js"
import { Checkbox } from 'antd-mobile';
import ToShop from "@components/toShopping"

const CheckboxItem = Checkbox.CheckboxItem;


class Cart extends Component {
    constructor() {
        super()
        this.state = {
            isDel: false
        }
    }
    render() {
        let { isDel } = this.state
        let { goodsList,allChecked } = this.props;
        console.log(goodsList)
        let totlePrice = 0
        let totalCount = 0
        return (
            <div className="cart">
                <div className="cart-header">
                    <div className="cart-back" onClick={this.handleBack.bind(this)}>
                        <img src={backWhiteBg} alt="" />
                    </div>
                    <div className="header-title">购物袋</div>
                    {
                        isDel ? 
                        <div className="edit" onClick={this.handleEditGood.bind(this)}>完成</div>
                        :
                        <div className="edit" onClick={this.handleEditGood.bind(this)}>编辑</div>
                    }
                </div>
                <div className="cart-list">
                    <ul className="cartul">
                        {
                            goodsList ? goodsList.map((item, index) => {
                                if (item.flag) {
                                    totlePrice += item.good.product_price * item.count
                                    totalCount += item.count
                                }
                                return (
                                    <li className="cart-listli" key={index}>
                                        <CheckboxItem onClick={this.props.handleChecked.bind(this, index)} checked={item.flag}></CheckboxItem>
                                        <div className="cartImg">
                                            <img src={item.good.big_thumb} alt="" />
                                        </div>
                                        <div className="goodsInfo">
                                            <p className="cartGood-name">{item.good.brand_name}</p>
                                            <p className="cartGood-title">{item.good.title}</p>
                                            <p className="cartGood-color">{item.color}-{item.size}</p>
                                            <p className="cartGood-price">￥{item.good.product_price}</p>
                                            {isDel ?
                                                <div className="delete-good" onClick={this.props.handleDeleteGood.bind(this,index)}>删除</div>
                                                :
                                                <div className="numbtn">
                                                    <span className="reduce left_s" onClick={this.props.handleRedCount.bind(this, index)}>-</span>
                                                    <span className="count">{item.count}</span>
                                                    <span className="add" onClick={this.props.handleAddCount.bind(this, index)}>+</span>
                                                </div>
                                            }
                                        </div>
                                    </li>
                                )
                            }) : <ToShop />
                        }
                    </ul>
                </div>
                <div className="cart-bot">
                    <div className="cart-bot-left">
                        <CheckboxItem onClick={this.props.handleAllChecked.bind(this, 111)} checked={allChecked}>全选</CheckboxItem>
                        <div className="cart-all">
                            <p className="sel_price">合计￥{totlePrice}</p>
                            <p className="sel_num">共计{totalCount}件商品</p>
                        </div>
                    </div>
                    {
                        isDel ? 
                        <div className="btm_right" onClick={this.props.handleAllDelete.bind(this,1)}>删除</div> 
                        :
                        <div className="btm_right">结算（{totalCount}）</div>
                    }
                </div>

            </div>
        )
    }

    handleBack() {
        this.props.history.goBack();
    }

    handleEditGood() {
        this.setState({
            isDel: !this.state.isDel
        })
    }
}

// console.log(JSON.parse(localStorage.getItem("goodsList")))
// 

const mapStateToProps = (state) => ({
    count: state.addcart.count,
    size: state.addcart.size,
    color: state.addcart.color,
    goodsList: state.addcart.goodsList,
    allChecked: state.addcart.allChecked
})


const mapDispatchToProps = (dispatch) => ({
    handleAddCount(index) {
        dispatch(COUNT_ADD_ACTION(index))
    },
    handleRedCount(index) {
        dispatch(COUNT_REDUCE_ACTION(index))
    },
    handleChecked(index) {
        dispatch(CHECKED_ACTION(index))
    },
    handleAllChecked(val) {
        dispatch(ALLCHECKED_ACTION(val))
    },
    handleDeleteGood(index){
        dispatch(DELETE_GOOD_ACTION(index))
    },
    handleAllDelete(val){
        dispatch(ALL_DELETE_ACTION(val));
        this.setState({
            isDel:false
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
