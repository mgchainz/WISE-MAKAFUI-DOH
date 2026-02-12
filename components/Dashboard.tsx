
import React from 'react';
import { MOCK_PROJECTS, MOCK_RESOURCES } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Innovator! 👋</h1>
        <p className="text-gray-500 mt-2">Here's what's happening at the UEW Innovation Hub today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Active Projects</p>
          <p className="text-4xl font-bold text-uew-maroon mt-1">24</p>
          <p className="text-xs text-green-600 mt-2 font-medium">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Booked Equipment</p>
          <p className="text-4xl font-bold text-gray-900 mt-1">8</p>
          <p className="text-xs text-gray-500 mt-2">3 items due today</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Hub Members</p>
          <p className="text-4xl font-bold text-gray-900 mt-1">156</p>
          <p className="text-xs text-uew-maroon mt-2 font-medium">Join a squad</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Trending Projects</h2>
            <button className="text-sm text-uew-maroon hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {MOCK_PROJECTS.slice(0, 2).map(project => (
              <div key={project.id} className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4 hover:border-uew-maroon transition-all cursor-pointer group">
                <img src={project.imageUrl} className="w-24 h-24 rounded-lg object-cover" alt={project.title} />
                <div className="flex-1">
                  <h3 className="font-bold group-hover:text-uew-maroon transition-colors">{project.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600">{project.author}</span>
                    <span className="text-[10px] flex items-center gap-1 text-gray-500">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      {project.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Lab Availability</h2>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Hub Open</span>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 font-medium">
                <tr>
                  <th className="px-4 py-3">Resource</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_RESOURCES.map(res => (
                  <tr key={res.id}>
                    <td className="px-4 py-3 font-medium text-gray-800">{res.name}</td>
                    <td className="px-4 py-3 text-gray-500">{res.type}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${res.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {res.available ? 'Available' : 'In Use'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
