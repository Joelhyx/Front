import React from 'react';

interface ModalDialogProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export default function ModalDialog({ isOpen, title, onClose }: ModalDialogProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}
    >
      <div className="modal-box" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '500px', width: '90%' }}>
        <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Este es un cuadro de diálogo perfectamente centrado en pantalla.</p>
        </div>
      </div>
    </div>
  );
}
