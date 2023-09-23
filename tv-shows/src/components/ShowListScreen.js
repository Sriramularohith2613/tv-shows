import React, { useState, useEffect } from 'react';
import { fetchShows } from '../api';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShowListScreen = ({ history }) => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchShows().then((data) => setShows(data));
  }, []);

  const handleShowSummary = (showId) => {
    navigate(`/summary/${showId}`);
  };

  return (
    <div>
      <h1>Show List</h1>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4" key={show.show.id}>
            <Card>
              {show.show.image && <Card.Img variant="top" src={show.show.image.medium} alt={show.show.name} />}
              <Card.Body>
                <Card.Title>{show.show.name}</Card.Title>
                <Card.Text>{show.show.summary}</Card.Text>
                <Button variant="primary" onClick={() => handleShowSummary(show.show.id)}>
                  View Summary
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowListScreen;
