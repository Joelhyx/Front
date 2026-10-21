import React from 'react';

export default function CustomButton(): React.JSX.Element {
  const mostrarAlerta = (event: React.MouseEvent<HTMLButtonElement>): void => {
    alert("¡Formulario enviado con éxito!");
  };

  return (
    <button onClick={mostrarAlerta} className="btn-submit">
      Enviar
    </button>
  );
}
