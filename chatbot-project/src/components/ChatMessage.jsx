import dayjs from 'dayjs'
import UserProfileImage from '../assets/animesonu.jpg'
import RobotProfileImage from '../assets/animegirl.jpg'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  const time = dayjs().format('HH:mm');

  return (
    <div className={sender === 'user'
    ? 'chat-message-user'
    : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
        <div className="chat-message-time">{time}</div>
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}