import React, { useEffect } from 'react'
import "./FilterSection.css"
// import Section from '../Section/Section';
import BasicTabs from '../BasicTabs/BasicTabs';
import Carousel from '../Carousel/Carousel';
// import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';
import GridData from '../Card/GridData';
// import audio from '/some path'

const FilterSection = ({type, title, value, filteredData, handleChangeIndex}) => {




  return (
    <div className="wrapper">
       
            <div className="heading">
               <h3>{title}</h3> 
            </div>
            <BasicTabs handleChangeIndex={handleChangeIndex}/>
        {filteredData.length?(
                <div className="cardsWrapper">
                    <Carousel data={filteredData} renderCardComponent={(filteredData)=><GridData 
                    data={filteredData} type={type}/>}/>
                </div>
        ):(
            <div  className="progressBar">
                <CircularProgress/>
            </div>
        )}

    </div>
  )
}

export default FilterSection