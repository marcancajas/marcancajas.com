import React from 'react';

export default function Work() {
    return (
        <>
            {/* Section Work */}
            <section id="work" className="section_work">
                <div className="container">
                    <div className="work_title">
                        <h3>Featured Projects</h3>
                    </div>
                    <div className="work_content">
                        <div className="work_content_left_bar">
                            <h2>AMI Sales</h2>
                            <p className="about_deduma">Flagship e-commerce website platform for AMI Group</p>
                            <p>Managed and developed web-based applications and websites, rest services on LAMP and Windows servers across AMI Group of Companies.</p><br></br>
                            <p>Implement and improve the company's capabilities and presentation in the web using different techniques to sort, optimize, analyze, improve and deliver business data to stakeholders from different sources.</p><br></br>
                            <p>Search engine optimisation, conversion tracking and analytics/tags tracking Implementation across all digital properties of the company. Analysis, report generation, data filtering of business data across multiple websites and servers.</p><br></br>
                            <p>Analyze, proposed, designed and developed the companies' rest services and service-oriented architecture. Working with a wide spectrum of web technology and languages such as php, sql, html, css and javascript.</p><br></br>
                            <p className="goal_deduma">web, data, online, rest api, ecommerce</p>
                        </div>
                        <div className="work_content_right_bar">
                            <div className="right_bar_wrapper">
                                <div className="deduma_image" style={{"backgroundImage":"url(img/thumb/amisales.png)"}}></div>
                                <img src="img/thumb/amisales.png" alt="AMI Sales" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Work */}
        </>
    );
}
