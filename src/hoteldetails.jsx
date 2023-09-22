import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { getHotel } from './hotelsdata';

export const HotelDetails = (props) => {
  const hotelID = props.match.params.hotelID;
  const hotel = getHotel(hotelID);
  return (
    <Row className="m-2 p-2">
      <Col sm="auto" className="p-1">
        <img
          src={hotel.image}
          style={{ width: '300px' }}
          className="hotelpic"
        />
      </Col>
      <Col className="d-flex flex-column">
        <div className="h4 mb-1">{hotel.name}</div>
        <div className="font-weight-bold text-secondary mb-1">
          {hotel.location}
        </div>
        <div className="font-weight-bold text-info mb-1">{hotel.location}</div>
        <div className="mb-2" style={{ flex: '1 0 100px', overflow: 'hidden' }}>
          {hotel.description}
        </div>

        <div>
          <Button size="md" variant="info">
            Köp {hotel.price} SEK{' '}
          </Button>
        </div>
      </Col>
    </Row>
  );
};
