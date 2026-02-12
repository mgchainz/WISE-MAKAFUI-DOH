
import { Project, Resource } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Campus Navigator',
    description: 'An AI-powered mobile app helping freshers navigate the Winneba campus with AR markers.',
    author: 'Ebenezer Attah',
    tags: ['Mobile', 'AR', 'AI'],
    imageUrl: 'https://picsum.photos/seed/nav/600/400',
    likes: 42
  },
  {
    id: '2',
    title: 'Edu-Stream Ghana',
    description: 'Low-bandwidth streaming platform for rural Ghanaian schools to access UEW lecture materials.',
    author: 'Priscilla Mensah',
    tags: ['Education', 'Networking'],
    imageUrl: 'https://picsum.photos/seed/edu/600/400',
    likes: 38
  },
  {
    id: '3',
    title: 'Bio-Gas Optimizer',
    description: 'IoT system monitoring biogas production from campus organic waste.',
    author: 'Kojo Anim',
    tags: ['Sustainability', 'IoT'],
    imageUrl: 'https://picsum.photos/seed/bio/600/400',
    likes: 55
  }
];

export const MOCK_RESOURCES: Resource[] = [
  { id: 'R1', name: 'Creality Ender 3 V2', type: '3D Printer', available: true, location: 'Lab A' },
  { id: 'R2', name: 'Meta Quest 3', type: 'VR Headset', available: false, location: 'VR Suite' },
  { id: 'R3', name: 'High-End GPU Node 1', type: 'Workstation', available: true, location: 'AI Lab' },
  { id: 'R4', name: 'Arduino Mega Kit #4', type: 'Electronics Kit', available: true, location: 'Robotics Wing' }
];
