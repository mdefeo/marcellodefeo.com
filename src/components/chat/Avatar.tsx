"use client";
import Image from "next/image";
import { AvatarProps } from "@/interfaces/ChatInterface";

const Avatar: React.FC<AvatarProps> = ({ type }) => {
  const avatarSrc = type === "user" ? "/images/user-avatar.png" : "/images/bot-avatar.png";

  return (
    <div className="chat-image avatar bot-avatar">
      <div className="w-10 rounded-full">
        <Image
          src={avatarSrc}
          alt={`${type === "user" ? "User" : "Bot"} Avatar`}
          width={48}
          height={48}
          priority={type === "bot"}
        />
      </div>
    </div>
  );
};

export default Avatar;