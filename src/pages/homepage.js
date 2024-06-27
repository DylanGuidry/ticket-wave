import React, { useEffect } from 'react';
import nyc from '../images/370277f1-nyc-corporate-event-venue-appel-room-1024x683.jpg.webp'
import dodgers from '../images/Dodger Stadium by Hunter Kerhart 02.jpg';
import venue from '../images/Apollo Theater_GettyImages-1219682657.jpg';
import concert from '../images/pexels-sebastian-ervi-866902-1763075.jpg';

const Homepage = () => {

  useEffect(() => {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_TICKETMASTER_API_KEY}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  , []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center font-weight-bold">Welcome to Ticket Wave!</h1>
          <p className="text-center">Ride the Ticket Wave to unforgettable live experiences!</p>
          <img src={concert} alt="Concert" className="shadow p-3 mb-5 bg-white rounded w-100 mx-auto d-block mt-3" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="text-center">
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img src={dodgers} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Attraction Search</h5>
              <p className="card-text">This feature enables users to search for specific attractions, such as artists, bands, sports teams, or performers. Users can filter results based on criteria like attraction name, type, genre, or geographical location. This search helps users find detailed information about the attraction, including upcoming events, related news, and profiles.</p>
              <a href="/attractions" className="btn btn-primary mt-auto">Search Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={nyc} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Event Search</h5>
              <p className="card-text">This search allows users to find events like concerts, sports games, theater performances, and festivals. Users can filter the results by various parameters, including date range, location, keyword, genre, and event type. The search provides comprehensive details about each event, such as the schedule, ticket availability, pricing, and venue information.</p>
              <a href="#" className="btn btn-primary mt-auto">Search Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={venue} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Venue Search</h5>
              <p className="card-text">This feature helps users locate venues where events are held. Users can search by venue name, location, or venue type (e.g., stadiums, theaters, clubs). The search results include detailed information about each venue, such as the address, capacity, seating charts, and a list of upcoming events at that venue. This helps users find suitable venues for their interests and plan their visits accordingly.</p>
              <a href="venues" className="btn btn-primary mt-auto">Search Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;