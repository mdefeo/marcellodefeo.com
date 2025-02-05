"use client"
import { FC } from "react";
import Image from "next/image";
import { SkillIconProps } from "@/interfaces/SkillIconInterface";
import icons from "@/lib/icons";

const SkillIcon: FC<SkillIconProps> = ({
  name,
  alt,
  size = 28,
  className = "inline-flex text-2xl mr-4 mb-4",
  isFontAwesome = false,
}) => {
  return (
    <div className="tooltip tooltip-top" data-tip={alt}>
      <Image
        src={icons[name as keyof typeof icons]}
        alt={alt}
        width={size}
        height={size}
        className={className}
      />
    </div>
  );
};

export default SkillIcon;