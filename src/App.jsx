import { useState, useEffect } from "react";
import Profiles from "./profiles";
// import { InstantSearch, SearchBox, Hits, connectStateResults } from 'algoliasearch/react';

import "./index.css";
import SearchBar from "./searchbar";
export default function App() {
  const [characterProfiles, setCharacterProfiles] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.moogleapi.com/api/v1/characters"
      );
      const json = await response.json();
      setCharacterProfiles(json);
      // setCharacterProfiles(mockJson);
      console.log({ characterProfiles });
    } catch (error) {
      console.log(`${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log({ characterProfiles });
  return (
    <div className="app">
      <div>
      <h1>Final Fantasy Character Profiles</h1>
      <SearchBar/>
      </div>
    <div className="profiles-container">
        {characterProfiles.map((characterProfile) => (
          <Profiles
            name={characterProfile.name}
            orgin={characterProfile.orgin}
            description={characterProfile.description} />
        ))}
      </div>
      </div>
  );
}
