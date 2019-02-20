import React, { Component } from 'react'
import '../css/PokemonList.css'

export default class PokemonCardComponent extends Component {

  render() {
    return (
    <div className="card-box">
        <div className={this.props.pokemon.types[0].type.name + ' cardPokemon'}><img src={this.props.pokemon.sprites.front_default}></img></div>
        <p><label className="pokemonName">{this.props.pokemon.forms[0].name}</label> <label className="pokemonType">{this.props.pokemon.types[0].type.name} •  {this.props.pokemon.id}</label>   </p>
    </div>
    )
  }
}
