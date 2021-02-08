import React, { FunctionComponent } from 'react';
import './App.scss';

const App: FunctionComponent = () => {
  return (
    <div className="app-wrapper">
      <h1>Sectra</h1>
      <h1 className="ital">Sectra Italic</h1>
      <h1 className="light">Sectra Light</h1>
      <h1 className="ital light">Sectra Light Italic</h1>
      <p>Walsheim</p>
      <p className="ital">Walsheim Italic</p>
      <p className="light">Walsheim Light</p>
      <p className="ital light">Walsheim Light Italic</p>
      <p className="bold">Walsheim Bold</p>
      <p className="ital bold">Walsheim Bold Italic</p>
    </div>
  );
}

export default App;
