import React from 'react';

function Sidebar(): React.JSX.Element {
  return <aside style={{ backgroundColor: '#0f172a', color: '#fff', padding: '1rem' }}>Menú</aside>;
}

function TopNavbar(): React.JSX.Element {
  return <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '1rem' }}>Barra de Herramientas</header>;
}

interface StatCardProps { title: string; val: string; }
function StatCard({ title, val }: StatCardProps): React.JSX.Element {
  return (
    <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
      <small style={{ color: '#64748b' }}>{title}</small>
      <h3 style={{ margin: '0.5rem 0 0' }}>{val}</h3>
    </div>
  );
}

function DataTable(): React.JSX.Element {
  return (
    <div style={{ backgroundColor: '#fff', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <h4>Últimas transacciones</h4>
      <table style={{ width: '100%', textAlign: 'left' }}>
        <thead><tr><th>ID</th><th>Estado</th></tr></thead>
        <tbody><tr><td>#001</td><td>Completado</td></tr></tbody>
      </table>
    </div>
  );
}

export default function AnalyticsDashboard(): React.JSX.Element {
  return (
    <div 
      className="dashboard-wrapper" 
      style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gridTemplateRows: 'auto 1fr', minHeight: '100vh', backgroundColor: '#f8fafc' }}
    >
      <div style={{ gridRow: 'span 2' }}>
        <Sidebar />
      </div>

      <TopNavbar />

      <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <StatCard title="Visitas" val="12,450" />
          <StatCard title="Ventas" val="$3,400" />
          <StatCard title="Tasa de Rebote" val="42.3%" />
          <StatCard title="Nuevos Usuarios" val="+120" />
        </div>

        <DataTable />
      </main>
    </div>
  );
}
