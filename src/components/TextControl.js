import React from 'react';

const TextControl = ({
  text,
  fontSize,
  fontColor,
  fontFamily,
  onTextChange,
  onFontSizeChange,
  onFontColorChange,
  onFontFamilyChange,
}) => {
  const handleChange = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div className="text-control-container">
      <textarea
        value={text}
        onChange={handleChange}
        style={{ fontSize, color: fontColor, fontFamily }}
        className="text-area"
      />

      <div className="control-group">
        <label className="control-label">Font Size:</label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => onFontSizeChange(+e.target.value)}
          className="control-input"
        />
      </div>
      <div className="control-group">
        <label className="control-label">Font Color:</label>
        <input
          type="color"
          value={fontColor}
          onChange={(e) => onFontColorChange(e.target.value)}
          className="control-input"
        />
      </div>
      <div className="control-group">
        <label className="control-label">Font Family:</label>
        <select
          value={fontFamily}
          onChange={(e) => onFontFamilyChange(e.target.value)}
          className="control-select"
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
    </div>
  );
};

export default TextControl;
