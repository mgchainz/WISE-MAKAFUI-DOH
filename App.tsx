
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProjectGallery from './components/ProjectGallery';
import ResourceBooking from './components/ResourceBooking';
import AIMentor from './components/AIMentor';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.PROJECTS:
        return <ProjectGallery />;
      case View.BOOKING:
        return <ResourceBooking />;
      case View.MENTOR:
        return <AIMentor />;
      case View.COMMUNITY:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-fadeIn">
            <div className="w-20 h-20 bg-uew-gold rounded-full flex items-center justify-center text-3xl">🤝</div>
            <h2 className="text-2xl font-bold text-gray-900">Community Module Coming Soon</h2>
            <p className="text-gray-500 max-w-md">We're building a space for you to find teammates, join interest groups, and collaborate on amazing ideas.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-1 ml-64 p-8 max-w-7xl">
        {/* Navigation Bar / Breadcrumbs */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">
            UEW Innovation Hub <span className="mx-2">/</span> <span className="text-gray-900">{currentView}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-uew-maroon bg-uew-maroon/10 px-2 py-1 rounded">Tier 1 Innovator</span>
            </div>
          </div>
        </div>

        {renderView()}
      </main>
    </div>
  );
};

export default App;
