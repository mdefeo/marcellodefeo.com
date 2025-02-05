export interface Skill {
  name: string;
  icon: string;
  alt: string;
}

export interface CaseStudiesInterface {
  name: string;
  title: string;
  href: string;
  image: string;
  url: string;
  description: string;
  challenges: string[];
  outcomes: string[];
  skills: Skill[];
  clientLogo: string;
  role: string;
  team: string[];
  duration: string;
}

export interface CaseStudyProps {
  caseStudy: CaseStudiesInterface;
}