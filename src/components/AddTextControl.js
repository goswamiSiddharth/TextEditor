import React, { useState } from 'react';

const AddTextControl = ({ onAddText }) => {
  const [newText, setNewText] = useState('');

  const handleAddText = () => {
    if (newText.trim() !== '') {
      onAddText(newText);
      console.log('new text ', newText)
      setNewText('');
    }
  };

  return (
    <div className="add-text-control">
      <textarea
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="Enter new text..."
      />
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default AddTextControl;
