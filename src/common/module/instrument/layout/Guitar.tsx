import React from 'react'
import GuitarComp from './GuitarComp'

interface GuitarProps {
  params: { slug: string };
}

const Guitar = ({params}: GuitarProps) => {
  return (
    <div>
     <GuitarComp params={params} />
    </div>
  )
}

export default Guitar
