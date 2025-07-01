import React from 'react';

// --- SVG Icon Components ---
const SearchIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);

const UserCircleIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zM8 13a4 4 0 104 0H8z" clipRule="evenodd" />
    </svg>
);

const LogoutIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
    </svg>
);


// --- Main Header Component ---
export default function Header() {
    // Placeholder for user authentication state.
    // In a real app, this would come from a context, hook, or props.
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <header className="bg-gray-950 text-white p-4 flex items-center justify-between z-40">
            {/* Left Section: Logo */}
            <div class="flex items-center">
    <a href="/" aria-label="Go to Homepage">
        <img src="/meat_logo.png" alt="Machine Creativity Logo" class="h-8 w-auto" />
    </a>
</div>

            {/* Center Section: Search Bar */}
            <div className="flex-1 flex justify-center px-4 lg:px-16">
                <div className="w-full max-w-2xl relative">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-full py-2.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-gray-400 hover:text-white">
                        <SearchIcon />
                    </button>
                </div>
            </div>

            {/* Right Section: Auth Buttons */}
            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <div className="relative group">
                        <button className="flex items-center space-x-2">
                           <UserCircleIcon className="text-gray-400 group-hover:text-white" />
                        </button>
                         <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                             <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Profile</a>
                             <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Settings</a>
                             <div className="border-t border-gray-700 my-1"></div>
                             <button onClick={handleLogout} className="w-full text-left flex items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700">
                                 <LogoutIcon className="mr-2" />
                                 Logout
                             </button>
                         </div>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <button onClick={handleLogin} className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-full hover:bg-gray-800 transition">
                            Log In
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition">
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
