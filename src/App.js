import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero Section/Hero'
import Main from './component/main/Main'
import { getAllAlbum, getAllSong } from './api/api'

const App = () => {

  const [getSong, setGetSong] = useState([]);

  const [newAlbumSongs, setNewAlbumSongs] = useState([])
  const fetchData = async () => {
    try {
      const data = await getAllSong();
      setNewAlbumSongs(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(getSong);
  const[carouselToggle,setCarouselToggle]=useState(true);

    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle);
    }


    const generateNewAlbumSongs=async()=>{
      try{
        const res= await getAllAlbum();
      setNewAlbumSongs(res);
      }
      catch(error){
        console.log(error);
        return null;
      } 
    }

  return (
    <div>
      <Navbar />
      <Hero />
      <Main type='album' title='Top Albums' data={getSong}/>
      <Main type='album' title='New Albums' data={newAlbumSongs}/>
    </div>
  )
}

export default App