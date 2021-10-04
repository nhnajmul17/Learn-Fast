import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div>
            <h2>Conctact</h2>
            <br />
            <h1 className='fs-1'>Learn <span className='text-danger'>Fast</span></h1>
            <p>5/c,Motijeel,Dhaka</p>
            <h6>Phone: <FontAwesomeIcon icon={faPhone} className='text-warning' /> +880-5468752</h6>
            <h3 className='text-secondary'>Follow Us</h3>
            <i class="fab fa-facebook text-primary fs-4 me-2"></i> <i class="fab fa-youtube text-danger fs-4 me-2"></i> <i class="fab fa-twitter text-info fs-4"></i>
        </div>
    );
};

export default Contact;