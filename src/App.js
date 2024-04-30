import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero Section/Hero';
import Main from './component/main/Main';
import { fetchSongs, getAllAlbum, getAllSong, getSong } from './api/api';
// import Filter from './component/Filter/Filter';
import FilterSection from './component/FilterSection/FilterSection';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);
  const[songsData, setSongsData]=useState([]);

  //to store the index selected inn filters, can be ignored
  const[value,setValue]= useState(0);

  //to store the finally filtered songs
  const[filteredData, setFilteredData]=useState([]);

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




  // console.log(song)

  useEffect(() => {
    fetchData();
    fetchAlbums();
    generateSongs(); 
    
  }, []);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };


  const generateSongs=async()=>{
    try{
      console.log("generateSongs");
      const res=await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    }
    catch(error){
      return null;
    }
  }

  const generateNewSongs=(index)=>{

    let key="";
    if(index===0){
      // suppose someOne select 0th tab after 2nd tab 
      //set the default songsData as the final filtered data, bcz we need to show all of songs now
      generateSongs();
      return;
    }
    else if(index===1){
      key="rock";
    }
    else if(index===2){
      key="pop";
    }
  
    else if(index===3){
      key="jazz";
    }
    else if(index===4){
      key="blues";
    }
  
    let newSongsArray=songsData.filter((song)=>{
      console.log("key: ",key)
      return(song.genre.key===key);
    })
  
    console.log("generateNewSongs triggered and filtered this Data: ", newSongsArray)
    setFilteredData(newSongsArray);
  }
  //rock pop jazz blues

  //to handle any change in the selected tab of the songs section and call the generateNewSongs
 const handleChangeIndex= async(newValue)=>{
  console.log("handleChangeIndex triggered with newValue: ",newValue)
  setValue(newValue);
  generateNewSongs(newValue);
 }

  return (
    <div>
      <Navbar />
      <Hero />
      <Main type="album" title="Top Albums" data={songs} />
      <Main type="album" title="New Albums" data={albums} />
      <FilterSection  type='song' title='Songs' value={value} filteredData={filteredData} handleChangeIndex={handleChangeIndex}/>

    </div>
  );
};

export default App;
