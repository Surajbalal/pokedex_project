
import Pokemon from "./Pokemon";
import usePokemonList from "./UsePokemonList";

function PokeList() {
  const [pokemonListState, setPokemonListState] = usePokemonList()

  return (
    <>
      <div className="flex flex-wrap mt-[60px] ">
        {pokemonListState.isLoading
          ? "loading ....."
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div>
        <button
          className="w-[130px] h-[50px] bg-gray-300  mx-[50px] my-[50px] hover:bg-[#f5f5dc] border-[8px] border-black-300 border-double"
          disabled={!pokemonListState.prevurl}
          onClick={() =>
            setPokemonListState((pokemonListState) => ({
              ...pokemonListState,
              pokedexurl: pokemonListState.prevurl,
            }))
          }
        >
          Prev
        </button>
        <button
          className="w-[130px] h-[50px] bg-gray-300 mx-[50px] my-[50px] hover:bg-[#f5f5dc]  border-[8px] border-black-300 border-double "
          disabled={!pokemonListState.nexturl}
          onClick={() =>
            setPokemonListState((pokemonListState) => ({
              ...pokemonListState,
              pokedexurl: pokemonListState.nexturl,
            }))
          }
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PokeList;
