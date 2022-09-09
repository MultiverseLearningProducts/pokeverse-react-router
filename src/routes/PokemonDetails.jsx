import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails() {

    const { name } = useParams();
    const [ pokemon, setPokemon ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {

        const fetchPokemon = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await res.json();
            console.log(data);
            setPokemon(data);
            setLoading(false);
        };
        fetchPokemon();
    }, [name]);

    if(loading) {
        return <div>Loading...</div>;
    }
    
  return (
    <div>
      <h2>Pokemon Details</h2>
      <p>{pokemon.name}</p>
    </div>
  )
}

export default PokemonDetails;