
import React from 'react';
import { MOCK_RESOURCES } from '../constants';

const ResourceBooking: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Lab & Equipment Booking</h1>
        <p className="text-gray-500 mt-2">Reserve specialized tools for your innovation projects.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Available Assets</h2>
          <div className="space-y-4">
            {MOCK_RESOURCES.map(res => (
              <div key={res.id} className="bg-white p-5 rounded-2xl border border-gray-200 flex items-center justify-between group hover:border-uew-maroon transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${res.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{res.name}</h3>
                    <p className="text-xs text-gray-500">{res.type} • {res.location}</p>
                  </div>
                </div>
                <button 
                  disabled={!res.available}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    res.available 
                    ? 'bg-uew-maroon text-white hover:bg-red-900' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {res.available ? 'Book Now' : 'Occupied'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Guidelines</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-uew-gold text-uew-maroon flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <p className="text-sm text-gray-600">Students can book maximum 4 hours per day for heavy equipment.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-uew-gold text-uew-maroon flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <p className="text-sm text-gray-600">Mandatory safety induction required for the 3D printers and laser cutters.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-uew-gold text-uew-maroon flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <p className="text-sm text-gray-600">Clean up your workstation 15 minutes before your session ends.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-uew-gold text-uew-maroon flex items-center justify-center font-bold text-xs shrink-0">4</div>
                <p className="text-sm text-gray-600">Report any equipment malfunctions immediately to the Hub Manager.</p>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-uew-maroon/5 rounded-xl border border-uew-maroon/10">
              <h4 className="font-bold text-uew-maroon text-sm mb-1">Upcoming Workshop</h4>
              <p className="text-xs text-gray-600 mb-3">Learn to master the Meta Quest 3 for educational app development.</p>
              <button className="text-xs font-bold text-uew-maroon hover:underline">Register Today →</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourceBooking;
