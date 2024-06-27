import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Venues() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchAttractions = async (e) => {
    e.preventDefault();
    const apiKey = "9PokvHnOcPzH0q0Gd3NaCDwhJRt9byCb";
    const url = `https://app.ticketmaster.com/discovery/v2/venues.json?apikey=${apiKey}&keyword=${query}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data._embedded) {
          setResults(data._embedded.venues);
        } else {
          setResults([]);
        }
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setResults([]);
      });
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Welcome to Venues Finder</h1>
        <p className="lead">Discover events, venues, and performances around you.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="d-flex" onSubmit={searchAttractions}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search attractions"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div>
        {results.length > 0 && (
          <ul className="list-group mt-4">
            <div className="row">
              {results.map((venues) => (
                <div key={venues.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card h-100">
                    <img src={venues.images[0].url} className="card-img-top" alt={venues.name} />
                    <div className="card-body">
                      <h5 className="card-title">{venues.name}</h5>
                      <p className="card-text">{venues.classifications[0].segment.name}</p>
                    </div>
                    <div className="card-footer">
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Venues;
