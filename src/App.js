import React from 'react';
import './App.css';
import EmojiDisplay from './components/EmojiDisplay';

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Random Emoji</h1>
      </div>
      <EmojiDisplay />
    </div>
  );
}

export default App;
