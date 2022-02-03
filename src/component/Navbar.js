import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to ="/">AIRBNB</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link button type="button" className="btn btn-outline-success navbar-btn" style={{ marginLeft: "15px", height: "50px", width: "90px" }} to="/Login"> Login</Link></li>
                            <li><Link button type="button" className="btn btn-primary navbar-btn btn-outline-success" style={{ marginLeft: "15px", height: "50px", width: "100px" }} to="/Registration"> Registration</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};