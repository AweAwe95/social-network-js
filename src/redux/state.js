import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

export let store = {
    _state: {
        profilePageData: {
            postsData: [
                {id: 1, message: 'Hi', likeCounter: 6},
                {id: 2, message: 'Bye', likeCounter: 7},
                {id: 3, message: 'How old are you?', likeCounter: 10},
            ],
            newPostText: ''
        },
        messagesPageData: {
            friendsData: [
                {id: 1, name: 'Vitali'},
                {id: 2, name: 'Denis'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Jurek'},
                {id: 5, name: 'Lika'},
                {id: 6, name: 'Vladimir'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Whats up'},
                {id: 3, message: 'Lets play'},
                {id: 4, message: 'Are you dumb?'},
                {id: 5, message: 'Bye'},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePageData = profileReducer(this._state.profilePageData, action)
        this._state.messagesPageData = messagesReducer(this._state.messagesPageData, action)
        this._callSubscriber(this._state)
    }
}