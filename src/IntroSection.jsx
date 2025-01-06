import React, { useEffect, useState } from 'react';

function IntroSection({ onComplete }) {
  const text = "Hi, my name is Sukhman Virk from SFU. This is a pretty basic design...";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 2000); // Wait 2 seconds before moving to the next step
    }
  }, [index, text, onComplete]);

  return <div className="typing">{displayText}</div>;
}

export default IntroSection;
