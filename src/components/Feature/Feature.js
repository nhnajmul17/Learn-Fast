import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
const Feature = (props) => {

    const history = useHistory()
    const handleSeeCourse = () => {
        history.push('./services')
    }
    const { Title, picture, rating } = props.course
    return (
        <div>
            <Col>
                <Card className='h-100'>
                    <div className='d-flex justify-content-center '>
                        <div className='p-4'>
                            <Card.Img variant="top" className='h-100 w-100' src={picture} />

                        </div>
                        <div className='m-2'>
                            <Card.Body>
                                <Card.Title className='fs-4 text-success'>{Title}</Card.Title>

                                <Card.Text>
                                    <Rating
                                        className='text-warning'
                                        initialRating={rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    />
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