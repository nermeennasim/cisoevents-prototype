import { createContext, useContext, useState } from 'react';
import { events as initialEvents } from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [events, setEvents] = useState(initialEvents);
  const [toasts, setToasts] = useState([]);
  const [adminUser, setAdminUser] = useState(null);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const addEvent = (event) => {
    const newEvent = { ...event, id: Date.now() };
    setEvents(prev => [...prev, newEvent]);
    addToast('Event created successfully!');
  };

  const updateEvent = (id, data) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...data } : e));
    addToast('Event updated successfully!');
  };

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
    addToast('Event deleted.', 'error');
  };

  const login = (username, password) => {
    if (username === 'admin' && password === 'ciso2026') {
      setAdminUser({ username, role: 'admin' });
      return true;
    }
    return false;
  };

  const logout = () => setAdminUser(null);

  return (
    <AppContext.Provider value={{
      events, addEvent, updateEvent, deleteEvent,
      toasts, addToast, removeToast,
      adminUser, login, logout,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
