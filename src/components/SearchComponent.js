import React, { Component } from 'react';
import '../css/Search.css'

class SearchComponent extends Component {
  constructor(props){
    super(props);
    this.typeSelected = React.createRef();
    this.state = {
        types: []
    };
  }

  componentWillMount() {
      fetch('https://pokeapi.co/api/v2/type').then(response => response.json()).then(typeList =>{
              this.setState({
                  types: typeList.results,
                  typeSelected: null
              })

      })
  }

    handleClick = (ty) => {
      this.setState({typeSelected: ty.currentTarget.dataset.id})
      this.props.typeSelected(ty.currentTarget.dataset.id)
    } 

    render() {
      return (
        <div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sx-12 col-xs-12">
              <div className="form-group">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="Búsqueda"/>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.types.map(pokemon => 
              <span className={pokemon.name + ' badge badge-pill'} onClick={this.handleClick.bind(this)} data-id={pokemon.name}>{pokemon.name}</span>
            )}
          </div>
        </div>
      );
    } 
  }
  
  export default SearchComponent;