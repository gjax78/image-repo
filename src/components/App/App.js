import './App.css';
import { getAllImages } from '../../apiCalls.js'
import React, { useState, useEffect } from 'react'
import Images from '../Images/Images'
import Search from '../Search/Search'

const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await getAllImages()

      if ({search} === null) {
        setImages(result)
      } else if ({ search }) {
        setImages(result.filter(image => image.title.toLowerCase().includes(search)))
      }
    }
    fetchItems()
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
