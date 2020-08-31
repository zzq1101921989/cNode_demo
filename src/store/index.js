import {createStore, combineReducers} from "redux"
import topicList from "./reducer/topiclist"
import topicDetails from "./reducer/topicDetalis"
import userMsg from "./reducer/user"

// 通过这个方法合并所有的 reducer 
export default createStore(combineReducers({
    topicList,
    topicDetails,
    userMsg
}))