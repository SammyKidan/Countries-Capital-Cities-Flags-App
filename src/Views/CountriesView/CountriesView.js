import { useState, useEffect } from 'react'
import CountryCard from '../../Components/CountryCard/CountryCard';


const CountriesView = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all/`)
      .then((response) => response.json())
      .then((data) => setCountriesData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h2>Countries</h2>
      <p> Propeller build test.</p>
      <p>
        This React App displays countries, capital cities and flags from all
        over the world was built using the countries api
        <a href="https://restcountries.com/"> restcountries.com </a>
      </p>

      <CountryCard countriesData={countriesData} />
    </div>
  );
};

export default CountriesView;
