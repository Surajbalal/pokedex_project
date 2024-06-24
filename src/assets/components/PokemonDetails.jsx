import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();
  async function downloadPokemons() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      height: response.data.height,
      weight: response.data.weight,
      type: response.data.types.map((t) => t.type.name)
    });
  }
  useEffect(() => {
    downloadPokemons();
  }, []);
  return (
    <>
    <div className="flex flex-col justify-center items-center  border-2 border-black w-[600px] h-[600px] leading-[30px] ">
      <img src={pokemon.image} alt="" className="w-[350px] mb-[20px]"/>
     <div className="flex text-[21px]"> <div className="mr-2">Name:</div> <div className="text-2xl tracking-[8px]" > { pokemon.name}</div></div>
      <div className="text-[21px] font-sarif">weight: { pokemon.weight}</div>
      <div className="text-[21px] font-sarif">Height: { pokemon.height}</div>
      <div>
        {pokemon.types && pokemon.types.map((t) => (
          <div key={t}> {t} </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default PokemonDetails;
