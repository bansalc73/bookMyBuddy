import React from 'react';
import { Link } from 'react-router-dom';
import thumbsup from '../../../images/thumbsup.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
            <div className="row ">
                <div className="col-md-5 d-none d-md-block">
                    <img src={thumbsup} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="brand-color text-uppercase">AppointMent</h5>
                    <h1>Get Help, Get Better</h1>
                    <p>Remember, even the strongest among us need assistance at times. Don't hesitate to seek help when you need it. No one is expected to face life's challenges alone. Reach out and ask for help. You'll be amazed at the support that comes your way.</p>
                    <p>No matter whats troubling you, get the support you need right here, right now.</p>
                    <Link to="/appointment" className="btn btn-primary btn-lg shadow rounded"> GET STARTED</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appointment;