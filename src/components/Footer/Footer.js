import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg'>

            <div className='d-flex justify-content-evenly'>
                <div>
                    <h1 className='fs-1'>Learn <span className='text-danger'>Fast</span></h1>
                    <p>5/c,Motijeel,Dhaka</p>
                    <h6>Phone: <FontAwesomeIcon icon={faPhone} className='text-warning' /> +880-5468752</h6>

                </div>
                <div>
                    <h3 className='text-secondary'>Follow Us</h3>
                    <i class="fab fa-facebook text-primary fs-4 me-2"></i> <i class="fab fa-youtube text-danger fs-4 me-2"></i> <i class="fab fa-twitter text-info fs-4"></i>
                </div>
            </div>
            <p className='text-center'> <small>&copy;2021 All right reserved by Learn<span className='text-danger'>Fast</span> </small></p>
        </div>
    );
};

export default Footer;