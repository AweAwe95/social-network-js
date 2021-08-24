import React from "react";
import us from './Users.module.css'
import axios from "axios";

export class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={us.content}>
                <div>
                    {
                        pages.map(p => {
                            return <span className={(this.props.currentPage === p) ? us.selectedPage : ''}
                                         onClick={() => this.onPageChanged(p)}>{p} </span>
                        })
                    }
                </div>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <div>
                            <div>
                                <img
                                    src={"https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png  "}
                                    className={us.avatar} alt=""/>
                            </div>
                            <div>
                                {
                                    (user.followed) ?
                                        <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                        <button onClick={() => this.props.follow(user.id)}>Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                            <span>
                            <div>"u.location.country"</div>
                            <div>"u.location.city"</div>
                        </span>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}