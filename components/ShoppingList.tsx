import React from 'react';

export default function ShoppingList(): React.JSX.Element {
  const items: string[] = ['Manzanas', 'Pan', 'Leche', 'Huevos', 'Café'];

  return (
    <ul>
      {items.map((item: string, index: number) => (
        // Uso obligatorio de la prop 'key' única
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
