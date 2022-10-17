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
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/websites.jfif)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Websites &amp; platforms</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$450</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/mobile.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Mobile applications</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$400</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/strategy.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Strategy &amp; branding</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$350</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/design.jpg)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Design conspect</h2>
                                                <p className="start_from">Starts from</p>
                                                <p className="price">$300</p>
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
