import react from 'react'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'


function ChatMessage({message,sender,chatMessages}){


    return(
        <div className=
        {sender === "user" ? 
                                  'chat-message-user' 
                                : 'chat-message-robot'}
        >
            {
                sender === "robot" && 
                (<img src={reactLogo} alt="" width="50" />
            )}
            <div className='chat-message-text'>
                {message}
            </div>
            {(sender === "user") && 
            (<img src={viteLogo} alt="" width="50" />)}
        </div>
    )

}

export default ChatMessage