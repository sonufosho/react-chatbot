import { useState, useEffect } from 'react'
import { Chatbot} from 'supersimpledev'
import { ChatMessages } from './components/ChatMessages'
import { ChatInput } from './components/ChatInput'
import RedHeartImage from './assets/red-heart.png'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      // Greetings
      'hi': 'Hello! How can I help you today?',
      'hey': 'Hey! How\'s it going?',
      'see you': 'See you later!',
      'goodbye': 'Goodbye. Have a great day!',

      // FAQs
      'what can you do': 'I can answer questions, tell jokes, and keep you company.',
      'who are you': 'I\'m Momo, I\'m here to chat and help.',
      'what is your name': 'You can just call me Momo!',
      'who created you': 'I was created by a developer, his name is Sonu.',

      // Emotional responses
      'i am sad': 'I\'m sorry to hear that. Remember, tough times don\'t last, but tough people do.',
      'i am happy': 'That\'s awesome! Keep smiling.',
      'i am bored': 'How about I tell you a joke or a fun fact?',

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
      <div className="credit">
        <span>Made with&nbsp;</span>
        <img src={RedHeartImage} height="20px" />
        <span>&nbsp;by Sonu</span>
      </div>
    </div>
  );
}

export default App