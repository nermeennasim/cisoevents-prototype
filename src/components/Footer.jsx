import { Link } from 'react-router-dom';
import { Phone, MapPin, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import logo from '../assets/CISOevents-Logo-R2.png';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-dark-bg)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="CISOevents" className="h-7 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              The premier platform connecting cybersecurity and AI leaders through world-class events, podcasts, and community.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-accent)' }}>Follow Us</p>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/cisoevents', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://x.com/cisoevents', label: 'X / Twitter' },
                { Icon: Youtube, href: 'https://www.youtube.com/@horizonsummit/featured', label: 'YouTube' },
                { Icon: Facebook, href: 'https://www.facebook.com/cisoevents', label: 'Facebook' },
                { Icon: InstagramIcon, href: 'https://www.instagram.com/cisoevents', label: 'Instagram' },
                { Icon: WhatsAppIcon, href: 'https://call.whatsapp.com/voice/raAu2mPWQE8pJp9BS00HZl', label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200"
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--color-accent)' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Upcoming Events', to: '/events' },
                { label: 'Event Agenda', to: '/agenda' },
                { label: 'Speakers', to: '/speakers' },
                { label: 'Podcasts', to: '/podcasts' },
                { label: 'Become a Sponsor', to: '/#sponsors' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--color-accent)' }}>Upcoming Events</h4>
            <ul className="space-y-3">
              {[
                { name: 'Spring Forum 2026', date: 'Mar 15-16 · London' },
                { name: 'CISOevents 2026', date: 'Aug 28-29 · Toronto' },
                { name: 'Winter Summit 2026', date: 'Dec 10 · New York' },
              ].map(ev => (
                <li key={ev.name}>
                  <Link to="/events" className="group block">
                    <span className="text-white text-sm font-medium transition-colors" onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={e => e.currentTarget.style.color = '#fff'}>{ev.name}</span>
                    <span className="block text-gray-500 text-xs mt-0.5">{ev.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--color-accent)' }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                <a href="tel:+13212362561" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +1-(321)-236-2561
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                <span className="text-gray-400 text-sm">Neptune Media<br />Wyoming 82801</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 CISOevents | Neptune Media
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
