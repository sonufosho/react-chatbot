import { useState, useEffect } from 'react'
import { Chatbot} from 'supersimpledev'
import { ChatMessages } from './components/ChatMessages'
import { ChatInput } from './components/ChatInput'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  }, []);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p>Welcome! How can I assist you right now?</p>
      )}
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App