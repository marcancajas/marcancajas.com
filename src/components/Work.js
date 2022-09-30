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
                            <h2>Deduma</h2>
                            <p className="about_deduma">Online platform for distance learning.</p>
                            <p className="goal_deduma">web, mobile, online</p>
                        </div>
                        <div className="work_content_right_bar">
                            <div className="right_bar_wrapper">
                                <div className="deduma_image" style={{"backgroundImage":"url(img/about/1.jpg)"}}></div>
                                <img src="img/thumb/square.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Work */}
        </>
    );
}
