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

   componentWillReceiveProps(nextProps) {
    this.setState({
        pokemonData: [],
        pokemonItem: []
    })

    if(nextProps.urlPokemon !== null){
        fetch(nextProps.urlPokemon).then(response => response.json()).then(pokemonList =>{
            this.setState({
                pokemonData: pokemonList.pokemon
            })
           
            if(this.state.pokemonData !== undefined) {
                this.state.pokemonData.forEach(element => {
                    fetch(element.pokemon.url).then(response => response.json()).then(res =>{
                        this.setState({
                            pokemonItem: this.state.pokemonItem.concat([res])
                        })
                    })
                });
        
                this.state.pokemonItem.sort((a, b) => a.id - b.id);
            }
    
        });
    }else {

        // Se debe buscar por nombre el pokemon o ID 
        console.log(nextProps.searchText)
    }
    
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