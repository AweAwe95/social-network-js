import m from "./Messages.module.css"
import {Friend} from "./Friend/Friend";
import {Message} from "./Message/Message";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";

export function Messages(props) {
    const textAreaHandler = (e) => {
        props.dispatch(updateNewMessageTextAC(e))
    }
    const addMessage = () => {
        props.dispatch(addMessageAC())
    }
    return (
        <div className={m.content}>
            <div className={m.friends}>
                {props.messagesPageData.friendsData.map(f => <Friend id={f.id} name={f.name}/>)}
            </div>
            <div>
                {props.messagesPageData.messagesData.map(m => <Message message={m.message}/>)}
                <input value={props.messagesPageData.newMessageText} onChange={textAreaHandler}/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}