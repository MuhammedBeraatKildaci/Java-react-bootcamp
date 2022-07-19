import React, { useState, useEffect } from "react";
import List from "./components/List";
import "./assets/css/style.css";
import PersonService from "./services/personService";

function App() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loaded();
    let personService = new PersonService();
    personService.getPerson().then((response) => setPersons(response.data));
  }, []);

  const loaded = () => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  };

  const clearAllNames = () => {
    setPersons([]);
  };
  const itemList = () => (
    <>
      <List names={persons} />
      <button onClick={clearAllNames}>Clear All</button>
    </>
  );

  const loading = () => (
    <div className="loaded">
      <img src="./loading.svg" />
    </div>
  );

  return (
    <main>
      <section className="container">
        {isLoading ? itemList() : loading()}
      </section>
    </main>
  );
}

export default App;
