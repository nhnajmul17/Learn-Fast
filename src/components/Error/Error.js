import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/error_404.jpg'

const Error = () => {
    const history = useHistory()
    const handleBack = () => {
        history.push('/home')
    }

    return (
        <div>
            <img src={img} className='h-75 w-75 mt-4' alt="" />
            <br />
            <Button onClick={handleBack} variant='danger' className='m-3'>Back To Home</Button>
        </div>
    );
};

export default Error;