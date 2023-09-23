import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com';

export const fetchShows = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/shows?q=all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
