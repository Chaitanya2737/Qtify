import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero Section/Hero'
import Main from './component/main/Main'
import { getAllSong } from './api/api'

const App = () => {

  const [getSong, setGetSong] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getAllSong();
      setGetSong(data);
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

  return (
    <div>
      <Navbar />
      <Hero />
      <Main type='album' title='Top Albums' data={getSong}/>
      {/* <Main type='album' title='New Albums' data={newAlbumSongs}/> */}
    </div>
  )
}

export default App