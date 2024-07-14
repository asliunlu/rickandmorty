import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [elementCount] = useState(9);
  let [search, setSearch] = useState("");
  let [dataFromFilter, setDataFromFilter] = useState(null);
  let [dataFromSort, setDataFromSort] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  const handleprops = (data) => {
    setDataFromFilter(data);
  };

  const handlepropss = (data) => {
    setDataFromSort(data);
  };
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          width={300}
          height={150}
        />
      </div>

      <div className="">
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      </div>
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            elementCount={elementCount}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
            sendpropstoparent={handleprops}
            sortpropssent={handlepropss}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card
                page="/"
                results={results}
                dataFromFilter={dataFromFilter}
                dataFromSort={dataFromSort}
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
