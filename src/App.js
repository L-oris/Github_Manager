import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Sidebar/>

        <Board/>

      </div>
    );
  }
}

export default App;
