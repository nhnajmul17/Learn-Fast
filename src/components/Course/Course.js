import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const { Title, picture, duration, price, name, role, enrolled } = props.course
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" className='h-50 rounded' src={picture} />
                <Card.Body>
                    <Card.Title className='text-warning fs-3'>{Title}</Card.Title>
                    <Card.Text>
                        <div className='d-flex justify-content-center'>
                            <div className='pe-5'><h4>Duration: <span className='text-danger'>{duration}</span> <small> Months</small></h4>
                                <p className='text-success'>Course: {role}</p>
                            </div>
                            <div>
                                <h3 className='text-secondary'>Price: ${price}</h3>
                            </div>
                        </div>
                        <h3 className='text-info'>Enrolled:  <FontAwesomeIcon icon={faUser} />  {enrolled}</h3>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div>
                        <div>
                            <small>Instructor: <span className='text-danger'> {name}</span></small>
                        </div>
                        <Button variant='warning'>Enroll</Button>

                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;