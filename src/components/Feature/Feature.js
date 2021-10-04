import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
const Feature = (props) => {

    const history = useHistory()
    const handleSeeCourse = () => {
        history.push('./courses')
    }
    const { Title, picture, rating, price } = props.course
    return (
        <div>
            <Col className='h-100'>
                <Card className='h-100'>
                    <div className='d-flex justify-content-center '>
                        <div className='p-4 w-100 h-100'>
                            <Card.Img variant="top" className='h-100 w-100' src={picture} />

                        </div>
                        <div className='m-2'>
                            <Card.Body>
                                <Card.Title className='fs-4 text-success'>{Title}</Card.Title>

                                <Card.Text>
                                    <p>Price: ${price}</p>
                                    <Rating
                                        className='text-warning'
                                        initialRating={rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    />
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                    <div>
                        <Button variant='warning' onClick={handleSeeCourse} className='mb-3'>See Course</Button>

                    </div>

                </Card>
            </Col>
        </div>
    );
};

export default Feature;