import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { title, description, picture } = props.service;
    return (
        <Col>
            <Card className='h-75'>
                <Card.Img variant="top" className='h-50' src={picture} />
                <Card.Body className>
                    <Card.Title className='text-info'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;