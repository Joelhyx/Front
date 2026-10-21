import React from 'react';

export default function CheckoutForm(): React.JSX.Element {
  return (
    <form className="checkout-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="fullName">Nombre Completo</label>
        <input id="fullName" type="text" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="phone">Teléfono</label>
        <input id="phone" type="tel" />
      </div>

      <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="address">Dirección de Facturación</label>
        <input id="address" type="text" />
      </div>
    </form>
  );
}
