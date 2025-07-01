// src/components/react/dashboard/DashboardPage.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const tabs = [
  { id: 'profile', name: 'Profile', icon: '👤' },
  { id: 'stats', name: 'Stats & Analytics', icon: '📊' },
  { id: 'uploads', name: 'Your Uploads', icon: '☁️' },
  { id: 'saved', name: 'Saved', icon: '❤️' },
  { id: 'settings', name: 'Settings', icon: '⚙️', href: '/creator/settings' },
];

// Placeholder Data
const user = {
  name: 'Pixel_Prophet',
  username: 'pixel_prophet',
  avatarEmoji: '🔮',
  bio: 'Weaving dreams into digital tapestries. Specializing in surreal and fantasy landscapes that tell a story with AI.',
  stats: {
    totalViews: '1.2M',
    followers: '28.4k',
    creations: 128,
  },
  creations: [
    { id: 1, title: 'Celestial Spire', type: 'Image', date: '2025-06-28', views: '15.2k', status: 'Published' },
    { id: 2, title: 'The Whispering Woods', type: 'Video', date: '2025-06-25', views: '88.7k', status: 'Published' },
    { id: 3, title: 'On the Art of Prompting', type: 'Article', date: '2025-06-22', views: '5.1k', status: 'Published' },
    { id: 4, title: 'City of Glass - Concept', type: 'Image', date: '2025-06-20', views: '1.8k', status: 'Draft' },
  ],
  savedCreations: [
    { id: 5, title: 'Cybernetic Dreams', type: 'Image', author: 'NeuroMancer', emoji: '🤖' },
    { id: 6, title: 'Forest Symphony', type: 'Music', author: 'AudioAlchemist', emoji: '🎶' },
    { id: 7, title: 'A.I. Love Story', type: 'Video', author: 'KinoGen', emoji: '❤️' },
  ]
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileOverview user={user} />;
      case 'stats':
        return <StatsAndAnalytics />;
      case 'uploads':
        return <YourUploads creations={user.creations} />;
      case 'saved':
        return <SavedContent savedCreations={user.savedCreations} />;
      default:
        return <ProfileOverview user={user} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-black text-white">Dashboard</h1>
        <p className="text-lg text-gray-400 mt-1">Welcome back, {user.name}!</p>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Left Sidebar Navigation */}
        <aside className="lg:col-span-1">
          <nav className="sticky top-24 space-y-1">
            {tabs.map(tab => {
              if (tab.href) {
                return (
                  <a
                    key={tab.id}
                    href={tab.href}
                    className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-colors"
                  >
                    <span className="text-xl">{tab.icon}</span>
                    <span>{tab.name}</span>
                  </a>
                )
              }
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              )
            })}
             <div className="pt-2 mt-2 border-t border-gray-800">
                <a href={`/creator/${user.username}`} className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-colors">
                    <span className="text-xl">👀</span>
                    <span>View Your Profile</span>
                </a>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-3">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// --- Tab Content Components ---

const ProfileOverview = ({ user }) => (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-5xl flex-shrink-0">{user.avatarEmoji}</div>
            <div>
                <h2 className="text-3xl font-bold text-white">{user.name}</h2>
                <p className="text-pink-400">@{user.username}</p>
            </div>
        </div>
        <div>
            <h3 className="font-semibold text-white">Bio</h3>
            <p className="text-gray-400 mt-1">{user.bio}</p>
        </div>
        <div className="pt-4 border-t border-gray-800 flex justify-end">
            <Button variant="outline" asChild><a href="/settings/profile">Edit Profile</a></Button>
        </div>
    </div>
);

const StatsAndAnalytics = () => (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Stats & Analytics</h2>
        <div className="text-center text-gray-500 py-16">
            <p className="text-4xl mb-4">📈</p>
            <p>Detailed analytics are coming soon!</p>
        </div>
    </div>
);

const YourUploads = ({ creations }) => (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Your Uploads</h2>
            <Button>Upload New</Button>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-gray-800/50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Views</th>
                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                    {creations.map(creation => (
                        <tr key={creation.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-white">{creation.title}</div>
                                <div className="text-xs text-gray-500">{creation.type} - {creation.date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${creation.status === 'Published' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
                                    {creation.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{creation.views}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="destructive" size="sm">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const SavedContent = ({ savedCreations }) => (
    <div>
        <h2 className="text-2xl font-bold text-white mb-4">Saved Creations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCreations.map(item => (
                <a href="#" key={item.id} className="group bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-pink-500/30 transition-all duration-300">
                    <div className="aspect-video bg-gray-800 flex items-center justify-center">
                        <div className="text-4xl">{item.emoji}</div>
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-semibold text-white truncate group-hover:text-pink-400">{item.title}</p>
                        <p className="text-xs text-gray-400">by {item.author}</p>
                    </div>
                </a>
            ))}
        </div>
    </div>
);
