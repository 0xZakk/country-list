import React from "react";
import { Link } from "react-router-dom";

function CountryList({ countries }) {
  return (
    <ul>
      {countries.map(country => {
        let { name, subregion } = country;
        return (
          <li key={name}>
            <Link to={"/" + name}>
              {name} - {subregion}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CountryList;
