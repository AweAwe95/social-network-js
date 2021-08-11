let initialState = {
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

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = {id: 1, message: state.newMessageText}
            const stateCopy = {...state, messagesData: [...state.messagesData, newMessage]}
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            const stateCopy = {...state, newMessageText: action.newText}
            return stateCopy
        }
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