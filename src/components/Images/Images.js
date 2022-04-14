import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import './Images.css'

const Images = ({ images }) => {
  const imageCards = images.map(image => {
    return (
      <div className='ideas-container' key={image.id}>
        <ImageCard
          src={image.image}
          title={image.title}
          originalTitle={image.original_title}
        />
      </div>
    )
  })

  return (
    <div className='ideas-container'>
      {imageCards}
    </div>
  )
}

export default Images
