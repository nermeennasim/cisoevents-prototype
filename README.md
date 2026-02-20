# CISO Events — Prototype Website

A modern, responsive prototype website for **CISO Events** — a platform for cybersecurity leadership summits, conferences, and networking events.

Built as a client preview with **3 switchable color themes** so the client can choose their preferred look and feel.

---

## 🎨 Theme Options

| Theme | Background | Accent | Style |
|-------|-----------|--------|-------|
| **Option A** | Dark Navy `#0A0E1A` | Electric Blue `#00A8FF` | Bold & techy |
| **Option B** | Deep Charcoal `#1C1C1E` | Gold `#C9A84C` | Premium & executive |
| **Option C** | Dark Slate `#0F2027` | Teal `#00BFA5` | Clean & modern |

A **Theme Switcher** bar is pinned to the top of the page, allowing instant switching between all three options.

---

## 📄 Pages

- **Home** — Hero section, stats, about, featured events, speakers, podcasts, sponsors, newsletter signup
- **Events** — Filterable event listings with category tags and registration CTAs
- **Speakers** — Speaker directory with bios, expertise tags, and modal details
- **Agenda** — Multi-day conference agenda with track filtering and session details
- **Podcasts** — Podcast library with episode cards and playback UI

---

## 🛠 Tech Stack

- **React 19** + **Vite** — Fast dev server & build
- **Tailwind CSS 3** — Utility-first styling
- **CSS Custom Properties** — Theme system via `data-theme` attribute on `<html>`
- **React Router 7** — Client-side routing
- **Lucide React** — Icon library

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation bar
│   ├── Footer.jsx          # Site footer
│   ├── ThemeSwitcher.jsx   # Theme A/B/C toggle bar
│   ├── SpeakerModal.jsx    # Speaker detail modal
│   └── Toast.jsx           # Toast notifications
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Events.jsx          # Events listing
│   ├── Speakers.jsx        # Speaker directory
│   ├── Agenda.jsx          # Conference agenda
│   └── Podcasts.jsx        # Podcast library
├── context/
│   └── AppContext.jsx       # Global app state
├── data/
│   └── mockData.js          # Sample event/speaker data
├── index.css                # Theme variables & global styles
├── App.jsx                  # Root component with routing
└── main.jsx                 # Entry point
```

---

## 📝 License

See [LICENSE](LICENSE) for details.
