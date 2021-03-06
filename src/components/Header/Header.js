import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();
    const handleSignin = () => {
        history.push('/login')
    }
    const handleSignup = () => {
        history.push('/signup')
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='fs-1'>Learn<span className='text-danger '>Fast</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='text-info mx-2' to="/home">Home</NavLink>
                            <NavLink className='text-info mx-2' to="/courses">Courses</NavLink>
                            <NavLink className='text-info mx-2' to="/about">About Us</NavLink>
                            <NavLink className='text-info mx-2' to="/faq">FAQ</NavLink>
                            <NavLink className='text-info mx-2' to="/contact">Contact</NavLink>

                        </Nav>
                        <Nav>
                            <p className='text-white me-5'>{user.email}</p>

                            {user.email ? <button onClick={logOut}>LogOut</button>
                                :
                                <Button onClick={handleSignin} variant='danger me-2'>Signin</Button>}
                            {user.email ? <button disabled></button>
                                : <Button onClick={handleSignup} variant='secondary'>Sign Up</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;