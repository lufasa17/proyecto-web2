import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const CustomCard = ({ imageSrc, title }) => {
  return (
    <Card
      style={{
        width: '50vh',
        margin: '10vh',
      }}
    >
      <img
        alt="Card cap"
        src={imageSrc}
        width="100%"
      />
      <CardBody>
        <CardText > 
          <h2>{title}</h2>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CustomCard;


