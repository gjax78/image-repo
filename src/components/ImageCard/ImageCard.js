import React from 'react'
import './ImageCard.css'

const ImageCard = ({ src }) => {
  return (
    <div className='card'>
      <img src={src} />
    </div>
  )
}

export default ImageCard
