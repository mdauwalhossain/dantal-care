import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Data = (props) => {
    const {name,picture, details, price} = props.data;
    return (
        <div>            
            <Row xs={1} md={2} className="">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card className="rounded mx-auto d-block">
                        <Card.Img className="text-center" variant="top" src={picture} />
                        <Card.Body>
                        <Card.Title>Course: {name}</Card.Title>
                        <Card.Text>
                            {details}
                            <p>Price: {price}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Data;