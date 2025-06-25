import React, { useState } from 'react';

type ContentProps = {
  content: {
    imageUrl: string;
    prompt: string;
    tool: string;
    tags: string[];
  };
  creator: {
    name: string;
    avatarUrl: string;
  };
};

export default function ContentDetail({ content, creator }: ContentProps) {
  const [likes, setLikes] = useState(0);
  const [comments] = useState(0);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Content */}
      <img
        src={content.imageUrl}
        alt="AI Generated"
        className="w-full rounded-2xl shadow-lg"
      />

      {/* Prompt */}
      <div className="bg-zinc-800 px-4 py-3 rounded-xl text-lg">
        <span className="text-purple-400">Prompt used:</span> {content.prompt}
      </div>

      {/* Creator Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={creator.avatarUrl}
            alt={creator.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold">{creator.name}</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1 rounded-full">
          Follow
        </button>
      </div>

      {/* Tool Info */}
      <div className="text-sm text-zinc-400">
        Made with: <span className="text-white font-medium">{content.tool}</span>
      </div>

      {/* Reactions */}
      <div className="flex items-center space-x-6 text-xl mt-4">
        <button onClick={() => setLikes(likes + 1)} className="hover:text-pink-500">
          ❤️ {likes}
        </button>
        <button className="hover:text-blue-400">💬 {comments}</button>
        <button className="hover:text-green-400">🔗 Share</button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {content.tags.map((tag) => (
          <span
            key={tag}
            className="bg-zinc-800 text-sm px-3 py-1 rounded-full text-zinc-200"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
