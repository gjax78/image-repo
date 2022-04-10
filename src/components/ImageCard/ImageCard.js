import React, { useState } from 'react'
import './ImageCard.css'

const ImageCard = ({ src }) => {
  const [isFav, setIsFav] = useState(false)

  return (
    <div className='card'>
      <img src={src} />
      <button className='like-button'
        onClick={() => setIsFav(!isFav)}
        >{isFav ? '🤍' : '❤️'} </button>
    </div>
  )
}

export default ImageCard
