const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

function fetchTotalPokemonCount() {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      return response.json();
    })
    .then((data) => {
      const totalCount = data.count;
      return totalCount;
    });
}

fetchTotalPokemonCount()
  .then((count) => {
    console.log('Total Pokémon Count:', count);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
