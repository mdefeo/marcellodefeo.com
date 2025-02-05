import React from "react";

export interface NavigationSubItem {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  previewImage?: string;
  previewDescription?: string;
  subItems?: NavigationSubItem[];
}

export interface MainNavigationInterface {
  item: NavigationItem;
  setHoveredItem: React.Dispatch<React.SetStateAction<NavigationItem | null>>;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  imageLoaded: boolean;
  handleImageLoad: () => void;
}


export interface NavigationProps {
  item: NavigationItem;
  setHoveredItem: (item: NavigationItem | null) => void;
  setImageLoaded: (loaded: boolean) => void;
  onClick: () => void; 
}