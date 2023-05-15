import React from 'react';
import connect from '../../../images/connect.jpeg';
import discuss from '../../../images/discuss.jpeg';
import unleash from '../../../images/unleash.jpeg';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Connect With Buddy',
        img: connect,
        desc:' Connect with your Buddy and chat anonymously'
    },
    {
        name: 'Discuss your Concerns',
        img: discuss,
        desc:'Open up to your Buddy in a space where you get the guidance you need'
    },
    {
        name: 'Unleash a Better You',
        img: unleash,
        desc:'With 24X7 support from our experts, bid goodbye to your old self'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h3 className="brand-color">Three steps to a better life</h3>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;