import React, { Component } from 'react';
import '../css/Search.css'

class SearchComponent extends Component {
    render() {
      return (
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sx-12 col-xs-12">
              <div className="form-group">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="Búsqueda"/>
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default SearchComponent;