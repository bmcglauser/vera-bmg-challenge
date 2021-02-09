import React from 'react';
import './App.scss';
import Header from './components/Header';
import whiteVert from './assets/logos/vert/Vera_Ver_White.svg';
import FormPage from './pages';


function App () {
  return (
    <div className="app-wrapper">
      <Header />
      <section className="page-wrapper">
        <FormPage />
      </section>
      <section className="footer-wrapper">
        <img src={whiteVert} alt="Vera Institute of Justice" />
      </section>
    </div>
  );
}

export default App;
