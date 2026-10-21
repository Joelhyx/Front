import React from 'react';

export default function RegisterForm(): React.JSX.Element {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="emailInput">Correo Electrónico:</label>
      <input id="emailInput" type="email" placeholder="correo@ejemplo.com" />

      <label htmlFor="passwordInput">Contraseña:</label>
      <input id="passwordInput" type="password" />
      
      <button type="submit">Registrar</button>
    </form>
  );
}
