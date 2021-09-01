const BASE_URL = 'https://swapi.dev/api/people';

export const request = pageNumber => (
  fetch(`${BASE_URL}/?page=${pageNumber}`)
    .then(response => response.json())
);
