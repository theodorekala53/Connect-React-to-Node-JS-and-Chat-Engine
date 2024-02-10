import { MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '2bdf4b22-5552-4198-b510-325e989ea42c', 
        props.user.username, 
        props.user.secret
    );
    return ( 
        <div style={{height: '100vh'}}> 
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>

        </div>
    )
}

export default ChatsPage