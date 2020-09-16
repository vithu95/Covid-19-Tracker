import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";
import InfoBox from "./InfoBox.js";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["worldwide"]);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1> COVID - 19 TRACKER </h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide"> Worldwide </MenuItem>
            {/* Loop through all the countries and show a drop down list of the options */}
            {countries.map((country) => (
              <MenuItem value={country.value}> {country.name} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Header */}
      {/* Title + Select Input dropdown field */}
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={21453} total={3000123} />
        <InfoBox title="Recoverd" cases={12342} total={30123} />
        <InfoBox title="Deaths" cases={3462} total={123623} />
      </div>
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}
export default App;
