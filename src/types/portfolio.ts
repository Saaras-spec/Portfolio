export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Full Stack" | "AI & ML" | "Creative Engineering" | "Mobile";
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  stats?: { label: string; value: string }[];
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Specialized", "Proficient"
    icon?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  accomplishments: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl: string;
  badgeColor?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  handle: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    tagline: string;
    bio: string[];
    location: string;
    availability: string;
    photo: string;
    resumeUrl: string;
    email: string;
    stats: {
      number: string;
      label: string;
      suffix?: string;
    }[];
  };
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  marqueeSkills: string[];
  projects: Project[];
  timeline: TimelineItem[];
  certifications: Certification[];
}
