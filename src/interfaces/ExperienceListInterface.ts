export interface Technology {
  name: string;
  icon: string;
}

export interface ExperienceListProps {
  experiences: ExperienceListItemProps[];
  selectedExperience: ExperienceListItemProps;
}

export interface ExperienceListItemProps {
  id: number;
  logoSrc: string;
  altText: string;
  institutionName: string; 
  duration: string; 
  title: string;
  location: string; 
  description: string | string[]; 
  technologies?: Technology[]; 
  institutionNameShortName?: string; 
  titleShortName?: string; 
  selected?: boolean;
  className?: string;
}