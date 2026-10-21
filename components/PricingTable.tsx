import React from 'react';

interface Plan {
  title: string;
  price: string;
  isFeatured: boolean;
}

export default function PricingTable(): React.JSX.Element {
  const plans: Plan[] = [
    { title: 'Básico', price: '$0/mes', isFeatured: false },
    { title: 'Pro', price: '$29/mes', isFeatured: true },
    { title: 'Enterprise', price: '$99/mes', isFeatured: false },
  ];

  return (
    <div className="pricing-table" style={{ display: 'flex', gap: '1.5rem', maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}
          style={{ 
            flex: 1, 
            padding: '2rem', 
            borderRadius: '8px', 
            border: plan.isFeatured ? '2px solid #3b82f6' : '1px solid #e2e8f0',
            transform: plan.isFeatured ? 'scale(1.05)' : 'scale(1)',
            boxShadow: plan.isFeatured ? '0 10px 15px -3px rgba(59, 130, 246, 0.2)' : 'none'
          }}
        >
          {plan.isFeatured && <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.8rem' }}>RECOMENDADO</span>}
          <h3>{plan.title}</h3>
          <h2>{plan.price}</h2>
          <button style={{ width: '100%', marginTop: '1rem', backgroundColor: plan.isFeatured ? '#3b82f6' : '#f1f5f9', color: plan.isFeatured ? '#fff' : '#000' }}>
            Elegir Plan
          </button>
        </div>
      ))}
    </div>
  );
}
