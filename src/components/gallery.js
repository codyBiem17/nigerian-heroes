import React from 'react';
import GalleryData from './data'

const imagesGallery = () => {

    // let keys = Object.keys(GalleryData);
    // let randomKeys  = keys[Math.floor(Math.random() * keys.length)]
    // let randomObj = 
    const images = GalleryData.map((heroImg) => {
        return (
            <div className="imgWrapper" key={heroImg.id}>
                <img src={heroImg.imgSrc} />
            </div>
        )
    })

    return (
        <div className="container">
            {images}
        </div>
    ); 

}

export default imagesGallery;