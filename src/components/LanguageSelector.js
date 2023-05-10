import React from "react"
import {useState}from'react';
import ReactLanguageSelect from "react-language-select";

//import css module
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default function LanguageSelector() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  return (
    <div className="App">
      <h1>Select Language</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReactLanguageSelect
      names={"international"}
      onSelect={(languageCode)=>setSelectedLanguage(languageCode)}
      />
      <div>Language Code: {selectedLanguage}</div>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
      />{" "}
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
      <div>{country}</div>
      <div>{region}</div>
    </div>
  );
}
