let initialState = {
    usersData: [
        {id: 1, photoURL:"https://pbs.twimg.com/media/EfXxtliXYAA6wZF.jpg", fullName: 'Vitali', status:"I am angry", location: {city: 'Minsk', country: 'Belarus'}, follow: true},
        {id: 2, photoURL:"https://belaruspartisan.by/upload/medialibrary/704/704dae0dd8700dbc68c24d69482f401b.jpg", fullName: 'Denis', status:"I am hungry", location: {city: 'Hrodno', country: 'Belarus'}, follow: false},
        {id: 3, photoURL:"https://ru.hrodna.life/wp-content/uploads/2020/08/karanik-1.jpg", fullName: 'Lika', status:"I am a nerd", location: {city: 'Moscow', country: 'Russia'}, follow: true},
        {id: 4, photoURL:"https://www.belta.by/images/storage/news/with_archive/2021/000022_1628188608_454060_big.jpg", fullName: 'Jurek', status:"I am a driver", location: {city: 'London', country: 'England'}, follow: false},
    ]
}

export const usersReducer = (state = initialState,action) =>{
    switch (action.type) {
        case 'FOLLOW':{
            const stateCopy = {...state, usersData: state.usersData.map(u => {
                if(u.id === action.userId){
                    return {...u, follow: true}
                }
                return u
                })}
            return stateCopy
        }
        case 'UNFOLLOW':{
            const stateCopy = {...state, usersData: state.usersData.map(u => {
                    if(u.id === action.userId){
                        return {...u, follow: false}
                    }
                    return u
                })}
            return stateCopy
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