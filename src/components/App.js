import React, { Component } from 'react';
import './../css/App.css';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import PokemonListComponent from './PokemonListComponent';

class App extends Component {

  typeSelected = (t) => {
    console.log(t);
  }
  render() {
    return (
      <div className="container">
        <HeaderComponent></HeaderComponent>
        <SearchComponent typeSelected={this.typeSelected}></SearchComponent>
        <PokemonListComponent></PokemonListComponent>
      </div>
    );
  }
}

export default App;
