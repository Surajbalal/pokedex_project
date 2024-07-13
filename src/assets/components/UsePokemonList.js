
import axios from "axios";
import React, { useEffect, useState } from "react";

function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexurl: "https://pokeapi.co/api/v2/pokemon",
        nexturl: "",
        prevurl: "",
      });
      async function downloadPokemons() {
        // Api link
        const response = await axios.get(pokemonListState.pokedexurl);
        console.log(pokemonListState.pokedexurl); // downloads list of 20 pokemons
        console.log(response.data);
        const pokemonResult = response.data.results;
    
        const pokemonResultPromise = pokemonResult.map((pokemon) =>
          axios.get(pokemon.url)
        );
        const pokemonData = await axios.all(pokemonResultPromise);
    
        const pokeListResult = pokemonData.map((pokeData) => {
          const pokemon = pokeData.data;
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other
              ? pokemon.sprites.other.dream_world.front_default
              : pokemon.sprites.front_shiny,
            types: pokemon.types,
          };
        });
        console.log(pokeListResult);
    
        setPokemonListState((pokemonListState) => ({
          ...pokemonListState,
          pokemonList: pokeListResult,
          isLoading: false,
          prevurl: response.data.previous,
          nexturl: response.data.next,
        }));
      }
     
      useEffect(() => {
        downloadPokemons();
      }, [pokemonListState.pokedexurl]);
  return [pokemonListState, setPokemonListState]
  
}

export default usePokemonList