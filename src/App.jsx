import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ThemeSwitcher from './components/ThemeSwitcher';

// Public pages
import Home from './pages/Home';
import Events from './pages/Events';
import Agenda from './pages/Agenda';
import Speakers from './pages/Speakers';
import Podcasts from './pages/Podcasts';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEvents from './pages/admin/AdminEvents';
import AdminEventForm from './pages/admin/AdminEventForm';
import {
  AdminSpeakers,
  AdminAgenda,
  AdminPodcasts,
  AdminSponsors,
} from './pages/admin/AdminSimple';

// Public layout wrapper (Navbar + Footer)
function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

// Guard for admin routes
function RequireAuth({ children }) {
  const { adminUser } = useApp();
  if (!adminUser) return <Navigate to="/admin" replace />;
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/events" element={<PublicLayout><Events /></PublicLayout>} />
      <Route path="/agenda" element={<PublicLayout><Agenda /></PublicLayout>} />
      <Route path="/speakers" element={<PublicLayout><Speakers /></PublicLayout>} />
      <Route path="/podcasts" element={<PublicLayout><Podcasts /></PublicLayout>} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
      <Route path="/admin/events" element={<RequireAuth><AdminEvents /></RequireAuth>} />
      <Route path="/admin/events/new" element={<RequireAuth><AdminEventForm /></RequireAuth>} />
      <Route path="/admin/events/edit/:id" element={<RequireAuth><AdminEventForm /></RequireAuth>} />
      <Route path="/admin/speakers" element={<RequireAuth><AdminSpeakers /></RequireAuth>} />
      <Route path="/admin/agenda" element={<RequireAuth><AdminAgenda /></RequireAuth>} />
      <Route path="/admin/podcasts" element={<RequireAuth><AdminPodcasts /></RequireAuth>} />
      <Route path="/admin/sponsors" element={<RequireAuth><AdminSponsors /></RequireAuth>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeSwitcher />
        <AppRoutes />
        <Toast />
      </AppProvider>
    </BrowserRouter>
  );
}
