import React, { useEffect, useState } from 'react'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridData from '../Card/GridData';
// import { getAllSong } from '../../api/api';
// import styles from "./Section.module.css"  npm i swiper

import Carousel from '../Carousel/Carousel';
import { CircularProgress } from '@mui/material';
import "./main.css"

const Main = ({type,title,data,toggle=true}) => {

  const[carouselToggle,setCarouselToggle]=useState(true);

  const handleToggle=()=>{
      setCarouselToggle(!carouselToggle);
  }
  console.log(data)

  return (
    <div style={{margin: "40px"}}>
     {/* small top div with Name of section and "show all/collepse all" button */}
        <div className="sectionTop">
            <h3 style={{color:"white"}}>{title}</h3>
            <h4 onClick={handleToggle} className="toggleText">

            {/*  check if we want to show the show/collapse button or not */}
            {toggle?(
                 carouselToggle?"Show All":"Collapse All"
            ):(
                <></>
            )}
            </h4>
        </div>
        
        {data.length?(
            <div className="sectionInnerWrapper">
             {/* here, if carouselToggle is false then show first condition here(means "show all albums"), else show second (means show "Collpased view with corousel")*/}
            {!carouselToggle?(
                <div className="showAllWrapper">
                {data.map((album)=>(
                    //show card here
                    <GridData data={album} type={type} key={album.id}/>
                ))}
                </div>
            ):(
              <div>
              {/* show carousel here */}
              <Carousel data={data} renderCardComponent={(data)=><GridData data={data} type={type}/>}/>
              </div>  
            )}
            </div>
        ):(
            <div className="progressBar">
            {/* when no data recieved just show circular loading icon */}
            <CircularProgress />
            </div>
        )}

    </div>
  )
}

export default Main