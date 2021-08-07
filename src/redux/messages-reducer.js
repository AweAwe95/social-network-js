export const messagesReducer = (state,action) => {
        switch (action.type) {
            case 'ADD-MESSAGE':
                const newMessage = {id: 1, message: state.newMessageText}
                state.messagesData.push(newMessage)
                state.newMessageText = ''
                return state
            case 'UPDATE-NEW-MESSAGE-TEXT':
                state.newMessageText = action.newText
                return state
            default:
                return state
        }
}

export const addMessageAC = () => {
    return (
        {
            type: 'ADD-MESSAGE'
        }
    )
}
export const updateNewMessageTextAC = (e) => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            newText: e.currentTarget.value
        }
    )
}