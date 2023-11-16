import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fechaCreacion: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const ordenarTareas = (tipo) => {
    const nuevasTareas = [...tareas];
    if (tipo === "ascendente") {
      nuevasTareas.sort((a, b) => new Date(a.fechaCreacion) - new Date(b.fechaCreacion));
    } else if (tipo === "descendente") {
      nuevasTareas.sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion));
    }
    setTareas(nuevasTareas);
  };

  const validarTexto = (texto) => {
    return texto.trim() !== "" && texto.length < 50; // Validación simple
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-4 text-center">LISTA DE TAREAS</h1>
          <TareaForm agregarTarea={agregarTarea} validarTexto={validarTexto} />
          <Filtros filtrarTareas={filtrarTareas} />
          <ListaTareas
            tareas={tareasFiltradas}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            toggleCompletada={toggleCompletada}
            ordenarTareas={ordenarTareas}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
