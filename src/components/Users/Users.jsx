import us from './Users.module.css'
import axios from "axios";

export function Users(props) {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div className={us.content}>
            <button onClick={getUsers}>Users</button>
            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <img
                                src={"https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png  "}
                                className={us.avatar} alt=""/>
                        </div>
                        <div>
                            {
                                (user.followed) ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>
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