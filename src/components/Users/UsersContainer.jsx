import {connect} from "react-redux";
import {followAC, unfollowAC} from "../../redux/users-reducer";
import {Users} from "./Users";


let mapStateToProps = (state) => {
    return {
        usersPageData: state.usersPageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAC(userId))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)