// src/components/react/ui/AppLayout.jsx
import React, { useState, useEffect } from 'react';
import { authApi } from '@/lib/api';
import {
  HomeIcon, CompassIcon, VideoIcon, PhotoIcon, MusicIcon, DocumentIcon,
  DashboardIcon, UserIcon, SettingsIcon, MenuIcon, CloseIcon,
  SearchIcon, BellIcon, PlusIcon, LogoutIcon
} from './icons';

// Navigation links
const navLinks = [
  { icon: HomeIcon, label: 'Home', href: '/' },
  { icon: CompassIcon, label: 'Explore', href: '/explore' },
  { icon: PhotoIcon, label: 'Photos', href: '/photos' },
  { icon: VideoIcon, label: 'Videos', href: '/videos' },
  { icon: MusicIcon, label: 'Audio', href: '/audio' },
  { icon: DocumentIcon, label: 'Words', href: '/words' },
];

const accountLinks = [
  { icon: DashboardIcon, label: 'Dashboard', href: '/creator/dashboard' },
  { icon: UserIcon, label: 'Profile', href: '/creator/profile' },
  { icon: SettingsIcon, label: 'Settings', href: '/settings' },
];

// Nav Item Component
function NavItem({ icon: Icon, label, href, isActive, expanded }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
        isActive
          ? 'bg-gray-700 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {expanded && <span className="text-sm font-medium">{label}</span>}
    </a>
  );
}

// Desktop Sidebar
function Sidebar({ pathname, user, onLogout, expanded, onMouseEnter, onMouseLeave }) {
  return (
    <aside
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`hidden lg:flex flex-col h-full bg-gray-900 border-r border-gray-800 transition-all duration-200 ${
        expanded ? 'w-56' : 'w-16'
      }`}
    >
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navLinks.map((link) => (
          <NavItem
            key={link.href}
            {...link}
            isActive={pathname === link.href}
            expanded={expanded}
          />
        ))}

        <div className="my-4 border-t border-gray-800" />

        {accountLinks.map((link) => (
          <NavItem
            key={link.href}
            {...link}
            isActive={pathname === link.href}
            expanded={expanded}
          />
        ))}
      </nav>

      {/* User section */}
      <div className="p-3 border-t border-gray-800">
        {user ? (
          <button
            onClick={onLogout}
            className="flex items-center gap-3 w-full px-3 py-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <LogoutIcon className="w-5 h-5" />
            {expanded && <span className="text-sm">Log out</span>}
          </button>
        ) : (
          <a
            href="/register"
            className={`block text-center py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-sm font-medium transition-colors ${
              expanded ? 'px-4' : 'px-2'
            }`}
          >
            {expanded ? 'Sign Up' : '→'}
          </a>
        )}
      </div>
    </aside>
  );
}

// Mobile Menu Overlay
function MobileMenu({ isOpen, onClose, pathname, user, onLogout }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 z-50 lg:hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <a href="/" className="flex items-center gap-2">
            <img src="/meat_logo.png" alt="Logo" className="h-8 w-auto" />
          </a>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              {...link}
              isActive={pathname === link.href}
              expanded={true}
            />
          ))}

          <div className="my-4 border-t border-gray-800" />

          {accountLinks.map((link) => (
            <NavItem
              key={link.href}
              {...link}
              isActive={pathname === link.href}
              expanded={true}
            />
          ))}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-gray-800">
          {user ? (
            <div className="space-y-3">
              <div className="text-sm text-gray-400 truncate">{user.email}</div>
              <button
                onClick={() => { onLogout(); onClose(); }}
                className="flex items-center gap-2 w-full px-3 py-2 text-red-400 hover:bg-gray-800 rounded-lg"
              >
                <LogoutIcon className="w-5 h-5" />
                <span>Log out</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <a
                href="/register"
                className="block text-center py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-sm font-medium"
              >
                Sign Up
              </a>
              <a
                href="/login"
                className="block text-center py-2 border border-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm"
              >
                Log In
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Header
function Header({ onMenuOpen }) {
  return (
    <header className="h-14 bg-gray-950 border-b border-gray-800 flex items-center px-4 gap-4">
      {/* Mobile menu button */}
      <button
        onClick={onMenuOpen}
        className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src="/meat_logo.png" alt="Logo" className="h-8 w-auto" />
      </a>

      {/* Search */}
      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-gray-900 border border-gray-700 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
            <SearchIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
          <BellIcon className="w-5 h-5" />
        </button>
        <a
          href="/create"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm font-medium"
        >
          <PlusIcon className="w-4 h-4" />
          <span>Create</span>
        </a>
      </div>
    </header>
  );
}

// Main Layout
export default function AppLayout({ children, pathname }) {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    authApi.me()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (e) {}
    setUser(null);
    window.location.href = '/';
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white">
      <Header onMenuOpen={() => setMobileMenuOpen(true)} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          pathname={pathname}
          user={user}
          onLogout={handleLogout}
          expanded={sidebarExpanded}
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
        user={user}
        onLogout={handleLogout}
      />
    </div>
  );
}
