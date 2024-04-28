import axios from "axios"

export  const getAllSong = async() => {

  try {
    
    let res =  await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export  const getAllAlbum = async() => {

  try {
    
    let res =  await axios.get("https://qtify-backend-labs.crio.do/albums/new");
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}