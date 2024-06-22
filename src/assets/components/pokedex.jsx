import React from 'react'
import PokeList from './pokeList'
import Search from './Search'

function Pokedex() {
  return (
   
    <div>
      <div className='text-blue-600'>Pokedex</div>
       <Search/>
      <PokeList/>
      </div>
  )
}

export default Pokedex