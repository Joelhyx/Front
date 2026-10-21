import React from 'react';

interface TimeEvent {
  date: string;
  title: string;
}

export default function Timeline(): React.JSX.Element {
  const events: TimeEvent[] = [
    { date: '2024', title: 'Fundación de la empresa' },
    { date: '2025', title: 'Lanzamiento de la Beta' },
    { date: '2026', title: 'Expansión Global' },
  ];

  return (
    <div className="timeline-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', backgroundColor: '#cbd5e1', transform: 'translateX(-50%)' }} />

      {events.map((event, index) => {
        const isEven = index % 2 === 0;
        return (
          <div 
            key={index} 
            className="timeline-item" 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              marginBottom: '2rem',
              textAlign: isEven ? 'right' : 'left'
            }}
          >
            <div style={{ padding: '0 2rem', gridColumn: isEven ? '1' : '2' }}>
              <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>{event.date}</span>
              <h4>{event.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
