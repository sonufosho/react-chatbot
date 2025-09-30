import { useState, useEffect } from 'react'
import { Chatbot} from 'supersimpledev'
import dayjs from 'dayjs'
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

      // Functions
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },

      'what is the time': function() {
        return `Current time is ${dayjs().format('HH:mm')}`
      },

      'good morning': function() {
        const hour = dayjs().format('HH');
        if (hour >= 5 && hour < 12) {
          return 'Good morning, hope you have a great day!';
        } else {
          return `u sure 🤨? it's ${dayjs().format('HH:mm')} rn`
        }
      },

      'good afternoon': function() {
        const hour = dayjs().format('HH');
        if (hour >= 12 && hour < 17) {
          return 'Good afternoon! Hope your day is going well.';
        } else {
          return `u sure 🤨? it's ${dayjs().format('HH:mm')} rn`
        }
      },

      'good evening': function() {
        const hour = dayjs().format('HH');
        if (hour >= 17 && hour < 21) {
          return 'Good evening! Relax and enjoy your evening.';
        } else {
          return `u sure 🤨? it's ${dayjs().format('HH:mm')} rn`
        }
      },

      'good night': function() {
        const hour = dayjs().format('HH');
        if (hour >= 21 || hour < 5) {
          return 'Good night, sleep well!';
        } else {
          return `u sure 🤨? it's ${dayjs().format('HH:mm')} rn`
        }
      },

      'tell me a joke': function() {
        const jokes = [
          'Why don\'t scientists trust atoms? Because they make up everything.',
          'Why did the scarecrow win an award? Because he was outstanding in his field.',
          'Why don\'t skeletons fight each other? They don\'t have the guts.',
          'What do you call fake spaghetti? An impasta.',
          'Why can\'t your nose be 12 inches long? Because then it would be a foot.',
          'What did one ocean say to the other ocean? Nothing, they just waved.',
          'Why did the math book look sad? Because it had too many problems.',
          'Why did the computer go to the doctor? Because it caught a virus.',
          'Why did the bicycle fall over? Because it was two-tired.',
          'What do you call cheese that isn\'t yours? Nacho cheese.'
        ];

        const randomIndex = Math.floor(Math.random() * jokes.length);
        return jokes[randomIndex];
      },

      'tell me a fun fact' : function() {
        const facts = [
          'Honey never spoils. Archaeologists have found 3000-year-old jars of honey that are still edible.',
          'Bananas are berries, but strawberries are not.',
          'Sharks existed before trees.',
          'Octopuses have three hearts and blue blood.',
          'The Eiffel Tower can grow more than 6 inches taller in summer due to heat expansion.',
          'A day on Venus is longer than a year on Venus.',
          'Wombat poop is cube-shaped.',
          'There are more stars in the universe than grains of sand on all the Earth\'s beaches.',
          'Sloths can hold their breath longer than dolphins can.',
          'Your stomach gets a new lining every few days so it doesn\'t digest itself.'
        ];

        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
      },
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