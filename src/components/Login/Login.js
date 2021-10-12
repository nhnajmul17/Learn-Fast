import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle, handleEmail, handlePassword, handleSingIn, error } = useAuth();


    return (
        <div style={{ height: '100vh' }}>
            <h2>Login</h2>
            <form>
                <div className="row mb-3">
                    <label forhtml="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control w-50" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label forhtml="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control w-50" id="inputPassword3" />
                    </div>
                </div>


                <button onClick={handleSingIn} type="submit" className="btn btn-primary">Sign in</button>
            </form><br />
            <p className='text-danger'>{error}</p>
            <br /><br />
            <p>New to Learn <span className='text-danger'>Fast</span>? <Link to='/signup'>Register Now. </Link> </p>
            <button className='bg-warning text-white' onClick={signInWithGoogle}>Goole Sign In</button>

        </div>
    );
};

export default Login;