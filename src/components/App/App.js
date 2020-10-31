import React from 'react';
import './App.css';
import Instructions from '../Instructions/Instructions.js';

const displayEmojiName = event => alert(event.target.id);

const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  },
  {
    emoji: "😁",
    name: "beaming face"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" aria-label="emoji.name" id="emoji.emoji">{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default App; 