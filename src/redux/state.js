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
            ]
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
        switch (action.type) {
            case 'ADD-POST':
                const newPost = {id: 1, message: this._state.profilePageData.newPostText, likeCounter: 0}
                this._state.profilePageData.postsData.push(newPost)
                this._state.profilePageData.newPostText = ''
                this._callSubscriber()
                break
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePageData.newPostText = action.newText
                this._callSubscriber()
                break
            default:
                break
        }
    }
}

export const addPostAC = () => {
    return (
        {
            type: 'ADD-POST',
        }
    )
}
export const updateNewPostTextAC = (e) => {
    return (
        {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: e.currentTarget.value
        }
    )
}