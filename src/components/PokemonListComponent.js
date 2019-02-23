import React, { Component } from 'react';
import './../css/PokemonList.css'
import PokemonCardComponent from './PokemonCardComponent';

class PokemonListComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pokemonData: [],
            pokemonItem: []
        };
    }

    componentWillMount() {
        fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json()).then(pokemonList => {
            this.setState({
                pokemonData: pokemonList
            })

            this.state.pokemonData.results.forEach(element => {
                fetch(element.url).then(response => response.json()).then(pokemon => {
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

        if (nextProps.urlPokemon !== null) {
            fetch(nextProps.urlPokemon).then(response => response.json()).then(pokemonList => {
                this.setState({
                    pokemonData: pokemonList.pokemon
                })


                if (this.state.pokemonData !== undefined) {
                    this.state.pokemonData.forEach(element => {
                        fetch(element.pokemon.url).then(response => response.json()).then(res => {
                            this.setState({
                                pokemonItem: this.state.pokemonItem.concat([res])
                            })
                        })
                    });
                }

            });

        } else {
            fetch('https://pokeapi.co/api/v2/pokemon/' + nextProps.searchText.toLowerCase()).then(response => response.json()).then(pokemonList => {
                this.setState({
                    pokemonItem: this.state.pokemonItem.concat([pokemonList])
                })
            }).catch(function(error) {
                console.log(error);
            });

        }

    }

    componentDidUpdate() {
        this.state.pokemonItem.sort((a, b) => a.id - b.id)
    }

    handleNext = (n) => {
        n.preventDefault()
        fetch(this.state.pokemonData.next).then(response => response.json()).then(pokemonList => {
            this.setState({
                pokemonData: [],
                pokemonItem: []
            })
            this.setState({
                pokemonData: pokemonList
            })

            this.state.pokemonData.results.forEach(element => {
                fetch(element.url).then(response => response.json()).then(pokemon => {
                    this.setState({
                        pokemonItem: this.state.pokemonItem.concat([pokemon])
                    })
                })
            });
        })
    }

    handleBack = (n) => {
        n.preventDefault()
        fetch(this.state.pokemonData.previous).then(response => response.json()).then(pokemonList => {
            this.setState({
                pokemonData: [],
                pokemonItem: []
            })
            this.setState({
                pokemonData: pokemonList
            })

            this.state.pokemonData.results.forEach(element => {
                fetch(element.url).then(response => response.json()).then(pokemon => {
                    this.setState({
                        pokemonItem: this.state.pokemonItem.concat([pokemon])
                    })
                })
            });
        })
    }

    render() {

        return (
            <div>
                <div className="row">
                    {this.state.pokemonItem.map(pokemon =>
                        <PokemonCardComponent pokemon={pokemon} key={pokemon.id}></PokemonCardComponent>
                    )}
                </div>

                <div className="row" hidden={this.state.pokemonItem.length > 0}>
                    <div className="col">
                        <div className="alert alert-danger" role="alert">
                            <strong>Oh snap!</strong> No se encontraron resultados
                        </div>
                    </div>
                </div>
                <div className="row paginador">
                    <button type="submit" className="btn btn-primary btn-pag" onClick={this.handleBack.bind()} hidden={this.state.pokemonData.previous == null && this.props.searchText !== null}>Anterior</button>
                    <button type="submit" className="btn btn-primary btn-pag" onClick={this.handleNext.bind()} hidden={this.props.searchText !== null}>Siguiente</button>
                </div>
            </div>

        )
    }
}

export default PokemonListComponent