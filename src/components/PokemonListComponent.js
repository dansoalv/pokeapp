import React, { Component } from 'react';
import './../css/PokemonList.css'
import PokemonCardComponent from './PokemonCardComponent';

class PokemonListComponent extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            pokemonData: [],
            pokemonItem: []
        };
    }

    componentWillMount() {
        fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json()).then(pokemonList =>{
                this.setState({
                    pokemonData: pokemonList.results
                })

                this.state.pokemonData.forEach(element => {
                    fetch(element.url).then(response => response.json()).then(pokemon =>{
                        this.setState({
                            pokemonItem: this.state.pokemonItem.concat([pokemon])
                        })
                    })
                });
        })
    }

    render(){
        return(
            <div className="row">
                {this.state.pokemonItem.map(pokemon => 
                    <PokemonCardComponent pokemon={pokemon}></PokemonCardComponent>
                )}
            </div>
        )
    }
}

export default PokemonListComponent