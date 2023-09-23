import React from 'react';
import { Button } from 'react-bootstrap';

const ShowSummaryScreen = ({ match }) => {
  // Placeholder data
  const show = {
    name: 'Sample Show',
    summary: 'This is a summary of the show.',
  };

  const handleBookTicket = () => {
    // Implement the logic to open a form with the movie name and details pre-filled.
    // You can use local or session storage to store the user details.
  };

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <Button variant="primary" onClick={handleBookTicket}>
        Book Ticket
      </Button>
    </div>
  );
};

export default ShowSummaryScreen;
