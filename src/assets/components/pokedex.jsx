import React from 'react'
import PokeList from './pokeList'
import Search from './Search'

function Pokedex() {
  return (
   
    <div className='flex flex-col justify-center items-center' >

       <Search/>
      <PokeList/>
      </div>
  )
}

export default Pokedex