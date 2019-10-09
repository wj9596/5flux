import {createStore,combineReducers,applyMiddleware} from "redux";
import user from "./reducer/user";
import addcart from "./reducer/addcart"
import search from "./reducer/search"
import reduxThunk from "redux-thunk"
const reducer = combineReducers({
    user,
    addcart,
    search
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;