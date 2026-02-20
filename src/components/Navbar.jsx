import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/CISOevents-Logo-R2.png';

const navLinks = [
  { label: 'Events', to: '/events' },
  { label: 'Agenda', to: '/agenda' },
  { label: 'Speakers', to: '/speakers' },
  { label: 'Podcasts', to: '/podcasts' },
  { label: 'Sponsors', to: '/#sponsors' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-[52px] left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md' : ''
    }`} style={{ backgroundColor: 'var(--color-nav-light, #f8fafc)', borderBottom: scrolled ? 'none' : '1px solid rgba(0,0,0,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="CISOevents" className="h-8 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              link.to.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="px-4 py-2 font-medium text-sm transition-colors rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 font-medium text-sm transition-colors rounded-lg ${
                      isActive
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/admin"
              className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors px-3 py-2"
            >
              Admin
            </Link>
            <Link
              to="/events"
              className="flex items-center gap-1.5 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--color-accent)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
            >
              Register Now <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex flex-col gap-1 bg-white">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/admin"
            className="px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors"
          >
            Admin Panel
          </Link>
          <Link
            to="/events"
            className="mt-2 text-white font-semibold px-6 py-3 rounded-lg text-center text-sm transition-all" style={{ backgroundColor: 'var(--color-accent)' }}
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
