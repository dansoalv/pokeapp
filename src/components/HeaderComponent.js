import React, { Component } from 'react';
import logo from '../assets/pokeball.png'
import '../css/Header.css'

class HeaderComponent extends Component {
    render() {
      return (
          <div className="row">
            <div className="divHeader">
              <img className="logo" src={logo} alt="pokemon"></img>
              <h1>PokeDex</h1>
            </div>
          </div>
      );
    }
  }
  
  export default HeaderComponent;