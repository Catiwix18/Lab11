import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const MAX_CARACTERES = 20;

  const validarTexto = (texto) => {
    return texto.trim() !== "" && texto.length <= MAX_CARACTERES;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarTexto(texto)) {
      setError("Texto inválido. Debe tener menos de " + MAX_CARACTERES + " caracteres.");
      return;
    }
    agregarTarea(texto);
    setTexto("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="btn btn-success" type="submit">Agregar Tarea</button>
      </div>
      {error && <p className="text-danger">{error}</p>}
    </form>
  );
}

export default TareaForm;
