import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './header/Nav';
import Contact from './app/Contact';
import Portfolio from './app/Portfolio';
import About from './app/About';
import Footer from './footer/Footer';
// import Skills from './app/Skills';

ReactDOM.render(
  <React.StrictMode> 
    <Nav />
    <About />
    <Portfolio />
    {/* <Skills /> */}
    <Contact />
    <Footer />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
