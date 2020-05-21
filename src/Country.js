import React from "react";

function Country({ name, subregion }) {
  return (
    <li>
      {name} - {subregion}
    </li>
  );
}

export default Country;
