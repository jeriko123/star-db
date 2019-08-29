import React, { Component } from 'react';
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import Header from '../header';
import RandomPlanet from '../random-planet';


import './app.css';
import PersonPage from "../personpage/PersonPage";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";


export default class App extends Component {
  SwapiService = new SwapiService();

  state = {
    isSowRandom: true,
    hasError: false
  };

  onToogleShowRandom = () => {
    this.setState(({isSowRandom}) => {
      return { isSowRandom: !isSowRandom}
    });
  };

  componentDidCatch(){
    console.log('didcatch');
    this.setState({hasError: true});
  }

  render() {
    const { isSowRandom } = this.state;

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="container" style={{ width: '100%'}}>
        <div className="col">
          <Header/>
        </div>
        {isSowRandom && ( <div className="col">
          <RandomPlanet/>
        </div>
        )}
        <button
          style={{ marginLeft: 15, marginBottom: 25 }}
          className="btn btn-info btn-lg"
          onClick={this.onToogleShowRandom}
        >
          Toogle Random Planet
        </button>
        <ErrorButton/>
        <PersonPage/>
        <div className="row">
          <div className="col" style={{ marginLeft: 15, marginBottom: 20}} >
            <ItemList
              getData={ this.SwapiService.getAllPlanets }
              onItemSelected={this.OnPersonSelected}
              renderItem={(item) => item.name}
            />
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ marginLeft: 15, marginBottom: 20}} >
            <ItemList
              getData={ this.SwapiService.getAllStarships }
              onItemSelected={this.OnPersonSelected}
              renderItem={(item) => item.name}
            />
          </div>
        </div>
      </div>
    );
  }
};
