import React, { Component } from 'react';
import '../css/Search.css'

class SearchComponent extends Component {

  searchText = React.createRef();

  constructor(props){
    super(props);
    this.typeSelected = null;
    this.searchT = null
    this.state = {
        types: [],
    };
  }

  componentWillMount() {
      fetch('https://pokeapi.co/api/v2/type').then(response => response.json()).then(typeList =>{
              this.setState({
                  types: typeList.results,
                  typeSelected: 'https://pokeapi.co/api/v2/pokemon'
              })

      })
  }

    handleClick = (ty) => {
      this.setState({typeSelected: ty.currentTarget.dataset.id})
      this.props.typeSelected(ty.currentTarget.dataset.id)
    } 

    handleSearch = (n) => {
      n.preventDefault()
      this.setState({searchT: this.searchText.current.value})
      this.props.searchT(this.searchText.current.value)
    }

    render() {
      return (
        <div>
        <form onSubmit={this.handleSearch}>
          <div className="row">
          <div className="col-lg-4 col-md-6 col-sx-12 col-xs-12">
            <div className="form-group">
              <i className="fa fa-search"></i>
              <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="Búsqueda" ref={this.searchText}/>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sx-12 col-xs-12">
              <button type="submit" className="btn btn-primary" >Búscar</button>          
            </div>
          </div>
        </form>
          
          <br/>
          <div className="row">
            {this.state.types.map(pokemon => 
              <span className={pokemon.name + ' badge badge-pill'} onClick={this.handleClick.bind(this)} data-id={pokemon.url}>{pokemon.name}</span>
            )}
          </div>
          <br/>
        </div>
      );
    } 
  }
  
  export default SearchComponent;