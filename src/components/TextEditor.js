import React, { useState } from 'react';
import TextControl from './TextControl';
import UndoRedoControls from './UndoRedoControls';
import AddTextControl from './AddTextControl';

const TextEditor = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#000');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [history, setHistory] = useState([]);
  const [textHistory, setTextHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);

  const handleTextChange = (newText) => {
    setText(newText);
    setHistory([...history, newText]);
    console.log('history: ', history);
    setCurrentStep(currentStep + 1);
  };

  const handleAddText = (newText) => {
    const updatedTextHistory = textHistory.slice(0, currentStep + 1);
    setTextHistory([...updatedTextHistory, newText]);
    console.log('updatedTextHistory ', updatedTextHistory)
    setCurrentStep(currentStep + 1);
    setText(text+newText);
  };

  const undo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setText(history[currentStep - 1]);
    }
  };

  const redo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      setText(history[currentStep + 1]);
    }
  };

  return (
    <div className="text-editor-container">
      <TextControl
        text={text}
        fontSize={fontSize}
        fontColor={fontColor}
        fontFamily={fontFamily}
        onTextChange={handleTextChange}
        onFontSizeChange={setFontSize}
        onFontColorChange={setFontColor}
        onFontFamilyChange={setFontFamily}
      />
      <AddTextControl onAddText={handleAddText} />
      <UndoRedoControls onUndo={undo} onRedo={redo} />
    </div>
  );
};

export default TextEditor;
