import {addMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import {Messages} from "./Messages";

export function MessagesContainer(props) {
    const textAreaHandler = (e) => {
        props.dispatch(updateNewMessageTextAC(e))
    }
    const addMessage = () => {
        props.dispatch(addMessageAC())
    }
    return (
        <Messages addMessage={addMessage} textAreaHandler={textAreaHandler} messagesPageData={props.messagesPageData}/>
    )
}