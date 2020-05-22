import React, { Component } from "react";
import CountryList from "./CountryList";
import { Route, Link, Redirect } from "react-router-dom";
import About from "./About";
import Country from "./Country";
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
        <nav>
          <h1>Countries of the World</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route
            path="/"
            exact
            render={() => {
              return <CountryList countries={this.state.countries} />;
            }}
          />
          <Route exact path="/about" component={About} />
          <Route
            path="/:name"
            exact
            render={routerProps => {
              let { name } = routerProps.match.params;
              let url = "/country/" + name;
              return <Redirect to={url} />;
            }}
          />
          <Route
            path="/country/:name/"
            exact
            component={Country}
            // render={routerProps => {
            //   let { name } = routerProps.match.params;
            //   let country = this.state.countries.find(
            //     country => country.name === name,
            //   );
            //   return <Country {...country} />;
            // }}
          />
        </main>
      </div>
    );
  }
}

export default App;
