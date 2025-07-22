import React from 'react';
import { Play, Wifi } from 'lucide-react';

const ChatMessage = ({ msg }) => (
  <div className="text-sm mb-2">
    <span className="font-bold opacity-70 mr-2">{msg.user}:</span>
    <span>{msg.message}</span>
  </div>
);

export default function LivePremiere({ data }) {
  if (!data) return null;

  return (
    <section>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Video Player Section */}
        <div className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-2xl aspect-video p-4 flex items-center justify-center relative">
          <div className="text-center">
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p className="text-gray-400 mb-6">by {data.creator}</p>
            <button className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform">
              <Play size={40} className="ml-2" />
            </button>
          </div>
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-md flex items-center gap-2">
            <Wifi size={14} />
            LIVE
          </div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
            {data.liveViewers.toLocaleString()} viewers
          </div>
        </div>

        {/* Live Chat Section */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl flex flex-col h-[400px] lg:h-full">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-lg text-center">Live Chat</h3>
          </div>
          <div className="flex-grow p-4 space-y-3 overflow-y-auto">
            {data.chatMessages.map((msg, i) => <ChatMessage key={i} msg={msg} />)}
          </div>
          <div className="p-2 border-t border-gray-700">
            <input 
              type="text"
              placeholder="Say something..."
              className="w-full bg-gray-800 text-sm border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}