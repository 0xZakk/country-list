import React, { Component } from "react";
import { Link } from "react-router-dom";

class Country extends Component {
  constructor() {
    super();
    this.state = {
      country: {},
    };
  }

  componentDidMount() {
    let { name } = this.props.match.params;
    fetch("https://restcountries.eu/rest/v2/name/" + name)
      .then(res => res.json())
      .then(data => {
        this.setState({
          country: data[0],
        });
      });
  }

  render() {
    let { name, capital, nativeName, region, subregion } = this.state.country;
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          <li>Capital: {capital}</li>
          <li>Native name: {nativeName}</li>
          <li>Region: {region}</li>
          <li>Subregion: {subregion}</li>
        </ul>
      </div>
    );
  }
}

// function Country(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <ul>
//         <li>Capital: {props.capital}</li>
//         <li>Native name: {props.nativeName}</li>
//         <li>Region: {props.region}</li>
//         <li>Subregion: {props.subregion}</li>
//       </ul>
//     </div>
//   );
// }

export default Country;
