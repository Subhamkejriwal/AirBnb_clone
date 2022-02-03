import React from 'react';
import "./Registration.css";

export default function Registration() {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontSize: '20px' }}>Create An Account</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="YourName" className="form-control" required />
                                                    <label className="form-label" htmlFor="YourName">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="YourEmail" className="form-control" required />
                                                    <label className="form-label" htmlFor="YourEmail">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="Password" className="form-control" required />
                                                    <label className="form-label" htmlFor="Password">Password</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="Password1" className="form-control" required />
                                                    <label className="form-label" htmlFor="Password1">Repeat your password</label>
                                                </div>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" defaultValue id="Service" />
                                                <label className="form-check-label" htmlFor="Service" style={{ fontSize: '10px' }}>
                                                    I agree to all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <label className="form-check-labe2" htmlFor="LoginHere" style={{ fontSize: '10px' }}>
                                                    Have already an account <a href="#!"> Login Here </a>
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
