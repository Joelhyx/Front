import React from 'react';

interface StatusAlertProps {
  isSuccess: boolean;
  hasWarning?: boolean;
}

export default function StatusAlert({ isSuccess, hasWarning = false }: StatusAlertProps): React.JSX.Element {
  return (
    <div className="alert-container">
      {isSuccess ? (
        <div className="alert-success">¡Operación completada con éxito!</div>
      ) : (
        <div className="alert-error">Hubo un problema en el servidor.</div>
      )}

      {hasWarning && <div className="alert-warning">Atención: Revisa tus datos.</div>}
    </div>
  );
}
