import React from 'react';
import GalleryData from './data';
// import { Link } from "react-router-dom";

const ImagesGallery = ({handleClick}) => {
    // const [isClicked, setIsClicked] = useState(false)
    // let keys = Object.keys(GalleryData);
    // let randomKeys  = keys[Math.floor(Math.random() * keys.length)]
    // let randomObj = 
    const images = GalleryData.map((heroImg) => {
        return (
          <span
            onClick={(e) => handleClick(e)}
            className="imgWrapper tooltipWrapper"
            key={heroImg.id}
          >
            <img
              id={heroImg.id}
              src={heroImg.imgSrc}
              alt="heroes-and-heroines"
            />
            <span className="tooltipName">{heroImg.name}</span>
          </span>
        );
    })

    return (
      <div className="Img-Container">
         {images} 
      </div>
    ); 

}

export default ImagesGallery;