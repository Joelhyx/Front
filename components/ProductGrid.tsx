import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
}

export default function ProductGrid(): React.JSX.Element {
  const products: Product[] = [
    { id: 1, name: 'Auriculares Inalámbricos', price: '$99' },
    { id: 2, name: 'Teclado Mecánico', price: '$120' },
    { id: 3, name: 'Ratón Ergonómico', price: '$75' },
    { id: 4, name: 'Monitor 4K', price: '$350' },
  ];

  return (
    <div 
      className="product-grid" 
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', padding: '2rem' }}
    >
      {products.map((product) => (
        <div key={product.id} className="product-card" style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
