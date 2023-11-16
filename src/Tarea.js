// src/Tarea.js
import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center py-3">
      <input className="form-check-input me-3" type="checkbox" checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <input
            className="form-control me-3"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="btn btn-success me-3" onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <>
          <span className={`flex-grow-1 ${completada ? 'text-decoration-line-through' : ''}`}>{tarea}</span>
          <button className="btn btn-danger me-3" onClick={onDelete}>Eliminar</button>
          <button className="btn btn-primary" onClick={handleEditClick}>Editar</button>
        </>
      )}
    </li>
  );
}

export default Tarea;
