import './App.css';
import fetchAPI from '../../apiCalls.js'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchAPI.getAllTricks()
    .then(data => {
      setImages( data['message'] )
      })
    }, [])


  return (
    <div className="App">
      <h1>Image Repository!</h1>
    </div>
  )
}

export default App;
