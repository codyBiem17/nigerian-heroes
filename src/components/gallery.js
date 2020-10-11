import React from 'react';
import GalleryData from './data';


const ImagesGallery = ({handleClick}) => {
  // const [isClicked, setIsClicked] = useState(null);
  // let history = useHistory();
    // let keys = Object.keys(GalleryData);
    // let randomKeys  = keys[Math.floor(Math.random() * keys.length)]
    // let randomObj = 
    const images = GalleryData.map((heroImg) => {
        return (
          <div
            className="imgWrapper tooltipWrapper"
            key={heroImg.id}
          >
            <img
              // id={heroImg.id}
              src={heroImg.imgSrc}
              alt="heroes-and-heroines"
              onClick={() => { handleClick(heroImg.id) }}
            />
            <span className="tooltipName">{heroImg.name}</span>
          </div>
        );
    })

  return (
    <div className="Img-Container grid-row">{images}</div>
  ); 

}

export default ImagesGallery;