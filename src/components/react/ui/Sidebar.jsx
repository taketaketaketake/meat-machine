import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet';
import { HomeIcon, CompassIcon, SubscriptionsIcon, DashboardIcon, HistoryIcon, VideoIcon, WatchLaterIcon, FireIcon, ShoppingBagIcon, ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from './Icons';

const mainLinks = [ { icon: <HomeIcon />, text: 'Home', url: '/' }, { icon: <CompassIcon />, text: 'Explore', url: '/explore' }, { icon: <SubscriptionsIcon />, text: 'Subscriptions', url: '/feed/subscriptions' }, ];
const secondaryLinks = [ { icon: <DashboardIcon />, text: 'Dashboard', url: '/dashboard' }, { icon: <HistoryIcon />, text: 'History', url: '/feed/history' }, { icon: <VideoIcon />, text: 'Your Videos', url: '/content/my-videos' }, { icon: <WatchLaterIcon />, text: 'Watch Later', url: '/playlist/watch-later' }, ];
const moreLinks = [ { icon: <FireIcon />, text: 'Trending', url: '/feed/trending'}, { icon: <ShoppingBagIcon />, text: 'Shopping', url: '/shopping'}, ];
const subscriptions = [ { name: 'Awesome Channel', avatar: 'bg-indigo-500', url: '/content/videos' }, { name: 'CodeWizard', avatar: 'bg-pink-500', url: '/@codewizard' }, { name: 'DesignMasters', avatar: 'bg-green-500', url: '/@designmasters' } ];

const NavItem = ({ icon, text, url, isExpanded, pathname }) => {
    const isActive = pathname === url;
    return (
        <a href={url} title={isExpanded ? '' : text} className={`flex items-center py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${ isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' } ${isExpanded ? 'px-4' : 'justify-center'}`} >
            {React.cloneElement(icon, { className: "w-6 h-6 shrink-0" })}
            <span className={`overflow-hidden transition-all whitespace-nowrap ${isExpanded ? 'w-full ml-4' : 'w-0'}`}>{text}</span>
        </a>
    );
};

const SubscriptionItem = ({ name, avatar, url, isExpanded = true }) => (
    <a href={url} title={isExpanded ? '' : name} className={`flex items-center text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 group ${isExpanded ? 'px-4 py-2' : 'justify-center py-2'}`} >
        <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white ${avatar}`}> {name.charAt(0)} </div>
        <span className={`overflow-hidden transition-all whitespace-nowrap ${isExpanded ? 'w-full ml-4' : 'w-0'}`}>{name}</span>
    </a>
);

const SidebarContent = ({ isExpanded, pathname }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <nav className="flex-1 px-2 py-4 space-y-1">
                {mainLinks.map((link) => (
                    <NavItem key={link.text} {...link} isExpanded={isExpanded} pathname={pathname} />
                ))}
                <div className="border-t border-gray-700 my-4"></div>
                {isExpanded && <h2 className="px-4 pt-2 pb-1 text-sm font-semibold text-gray-500 tracking-wider">You</h2>}
                {secondaryLinks.map((link) => (
                    <NavItem key={link.text} {...link} isExpanded={isExpanded} pathname={pathname} />
                ))}
                {isExpanded && (
                    <>
                        <div className={`${showMore ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
                            <div className='space-y-1'>
                                {moreLinks.map((link) => (
                                    <NavItem key={link.text} {...link} isExpanded={isExpanded} pathname={pathname} />
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setShowMore(!showMore)} className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white">
                            {showMore ? <ChevronUpIcon className="w-6 h-6 mr-4" /> : <ChevronDownIcon className="w-6 h-6 mr-4" />}
                            <span>{showMore ? 'Show less' : 'Show more'}</span>
                        </button>
                    </>
                )}
                <div className="border-t border-gray-700 my-4"></div>
                {isExpanded && <h2 className="px-4 pt-2 pb-1 text-sm font-semibold text-gray-500 tracking-wider">Subscriptions</h2>}
                {subscriptions.map(sub => <SubscriptionItem key={sub.name} {...sub} isExpanded={isExpanded} />)}
            </nav>
        </>
    );
};

const Sidebar = ({ pathname }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleMouseEnter = () => setIsSidebarExpanded(true);
  const handleMouseLeave = () => setIsSidebarExpanded(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`h-screen bg-gray-900 text-white flex-col fixed top-0 left-0 overflow-y-auto z-30 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 transition-all duration-300 ease-in-out hidden lg:flex ${isSidebarExpanded ? 'w-64' : 'w-20'}`}
    >
        <div className="h-16 shrink-0" /> {/* Spacer for header */}
        <SidebarContent isExpanded={isSidebarExpanded} pathname={pathname} />
    </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <HamburgerIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900 text-white p-0 w-64 border-r-gray-800">
            <SidebarContent isExpanded={true} pathname={pathname} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
