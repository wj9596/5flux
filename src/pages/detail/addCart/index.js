import React, { Component } from 'react'
import { connect } from "react-redux"
// import { ActionSheet, WhiteSpace } from 'antd-mobile';
import { Modal, Button, WhiteSpace } from 'antd-mobile';
import server from "@static/images/server.png";
import cart from "@static/images/cart1.png";
import { AddCartWrapper } from "./styled";
import { Link } from "react-router-dom"
import "../style.css"
import { INPUT_COUNT_ACTION, SIZE_ACTION, COLOR_ACTION, ADD_GOOD_ACTION, COUNT_ADD_GOOD_ACTION, COUNT_REDUCE_GOOD_ACTION } from "@actions/actionCreator.js"



class AddCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal2: false
        };

    }

    componentDidMount() {
        this.props.HandleChangeColor(this.props.good.all[0].attr_val[0]?this.props.good.all[0].attr_val[0].attr_value:null,0);
        this.props.HandleChangeSize(this.props.good.all[1].attr_val[0]?this.props.good.all[1].attr_val[0].attr_value:null,0)
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        console.log(111)
        this.setState({
            [key]: false,
        });
    }


    render() {
        let { good, size, color, count, colorIndex, sizeIndex } = this.props;
        return (
            <AddCartWrapper>
                <span className="lg">
                    <span className="logo1">
                        <img src={server} alt="" />
                    </span>
                    <span className="text1">客服</span>
                </span>
                <Link to={'/cart'}>
                    <span className="lg">
                        <span className="logo1">
                            <img src={cart} alt="" />
                        </span>
                        <span className="text1">购物袋</span>
                    </span>
                </Link>
                <Button className="span wuda" onClick={this.showModal('modal2')}>加入购物袋</Button>

                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                >

                    <div className="bot-detail">
                        <div className="bot-detail-top">
                            <div className="bot-topImg">
                                <img src={good.big_thumb} alt="" />
                            </div>
                            <div className="title-center">
                                <p className="bot-name">{good.good_name}</p>
                                <p className="bot-price">￥{good.good_price}</p>
                                <div className="sku">
                                    <span>{good.all[0].attr_name}:{size}</span>
                                    <span>{good.all[1].attr_name}:{color}</span>
                                </div>
                            </div>
                            <div className="close" onClick={this.onClose('modal2')}>X</div>
                        </div>

                        <div className="bot-size">
                            <p>{good.all[0].attr_name}</p>
                            <ul className="bot-size-list">
                                {
                                    good.all[0].attr_val.map((item, index) => (
                                        <li
                                            className="pt_list_son"
                                            id={sizeIndex === index ? 'ptsel' : ''}
                                            key={index}
                                            onClick={this.props.HandleChangeSize.bind(this, item.diy_name, index)}>
                                            {item.diy_name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="bot-size">
                            <p>{good.all[1].attr_name}</p>
                            <ul className="bot-size-list">
                                {
                                    good.all[1].attr_val.map((item, index) => (
                                        <li
                                            className="pt_list_son"
                                            id={colorIndex === index ? 'ptsel' : ''}
                                            key={index}
                                            onClick={this.props.HandleChangeColor.bind(this, item.diy_name, index)}>
                                            {item.diy_name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="bot-size">
                            <p>数量</p>
                            <div className="bot-count">
                                <span onClick={this.props.handleRedGoodCount.bind(this,count)}>-</span>
                                <input type="text" value={count} onChange={this.props.handleChangeCount.bind(this)} />
                                <span onClick={this.props.handleAddGoodCount.bind(this,count)}>+</span>
                            </div>
                        </div>

                        <div className="addgoods"  onClick={this.props.handleAddGoodList.bind(this, good)}>确定</div>
                    </div>
                </Modal>


                <WhiteSpace />
                <span className="span goum">
                    <Link to={'/cart'}> 立即购买</Link>
                </span>

            </AddCartWrapper>
        )
    }

}

const mapStateToProps = (state) => ({
    count: state.addcart.count,
    size: state.addcart.size,
    color: state.addcart.color,
    colorIndex: state.addcart.colorIndex,
    sizeIndex: state.addcart.sizeIndex
})


const mapDispatchToProps = (dispatch) => ({
    HandleChangeColor(color, index) {
        dispatch(COLOR_ACTION(color, index));
    },
    HandleChangeSize(size, index) {
        dispatch(SIZE_ACTION(size, index));
    },
    handleChangeCount(e) {
        let val = e.target.value;
        dispatch(INPUT_COUNT_ACTION(val))
    },
    handleAddGoodList(good) {
        dispatch(ADD_GOOD_ACTION(good));
        this.setState({
            ['modal2']: false,
        });
    },
    handleRedGoodCount(val) {
        dispatch(COUNT_REDUCE_GOOD_ACTION(val));
    },
    handleAddGoodCount(val) {
        dispatch(COUNT_ADD_GOOD_ACTION(val));
    },
    
})


export default connect(mapStateToProps, mapDispatchToProps)(AddCart)



