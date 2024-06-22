import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokeList() {
  const [val, setVal] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  async function downloadPokemons() {
    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon"    // Api link 
    const response = await axios.get(POKEDEX_URL);  // downloads list of 20 pokemons 
    const pokemonResult = response.data.results; 
    // console.log(pokemonResult);
    const pokemonResultPromise = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonData = await axios.all(pokemonResultPromise);

    const pokeListResult = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id : pokemon.id ,
        name: pokemon.name,
        image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny ,   
        types: pokemon.types,
      };
    });
    console.log(pokeListResult);
    setPokemonList(pokeListResult);
    setIsLoading(false);
  }
  useEffect(() => {
    downloadPokemons();
  }, [  ]);
  function decrement() {
    setVal(val - 1);
  }
  function increment() {
    setVal(val + 1);
  }
  return (
    <>
   
      {(isLoading) ? "loading ....." : pokemonList.map((p) => <Pokemon name = {p.name} image = {p.image} key={p.id} />)}
   
    </>
  );
}

export default PokeList;
