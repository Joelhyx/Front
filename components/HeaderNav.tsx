import React from 'react';

export default function HeaderNav(): React.JSX.Element {
  return (
    <header className="header-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        TechBrand
      </div>
      <nav>
        <ul className="nav-links" style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#features">Características</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
