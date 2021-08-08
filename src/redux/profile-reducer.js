let initialState = {
    postsData: [
        {id: 1, message: 'Hi', likeCounter: 6},
        {id: 2, message: 'Bye', likeCounter: 7},
        {id: 3, message: 'How old are you?', likeCounter: 10},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState,action) =>{
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 1, message: state.newPostText, likeCounter: 0}
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
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