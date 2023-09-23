import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowListScreen from './components/ShowListScreen';
import ShowSummaryScreen from './components/ShowSummaryScreen';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowListScreen />} />
          <Route path="/summary/:showId" element={<ShowSummaryScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
