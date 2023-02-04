import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  defaultValue={props.defaultKeyword}
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="col-3 p-0">
                <button
                  type="submit"
                  class="btn btn-primary w-100 search-button"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>&nbsp;Search
                </button>
              </div>
            </div>
          </form>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
