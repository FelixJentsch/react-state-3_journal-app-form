import React, { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";

function App() {
  const [entries, setInternalEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    console.log("Adding entry:", newEntry);

    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const id = uid();
    const entryWithDateAndId = { ...newEntry, date, id };

    setInternalEntries([entryWithDateAndId, ...entries]);
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
