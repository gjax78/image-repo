import React, { useState } from 'react'
import './ImageCard.css'

const ImageCard = ({ src, title, originalTitle }) => {
  const [isFav, setIsFav] = useState(false)

  return (
    <div className='card'>
      <h1>{title}</h1>
      <h2>{originalTitle}</h2>
      <img src={src} />
      <button className='like-button'
        onClick={() => setIsFav(!isFav)}
        >{isFav ? '🤍' : '💙'} </button>
    </div>
  )
}

export default ImageCard
