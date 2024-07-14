const axios = require('axios');

async function searchNearbyPlaces() {
  const apiKey = 'AIzaSyDgkLeMOibYnMHerP4thuidT3lNOcP_2TE';
  const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

  const params = {
    location: '52.369358,4.889258',
    radius: 500,
    type: 'restaurant',
    key: apiKey,
  };

  try {
    const response = await axios.get(url, { params });
    const places = response.data.results;
    console.log(places);
  } catch (error) {
    console.error('Error fetching nearby places:', error.message);
  }
}

// Call the function to search nearby places
searchNearbyPlaces();