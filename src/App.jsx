import { useState } from 'react'
import Chatbot from './chatbot';
import './App.css'

import ChatInput from './components/chatinput'
import ChatMessage from './components/chatmessage'

function App() {
      const [chatMessages,setChatMessages] = useState(
            []);
  return (
      <div className='app-container'>
             <ChatInput
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
    />
      {chatMessages.map((chatMessage) =>{
            return(
                  <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                        chatMessage={chatMessages}

                  />
            )

      })}
      
      </div>
  )
}

export default App
