// src/components/react/settings/SettingsPage.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

const tabs = [
  { id: 'profile', name: 'Profile' },
  { id: 'account', name: 'Account' },
  { id: 'notifications', name: 'Notifications' },
  { id: 'billing', name: 'Billing' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'billing':
        return <BillingSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-black text-white">Settings</h1>
        <p className="text-lg text-gray-400 mt-1">Manage your account and site preferences.</p>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Left Sidebar Navigation */}
        <aside className="lg:col-span-1">
          <nav className="sticky top-24 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-3">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

// --- Sub-components for each settings tab ---

const ProfileSettings = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({
        username: '',
        bio: '',
        donation_url: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();
                
                if (error) {
                    setError('Could not fetch your profile.');
                } else if (data) {
                    setProfile({
                        username: data.username || '',
                        bio: data.bio || '',
                        donation_url: data.donation_url || ''
                    });
                }
            }
            setLoading(false);
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.id]: e.target.value });
    };

    const handleSave = async () => {
        setLoading(true);
        setMessage('');
        setError('');
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const { error: updateError } = await supabase
                .from('profiles')
                .update({
                    username: profile.username,
                    bio: profile.bio,
                    donation_url: profile.donation_url
                })
                .eq('id', user.id);
            
            if (updateError) {
                setError(updateError.message);
            } else {
                setMessage('Profile saved successfully!');
            }
        }
        setLoading(false);
    };

    if (loading && !profile.username) {
        return <p className="text-gray-400">Loading profile...</p>
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Public Profile</h2>
            <p className="text-gray-400">This information will be displayed publicly on your profile page.</p>
            <div className="pt-6 border-t border-gray-800 space-y-4">
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value={profile.username} onChange={handleChange} className="mt-1" />
                </div>
                <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" value={profile.bio} onChange={handleChange} className="mt-1" />
                </div>
                <div>
                    <Label htmlFor="donation_url">Donation Link (e.g., Buy Me a Coffee)</Label>
                    <Input id="donation_url" type="url" value={profile.donation_url} onChange={handleChange} placeholder="https://..." className="mt-1" />
                </div>
                <div>
                    <Label>Avatar</Label>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-3xl">🔮</div>
                        <Button variant="outline">Upload New</Button>
                    </div>
                </div>
            </div>
            {message && <p className="text-sm text-green-400">{message}</p>}
            {error && <p className="text-sm text-red-400">{error}</p>}
            <div className="pt-4 border-t border-gray-800 flex justify-end">
                <Button onClick={handleSave} disabled={loading}>{loading ? 'Saving...' : 'Save Profile'}</Button>
            </div>
        </div>
    )
};

const AccountSettings = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white">Account Settings</h2>
    <p className="text-gray-400">Manage your login credentials and account security.</p>
    <div className="pt-6 border-t border-gray-800 space-y-4">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" defaultValue="pixel.prophet@example.com" className="mt-1" readOnly />
      </div>
      <div>
        <Label htmlFor="new-password">New Password</Label>
        <Input id="new-password" type="password" placeholder="••••••••" className="mt-1" />
      </div>
    </div>
    <div className="pt-4 border-t border-gray-800 flex justify-end">
        <Button>Update Account</Button>
    </div>
    <div className="pt-6 border-t border-red-500/30">
        <h3 className="text-lg font-semibold text-red-400">Danger Zone</h3>
        <p className="text-gray-400 text-sm mt-1">Deleting your account is permanent and cannot be undone.</p>
        <Button variant="destructive" className="mt-4">Delete Account</Button>
    </div>
  </div>
);

const NotificationSettings = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Notifications</h2>
        <p className="text-gray-400">Choose how you want to be notified.</p>
        <div className="pt-6 border-t border-gray-800 space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <Label htmlFor="comments-notification">Comments</Label>
                    <p className="text-sm text-gray-500">When someone comments on your creations.</p>
                </div>
                <Switch id="comments-notification" defaultChecked />
            </div>
             <div className="flex items-center justify-between">
                <div>
                    <Label htmlFor="follows-notification">New Followers</Label>
                    <p className="text-sm text-gray-500">When a new user follows you.</p>
                </div>
                <Switch id="follows-notification" defaultChecked />
            </div>
             <div className="flex items-center justify-between">
                <div>
                    <Label htmlFor="newsletter-notification">Weekly Newsletter</Label>
                    <p className="text-sm text-gray-500">Our roundup of the best new content.</p>
                </div>
                <Switch id="newsletter-notification" />
            </div>
        </div>
        <div className="pt-4 border-t border-gray-800 flex justify-end">
            <Button>Save Preferences</Button>
        </div>
    </div>
);

const BillingSettings = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Billing</h2>
        <p className="text-gray-400">Manage your subscriptions and payment methods.</p>
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>(Billing and subscription management features are coming soon!)</p>
        </div>
    </div>
);
