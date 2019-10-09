import { handleActions } from "redux-actions";

const defaultState = {
    count: 1,
    size: "",
    color: "",
    sizeIndex: 0,
    colorIndex: 0,
    allChecked:false,
    goodsList: []
}

export default handleActions({
    // 物品码数
    size_action: (state, action) => {
        let newSizeState = Object.assign({}, state);
        newSizeState.size = action.payload.data;
        newSizeState.sizeIndex = action.payload.index;
        return newSizeState;
    },
    // 物品颜色
    color_action: (state, action) => {
        let newColorState = Object.assign({}, state);
        newColorState.color = action.payload.data;
        newColorState.colorIndex = action.payload.index;
        return newColorState;
    },
    input_count_action: (state, action) => {
        let newCountState = Object.assign({}, state);
        newCountState.count = action.payload;
        return newCountState;
    },
    // 详情页的计数器++
    count_add_good_action: (state, action) => {
        let newAddGoodState = Object.assign({}, state);
        newAddGoodState.count++;
        return newAddGoodState;
    },
    // 详情页的计数器--
    count_reduce_good_action: (state, action) => {
        let newReduceGoodState = Object.assign({}, state);
        if (action.payload >= 2) {
            newReduceGoodState.count--;
        }
        return newReduceGoodState;
    },
    // 添加到购物车
    add_good_action: (state, action) => {
        let newAddGoodState = Object.assign({}, state);
        let obj = {};
        obj.size = newAddGoodState.size;
        obj.color = newAddGoodState.color;
        obj.count = newAddGoodState.count;
        obj.good = action.payload;
        obj.flag = false;
        let bool = true;
            for (let i = 0; i < newAddGoodState.goodsList.length; i++) {
                if (action.payload.good_id === newAddGoodState.goodsList[i].good.goods_id && newAddGoodState.size === newAddGoodState.goodsList[i].size && newAddGoodState.color === newAddGoodState.goodsList[i].color) {
                    newAddGoodState.goodsList[i].count += newAddGoodState.count;
                    bool = false;
                    return;
                }
            }
        if(bool){
            newAddGoodState.goodsList.push(obj)
        }
        let goodsList = JSON.stringify(newAddGoodState.goodsList)
        localStorage.setItem("goodsList", goodsList)
        return newAddGoodState;
    },
    // 购物车计数器++
    count_add_action: (state, action) => {
        let newAddState = JSON.parse(JSON.stringify(state))
        newAddState.goodsList[action.payload].count++;
        return newAddState;
    },
    // 购物车计数器--
    count_reduce_action: (state, action) => {
        let newReduceState = JSON.parse(JSON.stringify(state))
        if (newReduceState.goodsList[action.payload].count >= 2) {
            newReduceState.goodsList[action.payload].count--;
        }
        return newReduceState;
    },
    // 选中商品
    checked_action:(state, action) => {
        let newCheckedState = JSON.parse(JSON.stringify(state))
        newCheckedState.goodsList[action.payload].flag = !newCheckedState.goodsList[action.payload].flag;
        newCheckedState.allChecked = newCheckedState.goodsList.every((item,index)=>(
            item.flag === true
        ))
        return newCheckedState;
    },
    // 全选
    allChecked_action:(state, action) => {
        let newAllCheckedState = JSON.parse(JSON.stringify(state))
        newAllCheckedState.allChecked = !newAllCheckedState.allChecked;
        newAllCheckedState.goodsList.forEach((item,index)=>(
            item.flag = newAllCheckedState.allChecked
        ))
        return newAllCheckedState;
    },
    // 删除商品
    delete_good_action:(state, action) => {
        let newDeleteState = JSON.parse(JSON.stringify(state));
        newDeleteState.goodsList.splice(action.payload,1)
        return newDeleteState;
    },
    // 删除所有
    all_delete_action:(state, action) => {
        let newAllDeleteState = JSON.parse(JSON.stringify(state));
        newAllDeleteState.goodsList.length = 0;
        return newAllDeleteState;
    },
}, defaultState)