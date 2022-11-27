import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HoroscopeContext } from './context/HoroscopeContext';

const Root = () => {
  return (
    <HoroscopeContext.Provider value={{ sign: 'Pisces' }}>
      <App />
    </HoroscopeContext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
