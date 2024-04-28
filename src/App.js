import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero Section/Hero';
import Main from './component/main/Main';
import { getAllAlbum, getAllSong } from './api/api';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getAllSong();
      setSongs(data);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  const fetchAlbums = async () => {
    try {
      const data = await getAllAlbum();
      setAlbums(data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchAlbums();
  }, []);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Main type="album" title="Top Albums" data={albums} />
      <Main type="album" title="New Albums" data={albums} />
    </div>
  );
};

export default App;
