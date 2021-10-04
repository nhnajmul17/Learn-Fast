import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import img from '../../images/edu_1.png'
import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import Feature from '../Feature/Feature';

const Home = () => {
    const [feature, setFeature] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setFeature(data.slice(1, 5)))
    }, [])

    const history = useHistory()
    const handleEnroll = () => {
        history.push('/services')
    }
    return (
        <div>
            <div className='background d-flex justify-content-center'>

                <div className='text-white  mt-5 p-5 '>
                    <h1>Study Beyond The Classroom</h1>
                    <p>Develop your talents by taking courses, earning certificates, and earning degrees from Learn<span className='text-danger'>Fast</span> world-class universities and companies instructors who are capable of building you.</p>
                    <br />
                    <br />
                    <Button onClick={handleEnroll} variant='danger' className='rounded fs-4'>Enroll now <FontAwesomeIcon icon={faSignInAlt} /></Button>
                </div>
                <div className='m-5'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='p-5'>
                <h3 className='text-success mb-5'>Featured Course</h3>
                <Row xs={1} md={3} className="g-4">
                    {
                        feature.map(course => <Feature
                            key={course._id}
                            course={course}
                        ></Feature>)
                    }

                </Row>
            </div>

        </div>
    );
};

export default Home;