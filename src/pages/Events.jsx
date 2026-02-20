import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ChevronRight, Search, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Events() {
  const { events } = useApp();
  const [yearFilter, setYearFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const years = ['all', '2026', '2025', '2024'];

  const filtered = events.filter(ev => {
    const matchYear = yearFilter === 'all' || String(ev.year) === yearFilter;
    const matchStatus = statusFilter === 'all' || ev.status === statusFilter;
    const matchSearch = ev.title.toLowerCase().includes(search.toLowerCase()) ||
      ev.location.toLowerCase().includes(search.toLowerCase());
    return matchYear && matchStatus && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#1F2D3C] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#4E7F90] font-semibold text-sm uppercase tracking-widest mb-2">Explore</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Upcoming Events</h1>
          <p className="text-gray-400 text-lg">World-class cybersecurity gatherings you don't want to miss.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 text-gray-500">
            <Filter size={16} />
            <span className="text-sm font-medium">Filter:</span>
          </div>

          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="form-input pl-9 py-2 text-sm"
            />
          </div>

          {/* Year */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Year:</span>
            <div className="flex gap-1">
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => setYearFilter(y)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    yearFilter === y
                      ? 'bg-[#1F2D3C] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {y === 'all' ? 'All Years' : y}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Status:</span>
            <div className="flex gap-1">
              {['all', 'upcoming', 'past'].map(s => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    statusFilter === s
                      ? 'bg-[#4E7F90] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {s === 'all' ? 'All' : s}
                </button>
              ))}
            </div>
          </div>

          <span className="ml-auto text-sm text-gray-400 font-medium">
            {filtered.length} event{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={28} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">No events found</h3>
            <p className="text-gray-400 text-sm">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(ev => (
              <div key={ev.id} className="card overflow-hidden group">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                      ev.status === 'upcoming' ? 'bg-green-500' : 'bg-gray-600'
                    }`}>
                      {ev.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                    {ev.tags.map(tag => (
                      <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-[#1F2D3C] text-lg mb-3 group-hover:text-[#4E7F90] transition-colors leading-tight">
                    {ev.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{ev.description}</p>

                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={13} className="text-[#4E7F90] shrink-0" />
                      <span>
                        {new Date(ev.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        {ev.endDate !== ev.startDate && ` – ${new Date(ev.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                        , {ev.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={13} className="text-[#4E7F90] shrink-0" />
                      <span>{ev.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Users size={13} className="text-[#4E7F90] shrink-0" />
                      <span>{ev.attendees} Attendees</span>
                    </div>
                  </div>

                  <button className="flex items-center justify-center gap-1.5 btn-navy w-full text-sm py-2.5">
                    Learn More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
