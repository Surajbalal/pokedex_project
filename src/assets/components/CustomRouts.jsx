import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Pokedex from './pokedex'
import PokemonDetails from './PokemonDetails'
// import Router from 'rout' 

function CustomRouts() {
  return (
    <> <div className='flex flex-col justify-center items-center' >

<Link to={"/"}>    <div className='text-[80px]'>Pokedex</div> </Link>
   
    <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path = '/pokemon/:id' element = {<PokemonDetails/>}/>
    </Routes>
    </div>
    </>
  )
}

export default CustomRouts