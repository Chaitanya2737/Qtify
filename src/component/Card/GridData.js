import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Card.css";
import { styled } from "@mui/material/styles";

// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Chip, Tooltip } from "@mui/material";

const GridData = ({type , data}) => {

  // const { image, follows, title, songs } = data;
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        // "?." operator will give null if the value before ?. is undefined
        <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className="wrappers">
            <div className="card">
              <img src={image} alt="album" />
              <div className="banner">
                <Chip
                  label={`${follows} Follows`}
                  className="chip"
                  size="small"
                />
              </div>
            </div>
            <div className="titleWrapper">
              <p style={{color:"white"}}>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }

    case "song": {
      const { image, likes, title, songs } = data;
      return (
        // no tooltip required here according to figma provided
        <div className="wrappers">
          <div className="card">
            <img src={image} alt="album" loading="lazy" />
            <div className="banner">
              <div className="pill">
                <p>{likes} Likes</p>
              </div>
            </div>
          </div>
          <div className="titleWrapper">
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return <></>;
  }
};

export default GridData;
