import React from 'react';
import GameBoard from './pages/GameBoard'
import Landing from './pages/Landing'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import './static/styles/index.sass'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/game'>
          <GameBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
