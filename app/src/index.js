import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const navbarHeight = navbar.offsetHeight;
  const threshold = windowHeight / 8.5;

  if (scrollPosition > threshold) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.opacity = '0.8';
    navbar.style.width = '100%';
  } else {
    navbar.style.position = 'static';
    navbar.style.opacity = '1';
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
