import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let timeout;

    if (isTyping) {
      if (currentText.length < text.length) {
        // Typing effect
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        // Deleting effect
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseTime]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold bg-black bg-clip-text ">
        {currentText}
        <span className={`inline-block w-1 h-8 bg-black ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
      </h1>
      <p className="text-lg mt-2 md:text-xl text-gray-600 max-w-2xl mx-auto">
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0s'}}>Y</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.1s'}}>o</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.2s'}}>u</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.3s'}}>r</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.4s'}}>&nbsp;</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.5s'}}>c</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.6s'}}>o</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.7s'}}>m</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.8s'}}>p</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '0.9s'}}>l</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.0s'}}>e</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.1s'}}>t</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.2s'}}>e</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.3s'}}>&nbsp;</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.4s'}}>t</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.5s'}}>a</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.6s'}}>s</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.7s'}}>k</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.8s'}}>&nbsp;</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '1.9s'}}>m</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.0s'}}>a</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.1s'}}>n</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.2s'}}>a</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.3s'}}>g</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.4s'}}>e</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.5s'}}>m</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.6s'}}>e</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.7s'}}>n</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.8s'}}>t</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '2.9s'}}>&nbsp;</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.0s'}}>s</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.1s'}}>o</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.2s'}}>l</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.3s'}}>u</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.4s'}}>t</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.5s'}}>i</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.6s'}}>o</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.7s'}}>n</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.8s'}}>&nbsp;</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '3.9s'}}>f</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.0s'}}>o</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.1s'}}>r</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.2s'}}>&nbsp;</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.3s'}}>m</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.4s'}}>o</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.5s'}}>d</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.6s'}}>e</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.7s'}}>r</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.8s'}}>n</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '4.9s'}}>&nbsp;</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.0s'}}>p</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.1s'}}>r</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.2s'}}>o</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.3s'}}>d</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.4s'}}>u</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.5s'}}>c</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.6s'}}>t</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.7s'}}>i</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.8s'}}>v</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '5.9s'}}>i</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '6.0s'}}>t</span>
        <span className="inline-block animate-roll-simple" style={{animationDelay: '6.1s'}}>y</span>
      </p>
    </div>
  );
};

export { TypingAnimation };