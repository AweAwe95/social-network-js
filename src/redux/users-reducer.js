let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
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
export const setCurrentPageAC = (currentPage) => {
    return {
        type:'SET-CURRENT-PAGE',
        currentPage
    }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type:'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    }
}