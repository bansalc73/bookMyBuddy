import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const ourAddress = [
        { name: "Electronic City Phase-1", link: "//google.com/map" },
        { name: "Karnataka,Bengaluru", link: "//google.com/map" },
    ]
    const ourContact = [
        { name: "Call US", link: "//google.com/map" },
        { name: "Mail", link: "mailto:example@gmail.com" },
    ]
    const services = [
        { name: "Book Appointment", link: "/appointment" },
        // { name: "Check Up", link: "/checkup" },
        // { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        // { name: "Tooth Extraction", link: "/tooth-extract" },
        // { name: "Check Up", link: "/checkup" },
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content">
                    <FooterDetail key={1} menuTitle="Services" menuItems={services} />
                    <FooterDetail key={4} menuTitle="Our Contact" menuItems={ourContact} />
                    <FooterDetail key={3} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                        </ul>
                    </FooterDetail>
                </div>
                <div className="copyRight text-center">
                    <p>Made with <FontAwesomeIcon icon={faHeart} /> in {(new Date()).getFullYear()} </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;