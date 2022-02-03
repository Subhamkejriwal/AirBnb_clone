import React from 'react';
import "./Login.css";
import login_image from './login_image.png';

export default function Login() {

    return (
        <>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-7 col-lg-6 col-xl-4">
                        <img src={login_image} className='img-fluid' alt="login_image" />
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-inline-block justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <a href="https://www.facebook.com" ><i className="bi bi-facebook" /></a>
                                <a href='https://twitter.com' ><i className="bi bi-twitter" /></a>
                                <a href='https://www.linkedin.com'><i className="bi bi-linkedin" /></a>
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="EMAILID">Email address</label>
                                <input type="email" id="EMAILID" className="form-control"
                                    placeholder="Enter a valid email address" required />
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="PASSWORD">Password</label>
                                <input type="password" id="PASSWORD" className="form-control" placeholder="Enter password" required />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input" style={{ paddingTop: '3px' }} type="checkbox" defaultValue id="CHECKBOX" />
                                    <label className="form-check-label" style={{ paddingLeft: '2px' }} htmlFor="Rememberme">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" target="_blank" className="link-danger" style={{ color: 'red' }}>Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};