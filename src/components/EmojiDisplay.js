import React, { useState } from 'react';

function EmojiDisplay() {
  const [emoji, setEmoji] = useState('Click Me');
  const [name, setName] = useState('Emoji Name');
  const url = 'https://emoji-api.com/emojis?access_key=8bd7c2327a663e6d1b92a245cc9b14a0b56f7bf6';

  const getRandom = (n) => {
    return Math.floor(Math.random() * n);
  };

  const fetchRandomEmoji = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      const randomIndex = getRandom(data.length);
      const randomEmoji = data[randomIndex];
      setEmoji(randomEmoji.character);
      setName(randomEmoji.unicodeName);
    } catch (error) {
      console.error('Error fetching the emoji:', error);
      setName('Failed to fetch emoji');
    }
  };

  return (
    <div>
      <div className="button">
        <button onClick={fetchRandomEmoji}>{emoji}</button>
      </div>
      <div className="output">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default EmojiDisplay;
