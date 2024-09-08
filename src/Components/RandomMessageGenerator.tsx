import React, { useEffect, useState } from 'react';
import Styles from './RandomMessageGenerator.module.css';

type RandomMessageGeneratorProps = {
  messages: string[];
  colors?: string[];
};

const RandomMessageGenerator: React.FC<RandomMessageGeneratorProps> = ({ messages, colors = ['tomato', 'rebeccapurple', 'lightblue'] }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [letterCount, setLetterCount] = useState(1);
  const [visible, setVisible] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [waiting, setWaiting] = useState(false);

  // Reset animation states when messages array changes
  useEffect(() => {
    setCurrentMessage('');
    setLetterCount(1);
    setColorIndex(0);
    setMessageIndex(0);
    setWaiting(false);
  }, [messages]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!waiting) {
        if (letterCount === 0) {
          // Start waiting when fully deleted
          setWaiting(true);
          setTimeout(() => {
            // Rotate message and color after waiting
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setLetterCount(1); // Start typing the next message
            setWaiting(false);
          }, 1000);
        } else if (letterCount === messages[messageIndex].length + 1) {
          // Start waiting after typing the message completely
          setWaiting(true);
          setTimeout(() => {
            setLetterCount((prevCount) => prevCount - 1); // Start deleting
            setWaiting(false);
          }, 1000);
        } else {
          // Type or delete letters
          setCurrentMessage(messages[messageIndex].substring(0, letterCount));
          setLetterCount((prevCount) => prevCount + (letterCount > messages[messageIndex].length ? -1 : 1));
        }
      }
    }, 120);

    const underscoreInterval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(intervalId);
      clearInterval(underscoreInterval);
    };
  }, [letterCount, messageIndex, waiting, messages, colors]);

  return (
    <div className={Styles.container}>
      <span id="text" style={{ color: colors[colorIndex] }}>
        {currentMessage}
      </span>
      <div className={`${Styles.underscore} ${!visible ? Styles.hidden : ''}`}>_</div>
    </div>
  );
};

export default RandomMessageGenerator;
