import React from 'react';
import logo from './logo.svg';
import './App.css';
import usePortal from "./usePortal";

function App() {
    const { openPortal, closePortal, isOpen, Portal } = usePortal();

  return (
    <div className="App">
          <h1 className="App-header">
           Какой-то контент 
          </h1>
          <>
            <button onClick={openPortal}>Открыть портал</button>
            {isOpen && (
              <Portal>
                <p>
                  Ого,  да это ваш собственный портал!
                </p>
                <button onClick={closePortal}>Закрыть портал </button>
              </Portal>
            )}
          </>
        </div>
  );
}

export default App;
