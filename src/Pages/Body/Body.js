import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Body = (props) => {
    const {name, price, picture, details} = props.info;
    return (
        <div className="card">            
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                    <Card.Title className="bg-red-500">Category: {name}</Card.Title>
                    <Card.Text className="">
                        <h6>Price: {price} (Yearly)</h6>
                        <p><small>{details}</small></p>
                        <button className="bg-warning">Explore More</button>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Body;