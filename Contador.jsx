import React, { useState } from 'react';

function Contador() {
    // 1. Uso de useState para declarar una variable de estado 'cuenta'
    const [cuenta, setCuenta] = useState(0);
    // 2. Manejador de evento para el clic
    const manejarClic = () => {
        setCuenta(cuenta + 1); // Actualiza el estado
    };
    // 3. Manejador de evento para el cambio en un input
    const manejarCambioInput = (evento) => {
        console.log("Nuevo valor del input:", evento.target.value);
        // Nota: Para un input controlado, se necesitaría otro useState para el valor
    };
    // 4. Manejador de evento para el envío de formulario
    const manejarEnvioForm = (evento) => {
        evento.preventDefault(); // Previene el comportamiento por defecto de recarga
        alert(`Formulario enviado. Cuenta actual: ${cuenta}`);
    };
    return (
        <form onSubmit={manejarEnvioForm}>
            <h3>Contador: {cuenta}</h3>
            <button onClick={manejarClic}>
                Incrementar
            </button>
            <input
                type="text"
                placeholder="Escribe algo..."
                onChange={manejarCambioInput}
            />
            REACT_V1.md 2025-10-17
            2 / 54
            <button type="submit">Enviar Formulario</button>
        </form>
    );
}
export default Contador;