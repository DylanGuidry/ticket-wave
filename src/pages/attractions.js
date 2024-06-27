import React, { useState } from 'react';

function Attractions() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const searchAttractions = async (e) => {
    e.preventDefault();
    const apiKey = "9PokvHnOcPzH0q0Gd3NaCDwhJRt9byCb";
    const url = `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${apiKey}&keyword=${query}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data._embedded) {
          setResults(data._embedded.attractions);
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
        <h1>Welcome to Attractions Finder</h1>
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
              {results.map((attraction) => (
                <div key={attraction.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card h-100">
                    <img src={attraction.images[0].url} className="card-img-top" alt={attraction.name} />
                    <div className="card-body">
                      <h5 className="card-title">{attraction.name}</h5>
                      <p className="card-text">{attraction.classifications[0].segment.name}</p>
                    </div>
                    <div className="card-footer">
                      <a href="#" className="btn btn-primary">Event Details</a>
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

export default Attractions;