import { handleActions } from "redux-actions";

const defaultState = {
    searchInput:"",
    searchResult:{},
    flag:"",
}

export default handleActions({
    search_input_action:(state,action) => {
        let newSearchState = Object.assign({},state);
        newSearchState.searchInput= action.payload;
        return newSearchState;
    },
    search_result_action:(state,action) => {
        console.log(action.payload.data,111)
        let newSearchResultState = Object.assign({},state);
        newSearchResultState.searchResult = action.payload.data;
        if(action.payload.data){
            newSearchResultState.flag = true;
        }
        return newSearchResultState;
    }
}, defaultState)