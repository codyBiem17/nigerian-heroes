import React from 'react';
import { Card } from 'react-bootstrap';
// import GalleryData from "./data";


const HeroDetails = () => {
    // const imgs = Object.keys(GalleryData);
    // const showImg = imgs.map(img => {
    //     return GalleryData[img].ImgSrc
    // })
    return (
      <div className="heroesCard">
        {
          // GalleryData.map((filteredDetails) => (
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/100/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="details">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          // ))
        }
      </div>
    );
}

export default HeroDetails;