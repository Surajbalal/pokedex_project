import React from 'react'
import { Link } from 'react-router-dom'
function Pokemon({name , image, id }) {
  return ( 
    <div className='flex basis-1/4  justify-center items-center flex-col hover:bg-[#f5f5dc] h-[200px]'>
    
        <Link to={`/pokemon/${id}`}>
        console.log({id})
        <div className='text-center text-xl tracking-[8px]'>{name}</div>
        <div><img src={image} alt="img"  className='h-[120px] mt-[10px]'/></div>
        </Link>
    </div>
  )
}

export default Pokemon 