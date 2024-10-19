import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Name: {name?.common} </h3>
      <img src={flags?.png} alt={name?.common} />
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Area: {country.area}</p>
      <p>Code: {country.cca3}</p>
      <button className="button" onClick={handleVisited}>
        {visited ? "Visited" : "Going"}{" "}
      </button>
      {visited && <p>This country has been visited!</p>}
    </div>
  );
};

export default Country;
