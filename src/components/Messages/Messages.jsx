import m from "./Messages.module.css"
import {Friend} from "./Friend/Friend";
import {Message} from "./Message/Message";

export function Messages(props) {

    return (
        <div className={m.content}>
            <div className={m.friends}>
                {props.messagesPageData.friendsData.map(f => <Friend id={f.id} name={f.name}/>)}
            </div>
            <div>
                {props.messagesPageData.messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}