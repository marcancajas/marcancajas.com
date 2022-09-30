import React from 'react';

export default function Services() {
    return(
        <>
            {/* Section Services */}
            <div id="services" className="section_services">
                <div className="container">
                    <div className="services_wrapper">
                        <div className="services_title">
                            <h3>Amazing Services</h3>
                        </div>
                        <div className="services_content">
                            <div className="service_direct">
                                <ul>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/service1.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Websites &amp; platforms</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$500</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/service2.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Mobile applications</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$450</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/service3.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Strategy &amp; branding</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$500</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/service4.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Design conspect</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$450</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Section Services */}
        </>
    );
}
