import React from 'react'
function Pokemon({name , image }) {
  return (
    <div className='flex basis-1/4  justify-center items-center flex-col hover:bg-[#f5f5dc] h-[200px]'>
        <div className='text-center text-xl tracking-[8px]'>{name}</div>
        <div><img src={image} alt="img"  className='h-[120px] mt-[10px]'/></div>
    </div>
  )
}

export default Pokemon 