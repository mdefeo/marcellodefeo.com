"use client";
import { sanitizeHTML } from "@/utils/sanitizeHTML";
import Avatar from "./Avatar";
import { ChatMessageProps } from "@/interfaces/ChatInterface";

const ChatMessage: React.FC<ChatMessageProps> = ({ message, type, isError }) => {
  const sanitizedMessage = sanitizeHTML(message);

  return (
    <div className={`chat ${type === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <Avatar type={type} />
      </div>
      <div
        className={`chat-bubble ${
          isError
            ? "bg-error text-error-content"
            : type === "user"
            ? "bg-accent-content text-accent"
            : "bg-primary text-secondary-content"
        }`}
        role="alert"
        aria-live={isError ? "assertive" : "polite"}
      >
        {message === "..." ? (
          <span className="loading loading-dots loading-sm">...</span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: sanitizedMessage }} />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;