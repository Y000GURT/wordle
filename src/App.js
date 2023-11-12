import React from 'react'
import Game from './components/Game';
import './styles/app.css'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Game></Game>
    </div>
  );
}

export default App;
