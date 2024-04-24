import axios from "axios"

export  const getAllSong = async() => {
  let res =  await axios.get("https://qtify-backend-labs.crio.do/albums/top");
  return res.data
}