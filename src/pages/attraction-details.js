import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AttractionDetail() {
  const { id } = useParams();
  const [attraction, setAttraction] = useState(null);

  useEffect(() => {
    const apiKey = "9PokvHnOcPzH0q0Gd3NaCDwhJRt9byCb";
    const url = `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setAttraction(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setAttraction(null);
      });
  }, [id]);

  if (!attraction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card m-5 p-5 mb-4">
        <div className="d-flex justify-content-start">
            {attraction.externalLinks?.facebook?.[0]?.url && (
                <a href={attraction.externalLinks.facebook[0].url} className="badge bg-primary mx-1" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"> Facebook</i></a>
            )}
            {attraction.externalLinks?.twitter?.[0]?.url && (
                <a href={attraction.externalLinks.twitter[0].url} className="badge bg-dark mx-1" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"> X</i></a>
            )}
            {attraction.externalLinks?.instagram?.[0]?.url && (
                <a href={attraction.externalLinks.instagram[0].url} className="badge bg-danger mx-1" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"> Instagram</i></a>
            )}
        </div>
        <h1 className="card-title text-center m-5">{attraction.name}</h1>
      {attraction.images?.[6]?.url && (
        <img src={attraction.images[6].url} alt={attraction.name} className="card-img-top img-fluid w-50 mx-auto d-block mb-5" />      )}
        <div className="card-body">
            <div className="row">
            <div className="col-md-6">
                {attraction.classifications?.[0]?.segment?.name && (
                <p className="card-text"><strong>Category:</strong> {attraction.classifications[0].segment.name}</p>
                )}
            </div>
            <div className="col-md-6">
                {attraction.upcomingEvents?._total > 0 && (
                  <p className="card-text text-center"><strong>Upcoming Events:</strong> {attraction.upcomingEvents._total}</p>
                )}
            </div>
        </div>
         <div className="mt-5">
            {attraction.url && (
                <a href={attraction.url} className="btn btn-primary mb-2 d-block w-100 text-center" target="_blank" rel="noopener noreferrer">View on Ticketmaster</a>            )}
          </div>
      </div>
    </div>
  );
}

export default AttractionDetail;
