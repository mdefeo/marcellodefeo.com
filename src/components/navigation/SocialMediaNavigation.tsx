import React from "react";
import Link from "next/link";
import { SocialMediaNavigationProps } from "@/interfaces/SocialMediaNavigationInterface";
import iconMap from "@/lib/iconMap";

const SocialMediaNavigation: React.FC<SocialMediaNavigationProps> = ({ fontSize = 20, links }) => {
  return (
    <nav className="social-media-nav">
      {links.map((social) => {
        const IconComponent = iconMap[social.name as keyof typeof iconMap];
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-tip={social.name}
          >
            <IconComponent className="social-media-icon" fontSize={fontSize} />
          </Link>
        );
      })}
    </nav>
  );
};

export default SocialMediaNavigation;
