import axios from "axios"

export  const getAllSong = async() => {
  let res =  await axios.get("https://qtify-backend-labs.crio.do/albums/top");
  return res.data
}

export  const getAllAlbum = async() => {
  let res =  await axios.get("https://qtify-backend-labs.crio.do/albums/new");
  return res.data
}