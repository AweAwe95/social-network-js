let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
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
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
}
export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    }
}
export const setIsFetchingAC = (isFetching) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}
export const toggleIsFollowingProgressAC = (isFetching, userId) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    }
}