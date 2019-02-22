import React, { Component } from 'react'
import '../css/PokemonList.css'
import PokemonDetailComponent from './PokemonDetailComponent';

export default class PokemonCardComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      generation: null,
      habitat: null,
      evolution: null,
      happiness: null,
      capture: null
    };
  }

  getMoreInformationAboutPokemon = (id) =>{
    // fetch('https://pokeapi.co/api/v2/characteristic/' + id.currentTarget.dataset.id).then(response => response.json()).then(characteristic =>{
    //               this.setState({description: characteristic.descriptions[0].description})
    // })

    // fetch('https://pokeapi.co/api/v2/evolution-chain/' + id.currentTarget.dataset.id).then(response => response.json()).then(evolution =>{
    //   console.log(evolution)
    // })

    fetch(id.currentTarget.dataset.id).then(response => response.json()).then(info =>{
      this.setState({
        generation: info.generation.name,
        habitat: info.habitat.name,
        happiness: info.base_happiness,
        capture: info.capture_rate
      });

      fetch(info.evolution_chain.url).then(response => response.json()).then(evolution =>{
        this.setState({evolution: evolution.chain.evolves_to[0].species.name})
      })
    })
  }

  render() {
    return (
    <div>
      <div className="card-box">
        <div className={this.props.pokemon.types[0].type.name + ' cardPokemon'} data-toggle="modal" data-target={"#exampleModal" + this.props.pokemon.id} onClick={this.getMoreInformationAboutPokemon.bind(this)} data-id={ this.props.pokemon.species.url}><img  className="imgCard" src={this.props.pokemon.sprites.front_default}></img></div>
        <p><label className="pokemonName">{this.props.pokemon.forms[0].name}</label> <label className="pokemonType">{this.props.pokemon.types[0].type.name} •  {this.props.pokemon.id}</label>   </p>
      </div>

      <div className="modal fade" id={"exampleModal" + this.props.pokemon.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col imgCardDetail" >
                <img  src={this.props.pokemon.sprites.front_default}></img>
                <h5 className="modal-title" id="exampleModalLabel">{this.props.pokemon.id} {this.props.pokemon.forms[0].name}</h5>
                <label>ALTURA: {this.props.pokemon.height + 'm  '}</label>  <label>PESO: {this.props.pokemon.weight + 'kg  '}</label>   <label>TIPO: {this.props.pokemon.types[0].type.name}</label>  
                <hr/>
                </div>
            </div>

            <div className="row mar">
            <div className="col-6">
              <div className="row">
                <span><strong>Generación: </strong>{this.state.generation}</span>
              </div>
              <div className="row">
                <span><strong>Habitat: </strong>{this.state.habitat}</span>
              </div>
              <div className="row">
                <span><strong>Evolución: </strong>{this.state.evolution == this.props.pokemon.forms[0].name ? "Ultima evolución" : this.state.evolution }</span>
              </div>
              <div className="row">
                <span><strong>Felicidad: </strong>{this.state.happiness}</span>
              </div>
              <div className="row">
                <span><strong>Rango de Captura: </strong>{this.state.capture}</span>
              </div>
            </div>
            <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    )
  }
}
