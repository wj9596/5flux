import {createAction} from 'redux-actions';
import {searchGood_api} from "@api/search"

// 物品大小
export const SIZE_ACTION = createAction("size_action",(data,index)=>({data,index}));

// 物品颜色
export const COLOR_ACTION = createAction("color_action",(data,index)=>({data,index}));

// 数量
export const INPUT_COUNT_ACTION = createAction("input_count_action",data=>data);

// 详情页的计数器++
export const COUNT_ADD_GOOD_ACTION = createAction("count_add_good_action",data=>data);

// 详情页的计数器--
export const COUNT_REDUCE_GOOD_ACTION = createAction("count_reduce_good_action",data=>data);

// 数量++
export const COUNT_ADD_ACTION = createAction("count_add_action",data=>data);

// 数量--
export const COUNT_REDUCE_ACTION = createAction("count_reduce_action",data=>data)

// 添加购物车数据
export const ADD_GOOD_ACTION = createAction("add_good_action",data=>data)

// 购物车商品选择
export const CHECKED_ACTION = createAction("checked_action",data=>data)

// 全选
export const ALLCHECKED_ACTION = createAction("allChecked_action",data=>data)

// 删除商品
export const DELETE_GOOD_ACTION = createAction("delete_good_action",data=>data)

// 删除所有商品
export const ALL_DELETE_ACTION = createAction("all_delete_action",data=>data)

// 搜索框内容
export const SEARCH_INPUT_ACTION = createAction("search_input_action",val=>val)

// 搜索结果
export const SEARCH_RESULT_ACTION = createAction("search_result_action",data=>data)

export const SEARCH_INPUT_ASYNC_ACTION = (val)=>{
    return async (dispatch)=>{
        let data = await searchGood_api(val);
        // console.log(dispatch)
        dispatch(SEARCH_INPUT_ACTION(val));
        dispatch(SEARCH_RESULT_ACTION(data))
    }
}