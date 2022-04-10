import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import './Images.css'

const Images = ({ images }) => {
  {console.log(images)}
  const imageCards = images.map(image => {
    return (
      <div className='ideas-container'>
        <ImageCard
          src={image.url}
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
