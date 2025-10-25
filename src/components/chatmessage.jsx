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
                (<img className='chat-message-profile' src={reactLogo} alt=""  />
            )}
            <div className='chat-message-text'>
                {message}
            </div>
            {(sender === "user") && 
            (<img className='chat-message-profile' src={viteLogo} alt="" />)}
        </div>
    )

}

export default ChatMessage