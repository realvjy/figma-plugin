import { ArrowIcon, HeartIcon } from "@/lib/common";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Word {
  key: string;
  type: string;
  value: string;
}

interface TypingEffectProps {
  words: Word[];
  delayTypingChar?: number;
  delayBetweenWords?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words = [
    { key: "default1", type: "normal", value: "Default" },
    { key: "default2", type: "normal", value: "Words" },
  ],
  delayTypingChar = 200,
  delayBetweenWords = 2000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentType, setCurrentType] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!Array.isArray(words) || words.length === 0) {
      return;
    }

    let timeout: NodeJS.Timeout;

    const currentWord = words[currentIndex];
    if (
      !currentWord ||
      typeof currentWord.value !== "string" ||
      typeof currentWord.key !== "string"
    ) {
      return;
    }

    const combinedText = `${currentWord.value} ${currentWord.key}`;
    setCurrentType(`${currentWord.key}`);
    if (isTyping) {
      if (currentText.length < combinedText.length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => combinedText.slice(0, prev.length + 1));
        }, delayTypingChar);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetweenWords);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, delayTypingChar);
      } else {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentIndex,
    isTyping,
    words,
    delayTypingChar,
    delayBetweenWords,
  ]);

  const getIcon = (tag: string) => {
    switch (tag) {
      case "usage":
      default:
        return <ArrowIcon fill="#4D96DB" size={"16px"} />;
        break;
      case "likes":
        return <HeartIcon fill="#FF4541" size={"16px"} />;
        break;
    }
  };
  return (
    <MetaInfo>
      {getIcon(currentType)}
      {currentText}
      <span style={{ animation: "blink 0.7s infinite" }}>_</span>
    </MetaInfo>
  );
};

export default TypingEffect;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    font-size: 11px;
  }
`;
