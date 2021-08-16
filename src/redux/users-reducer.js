let initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            const stateCopy = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            return stateCopy
        }
        case 'UNFOLLOW': {
            const stateCopy = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
            return stateCopy
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId) => {
    return (
        {
            type: 'FOLLOW',
            userId: userId
        }
    )
}
export const unfollowAC = (userId) => {
    return (
        {
            type: 'UNFOLLOW',
            userId: userId
        }
    )
}

export const setUsersAC = (users) => {
    return (
        {
            type: 'SET-USERS',
            users: users
        }
    )
}