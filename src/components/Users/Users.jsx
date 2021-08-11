import us from './Users.module.css'

export function Users(props) {
    return (
        <div className={us.content}>
            {
                props.usersPageData.usersData.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoURL} className={us.avatar} alt=""/>
                        </div>
                        <div>
                            {
                                (u.follow) ?
                                    <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </div>
                </div>)
            }
        </div>
    )
}