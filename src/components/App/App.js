import './App.css';
import { getAllImages } from '../../apiCalls.js'
import React, { useState, useEffect } from 'react'
import Images from '../Images/Images'
import Search from '../Search/Search'

const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    try {
      const images = await getAllImages()
      const filteredImages = images
      setImages(filteredImages)
    }
    catch (error) {
      console.log("error")
    }
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  // const filteredSearch = () => {
  //
  // }

  useEffect(() => {
    if (search === null) {
      getData()
    } else if (search){
      getData(images.filter(image => image.title.toLowerCase().includes(search)))
    }
    getData()
  }, [search])

  return (
    <div className="App">
      <h1>Studio Ghibli Image Repository</h1>
      <Search getQuery={(e) => setSearch(e)}/>
      <Images images={images} />
    </div>
  )
}

export default App;
