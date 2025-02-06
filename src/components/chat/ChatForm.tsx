"use client";
import { ChatFormProps } from "@/interfaces/ChatInterface";

const ChatForm: React.FC<ChatFormProps> = ({ userInput, setUserInput, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-2 p-4 bg-white border-t border-accent"
    >
      <input
        autoFocus
        type="text"
        id="userInput"
        placeholder="Ask me anything..."
        className="input w-full bg-accent text-base-300"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        aria-label="Type your question"
      />
      <button
        className="btn bg-secondary-content border-none text-white disabled:bg-base-100 disabled:text-white hover:bg-info hover:shadow-lg"
        type="submit"
        disabled={userInput.length < 3}
        title={
          userInput.length < 3
            ? "You can only submit a question if three or more characters have been typed."
            : ""
        }
      >
        Ask
      </button>
    </form>
  );
};

export default ChatForm;