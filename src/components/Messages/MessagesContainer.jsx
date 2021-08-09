import {addMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import {Messages} from "./Messages";
import {StoreContext} from "../../StoreContext";

export function MessagesContainer() {
    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    const textAreaHandler = (e) => {
                        store.dispatch(updateNewMessageTextAC(e))
                    }
                    const addMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    return (
                        <Messages addMessage={addMessage} textAreaHandler={textAreaHandler} messagesPageData={store.getState().messagesPageData}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}