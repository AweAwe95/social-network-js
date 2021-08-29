import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileAPIComponent} from "./ProfileAPIComponent";


let mapStateToProps = (state) => {
    return {
        profile: state.profilePageData.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIComponent)