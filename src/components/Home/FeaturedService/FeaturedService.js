import React from 'react';
import therapy from '../../../images/therapy.webp';


const FeaturedService = () => {
    return (
        <div className="feature-service pb-0 pb-md-5 pt-md-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={therapy} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1> Happier people,</h1>
                        <h1> Happier WorkPlaces.</h1>
                        <p className="text-secondary my-5">Are you an institution looking to create a happier community? we have helped colleges, corporates, incubators, government bodies in building emotionally resilient communtities of 100 thousand people.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;