import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada, ordenarTareas }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea.texto}
          completada={tarea.completada}
          onDelete={() => eliminarTarea(index)}
          onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
          onToggleCompletada={() => toggleCompletada(index)}
        />
      ))}
      <button className="btn btn-outline-dark" onClick={() => ordenarTareas("ascendente")}>Ordenar Ascendente</button>
      <button className="btn btn-outline-dark" onClick={() => ordenarTareas("descendente")}>Ordenar Descendente</button>
    </ul>
  );
}

export default ListaTareas;
