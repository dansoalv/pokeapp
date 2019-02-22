import React, { Component } from 'react';
import './../css/App.css';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import PokemonListComponent from './PokemonListComponent';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      typeSelected: null,
      searchText: null
    };
  }

  typeSelected = (t) => {
    this.setState({typeSelected: t})
  }

  searchT = (t) => {
    this.setState({searchText: t})
  }


  render() {
    return (
      <div className="container">
        <HeaderComponent></HeaderComponent>
        <SearchComponent typeSelected={this.typeSelected} searchT={this.searchT} ></SearchComponent>
        <PokemonListComponent urlPokemon={this.state.typeSelected} searchText={this.state.searchText}></PokemonListComponent>
      </div>
    );
  }
}

export default App;
