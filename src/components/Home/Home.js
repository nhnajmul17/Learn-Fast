import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import img from '../../images/edu_1.png'
import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import Feature from '../Feature/Feature';
import Service from '../Service/Service';

const Home = () => {
    const [feature, setFeature] = useState([])
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)))
    }, [])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setFeature(data.slice(5, 9)))
    }, [])

    const history = useHistory()
    const handleEnroll = () => {
        history.push('/courses')
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
            <div className='p-3 mt-2'>
                <h3 className='text-dark mb-5 fs-1'>Why <span className='text-dark'>Learn</span><span className='text-danger'>Fast</span></h3>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>


            </div>
            <div className='p-3'>
                <h3 className='text-success fs-2 mb-5'>Featured Courses</h3>
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