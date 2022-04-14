
export const getAllImages = async () => {
  let response = await fetch('https://ghibliapi.herokuapp.com/films/')
    if (!response.ok) {
      throw new Error('Cannot load dog images. Please reload')
    }
    let allPictures = await response.json()
    return allPictures
}
