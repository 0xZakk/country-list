import React, { Component } from "react";
import CountryList from "./CountryList";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    let url = "https://restcountries.eu/rest/v2/all";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          countries: data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <CountryList countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
