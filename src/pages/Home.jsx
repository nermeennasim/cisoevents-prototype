import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar, MapPin, Users, Mic, Award, ChevronRight,
  Play, ArrowRight, Star, Mail, Shield, CalendarPlus
} from 'lucide-react';
import { events, speakers, podcasts, sponsors, stats } from '../data/mockData';

// ─── Add to Calendar ──────────────────────────────────────────────────────────
function AddToCalendar() {
  const [open, setOpen] = useState(false);

  const title = 'CISOevents 2026';
  const description = 'The premier cybersecurity and AI leadership summit — 500+ security executives, Toronto.';
  const location = 'Metro Toronto Convention Centre, Toronto, Canada';
  const start = '20260828T090000Z';
  const end   = '20260829T180000Z';

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}%2F${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=2026-08-28T09:00:00&enddt=2026-08-29T18:00:00&location=${encodeURIComponent(location)}&body=${encodeURIComponent(description)}`;
  const yahooUrl = `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(title)}&st=${start}&et=${end}&in_loc=${encodeURIComponent(location)}&desc=${encodeURIComponent(description)}`;

  const downloadICS = () => {
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//CISOevents//EN',
      'BEGIN:VEVENT',
      `DTSTART:${start}`, `DTEND:${end}`,
      `SUMMARY:${title}`, `DESCRIPTION:${description}`, `LOCATION:${location}`,
      'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'ciso-events-2026.ics'; a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  const options = [
    { label: '📅  Google Calendar', href: googleUrl, external: true },
    { label: '🍎  Apple Calendar (.ics)', href: null, onClick: downloadICS },
    { label: '📧  Outlook', href: outlookUrl, external: true },
    { label: '🗓  Yahoo Calendar', href: yahooUrl, external: true },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 border-2 text-base px-8 py-3.5 rounded-lg transition-all duration-200 font-semibold" style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'; e.currentTarget.style.borderColor = 'var(--color-accent-hover)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
      >
        <CalendarPlus size={18} /> Add to Calendar
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-2 left-0 z-20 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden w-56">
            {options.map(({ label, href, external, onClick }) =>
              onClick ? (
                <button
                  key={label}
                  onClick={onClick}
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 transition-colors border-b border-gray-50 last:border-0" style={{ '--hover-bg': 'var(--color-hover-5)' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-hover-5)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                >
                  {label}
                </button>
              ) : (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-700 transition-colors border-b border-gray-50 last:border-0" onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-hover-5)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                >
                  {label}
                </a>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-accent-5)' }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-accent2-5)' }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: 'var(--color-accent-10)', borderWidth: '1px', borderColor: 'var(--color-accent-30)', color: 'var(--color-accent)' }}>
            <Star size={13} fill="currentColor" /> Flagship Event · Toronto 2026
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-4" style={{ color: 'var(--color-heading)' }}>
            CISOevents <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))' }}>
              2026 
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-widest mb-6 uppercase" style={{ color: 'var(--color-accent)' }}>
            Discover • Connect • Build
          </p>

          <p className="text-gray-600 text-lg md:text-xl mb-3">
            Join <span className="font-semibold" style={{ color: 'var(--color-heading)' }}>500+ security leaders</span> shaping the future of cybersecurity and AI.
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-base mb-10">
            <Calendar size={17} style={{ color: 'var(--color-accent)' }} />
            <span>August 28–29, 2026</span>
            <span className="mx-2 text-gray-300">|</span>
            <MapPin size={17} style={{ color: 'var(--color-accent)' }} />
            <span>Toronto, Canada</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/events" className="flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: 'var(--color-accent)' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}>
              Register Now <ArrowRight size={18} />
            </Link>
            <AddToCalendar />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const icons = { Users, Mic, Award, Calendar };
  return (
    <section className="py-6" style={{ backgroundColor: 'var(--color-accent)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon }) => {
            const Icon = icons[icon];
            return (
              <div key={label} className="flex items-center justify-center gap-3 text-white">
                <Icon size={22} className="opacity-80" />
                <div>
                  <span className="text-2xl font-black">{value}</span>
                  <span className="ml-2 text-sm font-medium opacity-90">{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── About / Value Prop ───────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>Presented by Neptune Media</p>
          <h2 className="section-title mb-4">More Than a Conference</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            CISOevents isn't just a conference — it's the epicenter for the evolution of Cyber Security &amp; AI.
            Every summit connects you with the industry experts shaping both the AI and Cyber Security industries.
          </p>
        </div>

        {/* AI / Cybersecurity Track */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap px-2" style={{ color: 'var(--color-heading)' }}>
              CISOevents — AI &amp; Cyber Security Track
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                icon: Users,
                title: 'Forge Strategic Partnerships',
                body: 'Network with cybersecurity executive peers, colleagues, and technology providers seeking cutting-edge solutions in AI and Cyber Security. Connect with industry leaders, exchange ideas, and stay at the forefront of cybersecurity and AI excellence.',
              },
              {
                icon: Mic,
                title: 'Speaker Opportunities',
                body: 'Elevate your personal brand as a thought leader with speaking slots and placement during the summit, and partnerships to establish yourself at the forefront of these transformative industries.',
              },
              {
                icon: Shield,
                title: 'Embrace the Power of AI',
                body: 'Discover the latest advancements in artificial intelligence and its applications across cybersecurity and beyond. Learn practical strategies to optimize protection, boost efficiency, and secure your digital future with proactive security measures.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300" style={{ backgroundColor: 'var(--color-bg-alt)', borderColor: 'var(--color-border)' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-accent-30)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-accent-10)' }}>
                  <Icon size={22} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-heading)' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Startup Track */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap px-2" style={{ color: 'var(--color-heading)' }}>
              CISOevents — Startup Track
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
            <h3 className="text-white font-bold text-xl mb-2">Who Should Attend the Investor Conference?</h3>
            <p className="text-gray-400 text-sm mb-8">Built for founders, executives, and capital-seekers ready to accelerate growth.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Executives Seeking Public Listing Guidance',
                  body: 'CEOs, CFOs, and C-Suite leaders from mid-cap companies seeking insights on navigating major exchanges like NYSE and Nasdaq.',
                },
                {
                  title: 'Growth-Stage Companies Seeking Capital',
                  body: 'Founders and executives looking to raise capital for their ventures.',
                },
                {
                  title: 'Investment-Ready Startups',
                  body: 'Startups seeking funding opportunities can pitch directly to attending investors.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="border border-white/10 rounded-xl p-5">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Series */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-500 text-base leading-relaxed">
            This premier CISOevents series expands beyond the US, with gatherings planned in{' '}
            <span className="font-semibold" style={{ color: 'var(--color-heading)' }}>Toronto</span> and{' '}
            <span className="font-semibold" style={{ color: 'var(--color-heading)' }}>London</span>. We consistently attract
            mid-to-large enterprises, providing a platform to connect with a vast and influential audience.
          </p>
        </div>

      </div>
    </section>
  );
}

// ─── Upcoming Events ──────────────────────────────────────────────────────────
function UpcomingEvents() {
  const upcoming = events.filter(e => e.status === 'upcoming').slice(0, 3);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>Don't miss out</p>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">World-class cybersecurity gatherings across the globe</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {upcoming.map(ev => (
            <div key={ev.id} className="card overflow-hidden group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Upcoming
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 transition-colors" style={{ color: 'var(--color-heading)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-heading)'}>{ev.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1.5">
                  <Calendar size={14} style={{ color: 'var(--color-accent)' }} />
                  <span>{new Date(ev.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1.5">
                  <MapPin size={14} style={{ color: 'var(--color-accent)' }} />
                  <span>{ev.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Users size={14} style={{ color: 'var(--color-accent)' }} />
                  <span>{ev.attendees} Attendees</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ev.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <Link
                  to={`/events`}
                  className="flex items-center justify-center gap-1.5 btn-navy w-full text-sm py-2.5"
                >
                  Learn More <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/events" className="btn-cyan inline-flex items-center gap-2">
            View All Events <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Featured Speakers ────────────────────────────────────────────────────────
function FeaturedSpeakers() {
  const featured = speakers.slice(0, 4);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>Industry Leaders</p>
          <h2 className="section-title">Featured Speakers</h2>
          <p className="section-subtitle">Learn from the brightest minds in cybersecurity and AI</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(sp => (
            <Link
              key={sp.id}
              to="/speakers"
              className="group text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="relative mx-auto mb-4 w-24 h-24">
                <img
                  src={sp.photo}
                  alt={sp.name}
                  className="w-24 h-24 rounded-full object-cover border-4 transition-all duration-300" style={{ borderColor: 'var(--color-border)' }}
                />
                <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold ${
                  sp.track === 'AI' ? 'bg-purple-500' :
                  sp.track === 'Startup' ? 'bg-orange-500' : 'bg-blue-500'
                }`}>
                  {sp.track[0]}
                </div>
              </div>
              <h3 className="font-bold text-sm transition-colors" style={{ color: 'var(--color-heading)' }}>{sp.name}</h3>
              <p className="text-gray-500 text-xs mt-0.5">{sp.title}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--color-accent)' }}>{sp.company}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/speakers" className="btn-navy inline-flex items-center gap-2">
            Meet All Speakers <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Latest Podcasts ──────────────────────────────────────────────────────────
function LatestPodcasts() {
  const latest = podcasts.slice(0, 3);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>On-Demand</p>
          <h2 className="section-title">Latest Podcasts</h2>
          <p className="section-subtitle">Expert conversations on the topics that matter most</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {latest.map(pod => (
            <div key={pod.id} className="card overflow-hidden group">
              <div className="relative overflow-hidden h-44 bg-gray-900">
                <img
                  src={pod.thumbnail}
                  alt={pod.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'var(--color-accent)' }}>
                    <Play size={22} fill="white" className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-0.5 rounded">
                  {pod.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm leading-snug mb-2 transition-colors line-clamp-2" style={{ color: 'var(--color-heading)' }}>
                  {pod.title}
                </h3>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{pod.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{pod.views} views</span>
                  <Link to="/podcasts" className="text-xs font-semibold hover:underline flex items-center gap-1" style={{ color: 'var(--color-accent)' }}>
                    Watch <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/podcasts" className="btn-navy inline-flex items-center gap-2">
            View All Podcasts <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Sponsors ─────────────────────────────────────────────────────────────────
function Sponsors() {
  const { platinum, gold, silver } = sponsors;
  const SponsorsRow = ({ tier, items, color }) => (
    <div className="mb-8">
      <div className="text-center mb-4">
        <span className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${color}`}>
          {tier}
        </span>
      </div>
      <div className={`flex flex-wrap justify-center gap-4 ${tier === 'Platinum' ? 'gap-6' : tier === 'Gold' ? 'gap-5' : 'gap-3'}`}>
        {items.map(sp => (
          <div
            key={sp.id}
            className={`flex items-center justify-center bg-white border border-gray-200 rounded-xl font-bold hover:shadow-md transition-all duration-200 cursor-pointer ${
              tier === 'Platinum' ? 'w-40 h-16 text-sm' :
              tier === 'Gold' ? 'w-32 h-12 text-xs' :
              'w-28 h-10 text-xs'
            }`}
            style={{ color: 'var(--color-heading)', borderColor: 'var(--color-border)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
          >
            {sp.name}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>Our Partners</p>
          <h2 className="section-title">Event Sponsors</h2>
          <p className="section-subtitle">Proud to be supported by industry-leading organisations</p>
        </div>
        <SponsorsRow tier="Platinum" items={platinum} color="bg-gray-900 text-white" />
        <SponsorsRow tier="Gold" items={gold} color="bg-amber-500 text-white" />
        <SponsorsRow tier="Silver" items={silver} color="bg-gray-400 text-white" />
        <div className="text-center mt-10">
          <a href="mailto:sponsor@cisoevents.com" className="inline-flex items-center gap-2 border-2 font-semibold px-6 py-3 rounded-lg transition-all" style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--color-accent)'; }}>
            Become a Sponsor <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--color-dark-bg), var(--color-gradient-end, #2a4a5e))' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--color-accent-20)' }}>
          <Mail size={26} style={{ color: 'var(--color-accent)' }} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Stay in the Loop</h2>
        <p className="text-gray-400 mb-8">
          Get early access to speaker announcements, agenda drops, and exclusive member-only content.
        </p>
        {sent ? (
          <div className="bg-green-500/20 border border-green-500/40 text-green-400 px-6 py-4 rounded-xl font-medium">
            You're subscribed! Watch your inbox for updates.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent" style={{ '--tw-ring-color': 'var(--color-accent)' }}
            />
            <button type="submit" className="btn-primary whitespace-nowrap px-7 py-3">
              Subscribe Free
            </button>
          </form>
        )}
        <p className="text-gray-600 text-xs mt-4">No spam, unsubscribe anytime. Privacy Policy applies.</p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <UpcomingEvents />
      <FeaturedSpeakers />
      <LatestPodcasts />
      <Sponsors />
      <Newsletter />
    </>
  );
}
