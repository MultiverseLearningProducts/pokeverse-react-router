import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import Home from './routes/Home';
import PokemonDetails from './routes/PokemonDetails';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div data-testid='app'>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={<Home loading={loading} pokemonList={pokemonList} />}
          />
          <Route path='/:name' element={<PokemonDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export { App };