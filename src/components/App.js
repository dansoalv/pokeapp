import React, { Component } from 'react';
import './../css/App.css';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import PokemonListComponent from './PokemonListComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HeaderComponent></HeaderComponent>
        <SearchComponent></SearchComponent>
        <PokemonListComponent></PokemonListComponent>
      </div>
    );
  }
}

export default App;
