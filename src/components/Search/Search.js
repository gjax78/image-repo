import React, { useState } from 'react'
import './Search.css'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
    getQuery(e.target.value)
  }

  return (
    <section className='search'>
      <form>
        <input
        type='text'
        className='form-control'
        placeholder='Search movies'
        value={text}
        onChange={(e) => onChange(e)}
        autoFocus
        />
      </form>
    </section>
  )
}

export default Search
