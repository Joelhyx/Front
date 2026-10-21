import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps): React.JSX.Element {
  return (
    <div 
      className="dashboard-container" 
      style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: '100vh' }}
    >
      <aside className="sidebar" style={{ backgroundColor: '#1e293b', color: '#fff', padding: '1.5rem' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#panel" style={{ color: '#fff' }}>Panel</a></li>
            <li><a href="#ajustes" style={{ color: '#fff' }}>Ajustes</a></li>
          </ul>
        </nav>
      </aside>
      
      <main className="main-content" style={{ padding: '2rem', backgroundColor: '#f8fafc' }}>
        {children}
      </main>
    </div>
  );
}
