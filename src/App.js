import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './routes';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;
function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div data-testid='app'>
      <Navigation />

      <Home pokemonList={pokemonList} />
    </div>
  );
}

export { App };
