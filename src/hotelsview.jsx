import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getHotelsData } from './hotelsdata.js';

export const HotelsView = (props) => {
  const category = props.match.params.category;
  const searchNow = props.match.params.searchNow || '';

  const hotelArray = getHotelsData();

  return (
    <div className="p-3">
      <Row>
        {hotelArray.filter(
          (x) => x.category == category || category == 'all'
        ) &&
          x.name
            .toLowerCase()
            .indexOf(searchNow.toLowerCase() > -1)
            .map((hotel) => (
              <Col md="3" sm="6" xl="3" className="p-1">
                <Card>
                  <Card.Img
                    variant="top"
                    style={{ height: '300px' }}
                    src={hotel.image}
                  />
                  <Card.Body>
                    <div style={{ height: '70px' }}>
                      <Card.Title>{hotel.name}</Card.Title>
                      <Card.Subtitle className="text-muted text-wrap mb=2">
                        {hotel.location}
                      </Card.Subtitle>
                    </div>
                    <Card.Text>
                      {hotel.description.substring(0, 100)}...
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="info">
                        {' '}
                        Boka för {hotel.price} SEK per natt!
                      </Button>
                      <Link to={'./hoteldetails/' + hotel.hotelID}>
                        <Button variant="primary">Läs mer</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </div>
  );
};
