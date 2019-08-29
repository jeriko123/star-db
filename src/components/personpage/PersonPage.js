import React, {Component} from 'react';
import './PersonPage.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";

export default class PersonPage extends Component {
  SwapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    isError: false
  };

  componentDidCatch(){
    this.setState({isError: true});
  }

  OnPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    if (this.state.isError) {
      return  <ErrorIndicator />
    }

    return(
      <div className="row">
        <div className="col" style={{ marginLeft: 15, marginBottom: 20}} >
          <ItemList
            onItemSelected={this.OnPersonSelected}
            getData={this.SwapiService.getAllPeople}
            renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
          />
        </div>
        <div className="col" style={{ marginRight: 15, marginTop: -16}}>
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }
}