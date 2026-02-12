
export enum View {
  DASHBOARD = 'dashboard',
  PROJECTS = 'projects',
  BOOKING = 'booking',
  MENTOR = 'mentor',
  COMMUNITY = 'community'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  imageUrl: string;
  likes: number;
}

export interface Resource {
  id: string;
  name: string;
  type: '3D Printer' | 'VR Headset' | 'Workstation' | 'Electronics Kit';
  available: boolean;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
