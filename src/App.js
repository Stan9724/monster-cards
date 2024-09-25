import React, {Component } from 'react';
import './App.css';

// Définir une classe App qui hérite de la classe Component de React
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [
        {
          name: 'Franke',
          id: 'asc1'
        },
        {
          name: 'Fobstark',
          id: 'asc2'
        },
        {
          name: 'Thejoy',
          id: 'asc3'
        },
      ]
    };
  }

  // Méthode de rendu de la composante
  render() {
    return (
        <div className="App">
          {
            this.state.monsters.map(monster => <h1 key={monster.id}> { monster.name } </h1>)
          }
        </div>
    );
  }
}

// Exporter la classe App pour pouvoir l'utiliser dans d'autres fichiers
export default App;
