import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

export class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleToFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleToFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleToFetching(true)
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleToFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {

        return (
            <>
                {(this.props.isFetching) ? <Preloader/> : ""}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}