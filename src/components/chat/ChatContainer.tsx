"use client";
import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";
import { useState, useRef, useEffect } from "react";
import { sanitizeHTML } from "@/utils/sanitizeHTML";
import bioDataJson from "@/data/chat/bioData.json";
import curseWordsJson from "@/data/chat/cursewordData.json";
import keywordsJson from "@/data/chat/keywordData.json";
import jokesJson from "@/data/chat/jokeData.json";
import { KeywordMapInterface, BioDataInterface } from "@/interfaces/ChatInterface";

const curseWords: string[] = curseWordsJson;
const keywordMap: KeywordMapInterface = keywordsJson;
const bioData: BioDataInterface = bioDataJson;

const ChatContainer: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<
    { message: string; type: "bot" | "user"; isError: boolean }[]
  >([
    {
      message: "Hello, I'm bot.cello, the virtual Marcello. What would you like to know about me?",
      type: "bot",
      isError: false,
    },
  ]);

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!isFirstRender && bodyRef.current) {
    } else {
      setIsFirstRender(false);
    }
  }, [messages, isFirstRender]);

  const addMessage = (message: string, type: "bot" | "user", isError: boolean) => {
    setMessages((prev) => [...prev, { message, type, isError }]);
  };

  const handleSubmit = (sanitizedInput: string) => {
    const normalizedInput = sanitizedInput.toLowerCase().split(/\s+/);

    addMessage(sanitizedInput, "user", false);

    if (normalizedInput.some((word) => curseWords.includes(word))) {
      simulateBotTyping("Watch your language! This is a family-friendly bot.", true);
    } else if (/joke|funny/i.test(sanitizedInput)) {
      const randomJoke = jokesJson[Math.floor(Math.random() * jokesJson.length)];
      simulateBotTyping(randomJoke, false);
    } else {
      const replyMessage = searchInBioData(sanitizedInput);
      simulateBotTyping(replyMessage.message, replyMessage.isError);
    }

    setUserInput("");
  };

  const simulateBotTyping = (message: string, isError: boolean) => {
    addMessage("...", "bot", false);
    setTimeout(() => {
      setMessages((prev) => prev.slice(0, -1));
      addMessage(message, "bot", isError);
    }, 1000);
  };

  const searchInBioData = (
    query: string
  ): { message: string; type: "bot" | "user"; isError: boolean } => {
    const bioDataKey = Object.entries(keywordMap).find(([keyword]) =>
      query.toLowerCase().includes(keyword.toLowerCase())
    )?.[1];

    if (bioDataKey) {
      const bioDataValue = bioData[bioDataKey as keyof BioDataInterface];
      return {
        message: formatBioDataValue(bioDataValue),
        type: "bot",
        isError: false,
      };
    }

    return {
      message: `I'm sorry, but I do not know how to respond to "${query}" yet. I am still learning, though!`,
      type: "bot",
      isError: false,
    };
  };

  const formatBioDataValue = (value: unknown): string => {
    if (Array.isArray(value)) {
      return value
        .map((item) => `<p class="mb-3">${JSON.stringify(item)}</p>`)
        .join("");
    } else if (typeof value === "object" && value !== null) {
      return Object.entries(value as Record<string, unknown>)
        .map(([key, val]) => `<p class="mb-3">${key}: ${val}</p>`)
        .join("");
    }
    return `<p class="mb-3">${String(value)}</p>`;
  };

  return (
    <div className="chat-container h-[40vh] lg:mx-h-96 min-h-full w-full flex flex-col justify-between mx-auto mt-0 mb-8 shadow-sm hover:card hover:shadow-2xl transition-all duration-500 ease-in-out">
      <ChatBody messages={messages} bodyRef={bodyRef} />
      <ChatForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={(e) => {
          e.preventDefault();
          const sanitizedInput = sanitizeHTML(userInput);
          handleSubmit(sanitizedInput);
        }}
      />
    </div>
  );
};

export default ChatContainer;