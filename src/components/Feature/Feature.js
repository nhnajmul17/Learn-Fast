import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Feature = (props) => {

    const history = useHistory()
    const handleSeeCourse = () => {
        history.push('./services')
    }
    const { Title, picture } = props.course
    return (
        <div>
            <Col>
                <Card className='h-100'>
                    <div className='d-flex justify-content-center '>
                        <div>
                            <Card.Img variant="top" className='h-100' src={picture} />

                        </div>
                        <div>
                            <Card.Body>
                                <Card.Title className='fs-4 text-success'>{Title}</Card.Title>

                                <Card.Text>
                                    <Button variant='warning' onClick={handleSeeCourse} className='h-25 w-100'>See Course</Button>
                                </Card.Text>
                            </Card.Body>
                        </div>

                    </div>

                </Card>
            </Col>
        </div>
    );
};

export default Feature;