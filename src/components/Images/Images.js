import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import './Images.css'

const Images = ({ images }) => {
  {console.log(images)}
  const imageCards = images.map(image => {
    return (
      <div className='ideas-container'>
        <ImageCard
          src={image.image}
          title={image.title}
          originalTitle={image.original_title}
          key={image.id}
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
