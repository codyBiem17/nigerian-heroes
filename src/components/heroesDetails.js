import React from 'react';
import { Card } from 'react-bootstrap';



const HeroDetails = ( { heroFullDetails } ) => {
    return (
      <div className="heroesCard">
        <h1>Are you there!</h1>
        {heroFullDetails.map((filteredDetails) => (
          <Card key={filteredDetails.id}>
            <Card.Img variant="top" src={filteredDetails.imgSrc} />
            <Card.Body>
              <Card.Title> {filteredDetails.name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text className="details">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}

export default HeroDetails;