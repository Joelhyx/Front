import React from 'react';

export default function Navbar(): React.JSX.Element {
  return (
    <>
      <div className="logo">MiSitio</div>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
        </ul>
      </nav>
    </>
  );
}
