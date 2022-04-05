import React, { useState, useEffect, useCallback } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import FormComponent from "./Pages/Form/";
import Datatable from "./Components/Datatable/";
import { items } from "./data/accordianData";

import Accordian from "./Components/Accordian";

import Header from "./Containers/Header";

require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [data, setData] = useState();
  // query filter
  const [q, setQ] = useState("");

  const fetchData = useCallback(async () => {
    // getting the data
    const data = await fetch("https://swapi.dev/api/people");
    // converting it to json
    const result = await data.json();
    setData(result.results);
  }, []);

  useEffect(() => {
    const result = fetchData().catch(console.error);
  }, [fetchData]);

  // Search function
  const serach = (rows = []) => {
    // geeting column from the row
    const columns = rows[0] && Object.keys(rows[0]).slice(0, 8);
    // filter needs to match all of the expression
    // some will return the value if matched any
    return rows.filter((row) => {
      return columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      );
    });
  };

  return (
    <div className="App">
      {/* <FormComponent></FormComponent> */}

      {/* Accordian */}
      {/* <Accordian items={items}></Accordian> */}
      {/* data table */}
      {/* <div className="datatable" style={{ marginTop: "5rem" }}>
        <div>
          <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <Datatable data={serach(data)}></Datatable>
      </div> */}

      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
