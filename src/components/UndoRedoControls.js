import React from 'react';

const UndoRedoControls = ({ onUndo, onRedo }) => {
  return (
    <div className="undo-redo-controls">
      <button onClick={onUndo}>Undo</button>
      <button onClick={onRedo}>Redo</button>
    </div>
  );
};

export default UndoRedoControls;
