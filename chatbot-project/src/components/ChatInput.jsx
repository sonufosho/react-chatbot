import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function sendInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }

    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingSpinner} className="loading-spinner" />,
        sender: 'robot',
        id: crypto.randomUUID(),
      }
    ]);

    setInputText('');

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return (
    <div className="chat-input-container">
      <textarea
        placeholder="Ask anything..."
        size="30"
        onChange={sendInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
        ><i className="ri-send-plane-fill"></i></button>
    </div>
  );
}