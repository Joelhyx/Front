import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {currentYear} Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
}
