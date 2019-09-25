import {createStore,combineReducers,applyMiddleware} from "redux";
import user from "./reducer/user"
import reduxThunk from "redux-thunk"
const reducer = combineReducers({
    user
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;