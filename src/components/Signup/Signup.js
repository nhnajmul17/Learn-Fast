import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Signup = () => {


    const { handlePassword, handleEmail, handleSignUp, signInWithGoogle, error } = useAuth();



    return (
        <div style={{ height: '100vh' }}>
            <h2>Create A New Account</h2>
            <form>
                <div className="row mb-3">
                    <label forhtml="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control w-50" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label forhtml="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control w-50" id="inputPassword3" required />
                    </div>
                </div>


                <button onClick={handleSignUp} type="submit" className="btn btn-primary">Sign up</button>
            </form>
            <br /><br />
            <p className='text-danger'>{error}</p>
            <br /><br /><br />
            <p>Already Have an account? <Link to='/login'>Login Now. </Link> </p>

            <button onClick={signInWithGoogle} className='bg-warning text-white'>Sign Up with Google</button>
        </div>
    );
};

export default Signup;