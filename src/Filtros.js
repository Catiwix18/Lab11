import React from 'react';

function Filtros({ filtrarTareas }) {
  return (
    <div className="text-center">
      <h2 className="mb-4">Filtrar Tareas</h2>
      <button className="btn btn-outline-info me-2" onClick={() => filtrarTareas("Todas")}>Todas</button>
      <button className="btn btn-outline-secondary me-2" onClick={() => filtrarTareas("Pendientes")}>Pendientes</button>
      <button className="btn btn-outline-dark" onClick={() => filtrarTareas("Completadas")}>Completadas</button>
    </div>
  );
}

export default Filtros;
