
import React, { useState } from 'react';
import { MOCK_PROJECTS } from '../constants';

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const allTags = ['All', ...Array.from(new Set(MOCK_PROJECTS.flatMap(p => p.tags)))];

  const filteredProjects = filter === 'All' 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <div className="animate-fadeIn">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Showcase</h1>
          <p className="text-gray-500 mt-2">Discover innovations from across the UEW community.</p>
        </div>
        <button className="bg-uew-maroon text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow">
          + Post Project
        </button>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === tag 
              ? 'bg-uew-maroon text-white' 
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-xl transition-all">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={project.title} 
              />
              <div className="absolute top-3 left-3 flex gap-1">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded uppercase tracking-wider text-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <img src={`https://i.pravatar.cc/150?u=${project.author}`} className="w-6 h-6 rounded-full" alt={project.author} />
                <span className="text-xs font-semibold text-gray-700">{project.author}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                   <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    <span className="text-sm font-medium">{project.likes}</span>
                   </button>
                   <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                    <span className="text-sm font-medium">8</span>
                   </button>
                </div>
                <button className="text-uew-maroon font-bold text-sm hover:translate-x-1 transition-transform flex items-center gap-1">
                  Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
