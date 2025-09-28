import { ChatMessage } from './ChatMessage'
import { useAutoScroll } from '../hooks/useAutoScroll'
import './ChatMessages.css'

export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-message-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
      })}
    </div>
  );
}