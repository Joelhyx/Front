import React from 'react';

interface UserCardProps {
  name: string;
  bio: string;
  isActive: boolean;
}

export default function UserCard({ name, bio, isActive }: UserCardProps): React.JSX.Element {
  return (
    <div 
      className={`user-card ${isActive ? 'status-active' : 'status-offline'}`} 
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', borderRadius: '12px', border: isActive ? '2px solid #22c55e' : '2px solid #cbd5e1' }}
    >
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#cbd5e1' }} />
        <div>
          <h2 style={{ margin: 0 }}>{name}</h2>
          <span style={{ fontSize: '0.85rem', color: isActive ? '#22c55e' : '#64748b' }}>
            {isActive ? 'En línea' : 'Ausente'}
          </span>
        </div>
      </div>
      <p className="card-bio" style={{ margin: 0 }}>{bio}</p>
      <div className="card-actions" style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
        <button style={{ flex: 1 }}>Mensaje</button>
        <button style={{ flex: 1 }}>Seguir</button>
      </div>
    </div>
  );
}
