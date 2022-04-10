const fetchAPI = {
  getAllImages() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Cannot load dog images. Please reload')
      }
      return response.json()
    })
  }
}

export default fetchAPI
