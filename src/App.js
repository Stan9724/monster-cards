import React, {Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

// Définir une classe App qui hérite de la classe Component de React
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }
 
  // Méthode de rendu de la composante
  render() {
    return (
      <div className='App'>
        <input />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
// Exporter la classe App pour pouvoir l'utiliser dans d'autres fichiers
export default App;
