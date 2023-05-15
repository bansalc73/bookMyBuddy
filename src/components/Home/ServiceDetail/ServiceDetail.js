import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <img src={service.img} alt=""  style={{ width: "200px", height: "200px", borderRadius: "50%" }}/>
            <p className="text-secondary mt-1">{service.desc}</p>
        </div>
    );
};

export default ServiceDetail;