import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer";

let reducers = combineReducers({
    profilePageData: profileReducer,
    messagesPageData: messagesReducer,
    usersPageData: usersReducer
})

export let store = createStore(reducers)