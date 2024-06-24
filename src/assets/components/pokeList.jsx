import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedexurl,setPokedexurl]=useState("https://pokeapi.co/api/v2/pokemon");
  const [nexturl,setNexturl] = useState();
  const [preurl , setPrevurl] = useState();
  async function downloadPokemons() {
  // Api link 
  setIsLoading(true)
    const response = await axios.get(pokedexurl);  // downloads list of 20 pokemons 
    console.log(response.data)
    setNexturl(response.data.next)
    setPrevurl(response.data.previous
    )
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
        types: pokemon.types
      };
    });
    console.log(pokeListResult);
    setPokemonList(pokeListResult);
    setIsLoading(false);
  }
  useEffect(() => {
    downloadPokemons();
  }, [ pokedexurl ]);

  return (
    <>
   <div className="flex flex-wrap mt-[60px] ">
      {(isLoading) ? "loading ....." : pokemonList.map((p) => <Pokemon name = {p.name} image = {p.image} key={p.id} id = {p.id}/>)}
      </div>
      <div>
        <button className="w-[130px] h-[50px] bg-gray-300  mx-[50px] my-[50px] hover:bg-[#f5f5dc] border-[8px] border-black-300 border-double" disabled={preurl == null} onClick={() => setPokedexurl(preurl)}>Prev</button>
        <button className="w-[130px] h-[50px] bg-gray-300 mx-[50px] my-[50px] hover:bg-[#f5f5dc]  border-[8px] border-black-300 border-double " disabled={nexturl === null} onClick={() => setPokedexurl(nexturl)}>Next</button>
      </div>
    </>
  );
}

export default PokeList;
