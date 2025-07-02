import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase/supabase';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '../../ui/sheet';
import { Button } from '../../ui/button';

// --- ICONS ---
const HomeIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" /> </svg> );
const CompassIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h-2zm0 6h2v2h-2zM7.5 10.5l1.41-1.41L12 12.12l3.09-3.03L16.5 10.5 12 15l-4.5-4.5z" /> </svg> );
const HistoryIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" /> </svg> );
const VideoIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor" > <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8z"/> </svg> );
const SettingsIcon = ({ className = "w-5 h-5" }) => ( <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg> );
const HamburgerIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> );
const SearchIcon = ({ className = "w-5 h-5" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> );
const UserCircleIcon = ({ className = "w-8 h-8" }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 13a4 4 0 104 0H8z" clipRule="evenodd" /> </svg> );
const LogoutIcon = ({ className = "w-5 h-5" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path> </svg> );
const DashboardIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg> );
const BellIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg> );
const PlusIcon = ({ className = "w-5 h-5" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> );
const PhotoIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v12H4zM4 4l8 6 8-6"/></svg> );
const MusicNoteIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l12-2v13M9 18a3 3 0 100-6 3 3 0 000 6z"/></svg> );
const DocumentTextIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg> );
const UsersIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.134-1.28-.38-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.134-1.28.38-1.857M12 12a3 3 0 100-6 3 3 0 000 6zM12 12v6m0-6H9m3 0h3"/></svg> );

// --- DATA ---
const platformLinks = [
  { icon: <HomeIcon />, text: 'Home', url: '/' },
  { icon: <CompassIcon />, text: 'Explore', url: '/explore' },
  { icon: <PhotoIcon />, text: 'Photos', url: '/photos' },
  { icon: <VideoIcon />, text: 'Videos', url: '/videos' },
  { icon: <MusicNoteIcon />, text: 'Audio', url: '/audio' },
  { icon: <DocumentTextIcon />, text: 'Words', url: '/words' },
];
const accountLinks = [ { icon: <DashboardIcon />, text: 'Dashboard', url: 'creator/dashboard' }, { icon: <HistoryIcon />, text: 'Profile', url: '/creator/[]' }, { icon: <VideoIcon />, text: 'Your Content', url: '/content/my-videos' }, ];

// UPDATED: This array is now treated as the user's subscriptions.
// It's empty to show the placeholder.
const communitiesLinks = [];

// --- COMPONENTS ---

const NavItem = ({ icon, text, url, isExpanded, pathname }) => {
    const isActive = pathname === url;
    return (
        <a href={url} title={isExpanded ? '' : text} className={`flex items-center py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${ isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' } ${isExpanded ? 'px-4' : 'justify-center'}`} >
            {React.cloneElement(icon, { className: "w-6 h-6 shrink-0" })}
            <span className={`overflow-hidden transition-all whitespace-nowrap ${isExpanded ? 'w-full ml-4' : 'w-0'}`}>{text}</span>
        </a>
    );
};

// ADDED: A placeholder component for the empty communities section.
const CommunitiesPlaceholder = ({ isExpanded }) => {
    if (!isExpanded) {
        // When collapsed, show a single, consistent icon item
        return (
            <NavItem
                icon={<UsersIcon />}
                text="Browse Communities"
                url="/community"
                isExpanded={false}
            />
        );
    }
    // When expanded, show a more detailed placeholder with a button
    return (
        <div className="px-4 py-2 text-center text-sm text-gray-400">
            <p className="mb-3">Subscribe to communities to see them here.</p>
            <Button asChild className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium">
               <a href="/community">
                 Browse Communities
               </a>
            </Button>
        </div>
    );
};

const SidebarFooter = ({ session, onLogout, isExpanded, onUserMenuToggle }) => (
    <div className="p-4 border-t border-gray-700 flex-shrink-0">
        {session ? (
            <DropdownMenu onOpenChange={onUserMenuToggle}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start p-2 h-auto text-white hover:bg-gray-700 hover:text-white">
                        <div className="flex items-center gap-3 w-full">
                            <UserCircleIcon className="h-10 w-10 text-gray-400 flex-shrink-0" />
                            <div className={`text-left overflow-hidden transition-all ${isExpanded ? "w-full opacity-100" : "w-0 opacity-0"}`}>
                                <p className="text-sm font-medium leading-none truncate">{session.user.email}</p>
                            </div>
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mb-2 bg-gray-800 border-gray-700 text-gray-300" side="top" align="start">
                    <DropdownMenuLabel className="font-normal">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem asChild><a href="/settings" className="flex items-center cursor-pointer focus:bg-gray-700"><SettingsIcon className="mr-2 h-4 w-4" /><span>Settings</span></a></DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem onClick={onLogout} className="text-red-400 cursor-pointer focus:bg-gray-700 focus:text-red-300">
                        <LogoutIcon className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ) : (
            <div className={`flex items-center transition-all ${isExpanded ? 'gap-2 flex-row' : 'gap-4 flex-col'}`}>
                <a href="/register" className={`w-full text-center px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-full hover:bg-gray-800 transition`}>
                    {isExpanded ? 'Log In' : 'In'}
                </a>
                <a href="/register" className={`w-full text-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition`}>
                    {isExpanded ? 'Sign Up' : 'Up'}
                </a>
            </div>
        )}
    </div>
);

const Header = ({ onMobileMenuClick }) => (
    <header className="h-16 bg-gray-950 text-white flex items-center z-10 border-b border-gray-700 flex-shrink-0 px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={onMobileMenuClick}>
              <HamburgerIcon />
          </Button>
        </div>
        <a href="/" aria-label="Go to Homepage" className="items-center gap-3 hidden lg:flex">
          <img src="/meat_logo.png" alt="Machine Creativity Logo" className="h-8 w-auto flex-shrink-0" />
        </a>
      </div>
      <div className="flex-1 flex justify-center px-4 lg:px-8">
        <div className="w-full max-w-lg relative">
            <input type="search" placeholder="Search..." className="w-full bg-gray-800 border border-gray-700 text-white rounded-full py-2.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 transition"/>
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-gray-400 hover:text-white">
                <SearchIcon />
            </button>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="hidden lg:flex items-center gap-2">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full text-sm px-4 py-2 flex items-center">
                <PlusIcon className="mr-1.5 h-5 w-5" />
                <span>Create</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
                <BellIcon className="h-6 w-6" />
            </Button>
        </div>
      </div>
    </header>
);

// UPDATED: SidebarContent now renders the placeholder conditionally
const SidebarContent = ({ isExpanded, pathname }) => (
    <div className="p-2">
        <div className="space-y-1">
             <h3 className={`px-4 mt-2 mb-1 text-sm font-semibold tracking-tight text-gray-500 transition-all ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 p-0'}`}>
                Platform
            </h3>
            {platformLinks.map(link => <NavItem key={link.text} {...link} isExpanded={isExpanded} pathname={pathname} />)}
        </div>
        <div className="border-t border-gray-700 my-4"></div>
        <div className="space-y-1">
            <h3 className={`px-4 mb-1 text-sm font-semibold tracking-tight text-gray-500 transition-all ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 p-0'}`}>
                Account
            </h3>
            {accountLinks.map(link => <NavItem key={link.text} {...link} isExpanded={isExpanded} pathname={pathname} />)}
        </div>
        <div className="border-t border-gray-700 my-4"></div>
        <div className="space-y-1">
            <h3 className={`px-4 mb-1 text-sm font-semibold tracking-tight text-gray-500 transition-all ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 p-0'}`}>
                Communities
            </h3>
            {communitiesLinks.length > 0 ? (
                communitiesLinks.map(link => <NavItem key={link.text} {...link} isExpanded={isExpanded} pathname={pathname} />)
            ) : (
                <CommunitiesPlaceholder isExpanded={isExpanded} />
            )}
        </div>
    </div>
);

const DesktopSidebar = ({ isExpanded, onMouseEnter, onMouseLeave, pathname, session, onLogout, onUserMenuToggle }) => (
    <aside
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`bg-gray-900 text-white h-full flex flex-col border-r border-gray-700 transition-all duration-300 ease-in-out hidden lg:flex ${isExpanded ? 'w-64' : 'w-24'}`}
    >
        <div className="flex-1 overflow-y-auto pt-4">
            <SidebarContent isExpanded={isExpanded} pathname={pathname} />
        </div>
        <SidebarFooter 
          session={session} 
          onLogout={onLogout} 
          isExpanded={isExpanded}
          onUserMenuToggle={onUserMenuToggle}
        />
    </aside>
);

export default function AppLayout({ children, pathname }) {
  const [session, setSession] = useState(null);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  const [isMenuLockedOpen, setIsMenuLockedOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };
  
  const handleMouseEnter = () => setIsHoverExpanded(true);
  const handleMouseLeave = () => setIsHoverExpanded(false);

  const isSidebarExpanded = isHoverExpanded || isMenuLockedOpen;

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white overflow-hidden">
      <Sheet>
        <Header onMobileMenuClick={() => document.querySelector('[data-radix-collection-item]').click()} />
        
        <div className="flex flex-1 overflow-hidden">
          <DesktopSidebar 
              isExpanded={isSidebarExpanded}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              pathname={pathname}
              session={session}
              onLogout={handleLogout}
              onUserMenuToggle={setIsMenuLockedOpen}
          />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
              {children}
          </main>
        </div>
        
        <SheetContent side="left" className="bg-gray-900 text-white p-0 w-64 border-r-gray-800 flex flex-col">
            <div className="h-16 flex items-center p-4 border-b border-gray-700 flex-shrink-0">
              <a href="/" aria-label="Go to Homepage" className="flex items-center gap-3 w-full">
                  <img src="/meat_logo.png" alt="Machine Creativity Logo" className="h-8 w-auto flex-shrink-0" />
                  <h1 className="font-bold text-white text-lg whitespace-nowrap">Meat-Machine</h1>
              </a>
            </div>
            <div className="flex-1 overflow-y-auto">
                <SidebarContent isExpanded={true} pathname={pathname} />
            </div>
            <SidebarFooter 
              session={session} 
              onLogout={handleLogout} 
              isExpanded={true} 
              onUserMenuToggle={() => {}}
            />
        </SheetContent>
      </Sheet>
    </div>
  );
}