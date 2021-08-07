export const profileReducer = (state,action) =>{
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