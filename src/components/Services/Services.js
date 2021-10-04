import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(4, 15)))
    }, [])
    return (
        <div>
            <h2 className='p-5 fs-1 text-bold'>Our <span className='text-warning'> Courses</span></h2>
            <Row xs={1} md={2} className="g-4 m-5">
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div>

    );
};

export default Services;