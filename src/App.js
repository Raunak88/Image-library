import React, { useState } from "react";
import axios from "axios";
import "./SearchResults.css";
import SearchResults from "./SearchResults";

function App() {
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [loader, setLoader] = useState(false);


  const getResults = function (ss) {
    setLoader(false);
    axios
      .get("https://api.unsplash.com/search/photos/", {
        params: {
          query: ss,
          // client_id: '2bWr8JILa0SvwB13R117MJgDWqyQgSv9wRGx21-NyW0',
          client_id: "cyW6J_QZ1HlJtju2orbccuWRPOeULwK1jbFtNvqQbX8",
          per_page: 25,
        },
      })
      .then(function (response) {
        console.log(response);
        setResults(response.data.results);
        setLoader(false);
      });
  };
  const search = function (e) {
    e.preventDefault();
    if (!!searchString) {
      getResults(searchString);
    } else {
      setResults([]);
    }
  };

  const handleChange = function (e) {
    setSearchString(e.target.value || "");
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid pb-2 mb-2">
        <div className="container">
          <h1 className="display-4">Image Library</h1>
          <p className="lead">
            Welcome to an extensive library of stock images from across the web
          </p>
        </div>
      </div>
      <div className="form-container sticky-top py-4">
        <form className="form w-50 mx-auto" onSubmit={search.bind(this)}>
          <input type="text" onChange={handleChange.bind(this)} />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {loader ? (
        <div id="outer">
          <div id="middle">
            <div id="inner"></div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <SearchResults results={results} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
