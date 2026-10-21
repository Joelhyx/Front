import React from 'react';

interface Post {
  id: number;
  title: string;
  height: number;
}

export default function MasonryFeed(): React.JSX.Element {
  const posts: Post[] = [
    { id: 1, title: 'Post Corto', height: 120 },
    { id: 2, title: 'Post Bastante Más Largo', height: 240 },
    { id: 3, title: 'Post Mediano', height: 180 },
    { id: 4, title: 'Post Muy Largo para Muro', height: 300 },
  ];

  return (
    <div className="masonry-feed" style={{ columnCount: 3, columnGap: '1rem', padding: '1rem' }}>
      {posts.map((post) => (
        <div 
          key={post.id} 
          className="masonry-item" 
          style={{ 
            height: `${post.height}px`, 
            backgroundColor: '#e2e8f0', 
            marginBottom: '1rem', 
            breakInside: 'avoid', 
            padding: '1rem', 
            borderRadius: '8px' 
          }}
        >
          <h4>{post.title}</h4>
        </div>
      ))}
    </div>
  );
}
