import React from "react";
import Country from "./Country";

function CountryList({ countries }) {
  return (
    <ul>
      {countries.map(country => {
        return <Country key={country.name} {...country} />;
      })}
    </ul>
  );
}

export default CountryList;
