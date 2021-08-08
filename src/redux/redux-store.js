import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

let reducers = combineReducers({
    profilePageData: profileReducer,
    messagesPageData: messagesReducer
})

export let store = createStore(reducers)