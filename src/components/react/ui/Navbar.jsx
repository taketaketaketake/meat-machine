import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/supabase';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";


// --- SVG Icon Components (No changes needed) ---
const HomeIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" /> </svg> );
const CompassIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h-2zm0 6h2v2h-2zM7.5 10.5l1.41-1.41L12 12.12l3.09-3.03L16.5 10.5 12 15l-4.5-4.5z" /> </svg> );
const SubscriptionsIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z" /> </svg> );
const HistoryIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" /> </svg> );
const VideoIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor" > <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8z"/> </svg> );
const WatchLaterIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor" > <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.25 12.15L11 11.49v-5h2v4.1l4.5 2.65-1.25 2.4z"/> </svg> );
const FireIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor" > <path d="M17.63 7.84C17.27 7.32 16.63 7 16 7s-1.27.32-1.63.84L12 12.17l-2.37-4.33C9.27 7.32 8.63 7 8 7s-1.27.32-1.63.84l-3.37 6.1c-.38.68-.38 1.52 0 2.2l3.37 6.1c.36.52.99.85 1.63.85s1.27-.32 1.63-.84L12 13.83l2.37 4.33c.36.52.99.85 1.63.85s1.27-.32 1.63-.84l3.37-6.1c-.38-.68-.38-1.52 0-2.2l-3.37-6.1zM11.33 13L10 15.27 8.67 13 10 10.73 11.33 13zm3.34 0L16 10.73 17.33 13 16 15.27 14.67 13z"/> </svg> );
const ShoppingBagIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor" > <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/> </svg> );
const ChevronDownIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /> </svg> );
const ChevronUpIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" /> </svg> );
const HamburgerIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> );
const SearchIcon = ({ className = "w-5 h-5" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> );
const UserCircleIcon = ({ className = "w-8 h-8" }) => ( <svg className={className} fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 13a4 4 0 104 0H8z" clipRule="evenodd" /> </svg> );
const LogoutIcon = ({ className = "w-5 h-5" }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path> </svg> );
const DashboardIcon = ({ className = "w-6 h-6" }) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg> );

// --- Header Component (Corrected) ---
const Header = ({ session, onLogout }) => {
    return (
        <header className="bg-gray-950 text-white p-4 flex items-center justify-between z-40">
            <div className="flex items-center">
              <a href="/" aria-label="Go to Homepage">
                <img src="/meat_logo.png" alt="Machine Creativity Logo" className="h-8 w-auto" />
              </a>
            </div>
            <div className="flex-1 flex justify-center px-4 lg:px-16">
                <div className="w-full max-w-2xl relative">
                    <input type="search" placeholder="Search..." className="w-full bg-gray-800 border border-gray-700 text-white rounded-full py-2.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 transition"/>
                    <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-gray-400 hover:text-white">
                        <SearchIcon />
                    </button>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                {session ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-gray-900">
                                <UserCircleIcon className="h-8 w-8 text-gray-400 hover:text-white" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700 text-gray-300" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">My Account</p>
                                    {session.user.email && <p className="text-xs leading-none text-gray-400">{session.user.email}</p>}
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem asChild>
                                <a href="/creator/dashboard" className="flex items-center cursor-pointer focus:bg-gray-700">
                                    <DashboardIcon className="mr-2 h-4 w-4" />
                                    <span>Dashboard</span>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="/creator/settings" className="flex items-center cursor-pointer focus:bg-gray-700">
                                    <LogoutIcon className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem onClick={onLogout} className="text-red-400 cursor-pointer focus:bg-gray-700">
                                <LogoutIcon className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <div className="flex items-center space-x-2">
                        <a href="/login" className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-full hover:bg-gray-800 transition">
                            Log In
                        </a>
                        <a href="/register" className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition">
                            Sign Up
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

// --- Main Layout Component ---
export default function Navbar({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const mainLinks = [ 
    { icon: <HomeIcon />, text: 'Home', url: '/' }, 
    { icon: <CompassIcon />, text: 'Explore', url: '/explore' }, 
    { icon: <SubscriptionsIcon />, text: 'Subscriptions', url: '/feed/subscriptions' }, 
  ];
  
  const secondaryLinks = [ 
    { icon: <DashboardIcon />, text: 'Dashboard', url: '/dashboard' },
    { icon: <HistoryIcon />, text: 'History', url: '/feed/history' }, 
    { icon: <VideoIcon />, text: 'Your Videos', url: '/content/my-videos' }, 
    { icon: <WatchLaterIcon />, text: 'Watch Later', url: '/playlist/watch-later' }, 
  ];
  
  const moreLinks = [ 
      { icon: <FireIcon />, text: 'Trending', url: '/feed/trending'},
      { icon: <ShoppingBagIcon />, text: 'Shopping', url: '/shopping'},
  ];
  const subscriptions = [ 
    { name: 'Awesome Channel', avatar: 'bg-indigo-500', url: '/content/videos' },
    { name: 'CodeWizard', avatar: 'bg-pink-500', url: '/@codewizard' },
    { name: 'DesignMasters', avatar: 'bg-green-500', url: '/@designmasters' }
  ];
  
  const footerLinks = [ 'About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers' ];
  const footerLinks2 = [ 'Terms', 'Privacy', 'Policy & Safety', 'How YouTube works', 'Test new features' ];

  const NavItem = ({ icon, text, isActive, isExpanded, url }) => ( 
    <a href={url} title={isExpanded ? '' : text} className={`flex items-center py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${ isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' } ${isExpanded ? 'px-4' : 'justify-center'}`} > 
      {React.cloneElement(icon, { className: "w-6 h-6 shrink-0" })} 
      <span className={`overflow-hidden transition-all whitespace-nowrap ${isExpanded ? 'w-full ml-4' : 'w-0'}`}>{text}</span> 
    </a> 
  );
  
  const SubscriptionItem = ({ name, avatar, isExpanded, url }) => ( 
    <a href={url} title={isExpanded ? '' : name} className={`flex items-center text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 group ${isExpanded ? 'px-4 py-2' : 'justify-center py-2'}`} > 
      <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white ${avatar}`}> {name.charAt(0)} </div> 
      <span className={`overflow-hidden transition-all whitespace-nowrap ${isExpanded ? 'w-full ml-4' : 'w-0'}`}>{name}</span> 
    </a> 
  );

  return (
    <div className="flex bg-gray-950">
        <aside 
          onMouseEnter={() => setIsSidebarExpanded(true)}
          onMouseLeave={() => setIsSidebarExpanded(false)}
          className={`h-screen bg-gray-900 text-white flex flex-col fixed top-0 left-0 overflow-y-auto z-50 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'w-64' : 'w-20'}`}
        >
            <div className="flex items-center justify-center h-16 shrink-0 border-b border-gray-700">
                <button className="p-2 rounded-full hover:bg-gray-700">
                    <HamburgerIcon />
                </button>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              {mainLinks.map((link) => ( 
                <NavItem 
                  key={link.text} 
                  icon={link.icon} 
                  text={link.text} 
                  isExpanded={isSidebarExpanded} 
                  url={link.url}
                  isActive={link.text === 'Home'}
                /> 
              ))}

              <div className="border-t border-gray-700 my-4"></div>

              {isSidebarExpanded && <h2 className="px-4 pt-2 pb-1 text-sm font-semibold text-gray-500 tracking-wider">You</h2>}

              {secondaryLinks.map((link) => ( 
                <NavItem 
                  key={link.text} 
                  icon={link.icon} 
                  text={link.text} 
                  isExpanded={isSidebarExpanded} 
                  url={link.url}
                /> 
              ))}

              {isSidebarExpanded && ( <> <div className={`${showMore ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-all duration-300`}> <div className='space-y-1'> 
                {moreLinks.map((link) => ( 
                  <NavItem 
                    key={link.text} 
                    icon={link.icon} 
                    text={link.text} 
                    isExpanded={isSidebarExpanded} 
                    url={link.url}
                  /> 
                ))} 
              </div> </div> <button onClick={() => setShowMore(!showMore)} className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white" > {showMore ? <ChevronUpIcon className="w-6 h-6 mr-4" /> : <ChevronDownIcon className="w-6 h-6 mr-4" />} <span>{showMore ? 'Show less' : 'Show more'}</span> </button> </> )}

              <div className="border-t border-gray-700 my-4"></div>

              {isSidebarExpanded && <h2 className="px-4 pt-2 pb-1 text-sm font-semibold text-gray-500 tracking-wider">Subscriptions</h2>}
              
              {subscriptions.map(sub => <SubscriptionItem key={sub.name} {...sub} isExpanded={isSidebarExpanded} />)}

            </nav>
            {isSidebarExpanded && ( <div className="px-6 py-4 border-t border-gray-700 shrink-0"> <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold text-gray-500"> {footerLinks.map(link => <a key={link} href="#" className="hover:text-gray-300">{link}</a>)} </div> <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-xs font-semibold text-gray-500"> {footerLinks2.map(link => <a key={link} href="#" className="hover:text-gray-300">{link}</a>)} </div> <p className="mt-4 text-xs text-gray-600">&copy; {new Date().getFullYear()} Meat Corp.</p> </div> )}
        </aside>

        <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}>
            <Header session={session} onLogout={handleLogout} />
            <main className="flex-1 p-6 lg:p-8">
                {children}
            </main>
        </div>
    </div>
  );
}