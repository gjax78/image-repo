import './App.css';
import { getAllImages } from '../../apiCalls.js'
import React, { useState, useEffect } from 'react'
import Images from '../Images/Images'

const App = () => {
  const [images, setImages] = useState([])

  const getData = async () => {
    try {
      const images = await getAllImages()
      const filteredImages = images.data.memes
      setImages(filteredImages)
    }
    catch (error) {
      console.log("error")
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <h1>Image Repository!</h1>
      <Images images={images} />
    </div>
  )
}

export default App;
