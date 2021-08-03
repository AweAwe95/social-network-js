let rerenderEntireTree = () => {
    console.log('state changed')
}

export const state = {
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
}

export const addPost = (newPostMessage) => {
    const newPost = {id: 1, message: newPostMessage, likeCounter: 0}
    state.profilePageData.postsData.push(newPost)
    state.profilePageData.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText) => {
    state.profilePageData.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}