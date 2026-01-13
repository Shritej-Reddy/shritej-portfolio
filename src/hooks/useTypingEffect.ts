import { useState, useEffect } from "react";

export function useTypingEffect(
  text: string,
  speed: number = 50,
  delay: number = 0
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (text.length === 0) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      const type = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(type, speed);
        } else {
          setIsTyping(false);
        }
      };

      timeoutId = setTimeout(type, delay);
    };

    startTyping();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayedText, isTyping };
}
