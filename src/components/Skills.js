import React from 'react';

export default function Skills() {
    return (

        <>
            {/* Section Scills */}
            <section id="scills" className="section_scills wow fadeInRight" data-wow-delay=".7s">
                <div className="scills_wrapper">
                    <div className="container narrow">
                        <div className="scills_title">
                            <h3>Knowledge &amp; Skills</h3>
                        </div>
                        <div className="scills_about">
                            <p>For over a decade, I've helped businesses to craft honest, emotional experiences through strategy, brand development, graphic design, and web design. </p>
                        </div>
                    </div>
                    <div className="container narrow2">
                        <div className="fn_cs_progress_bar">
                            <div className="progress_item open" data-value={92}>
                                <div className="item_in">
                                    <h3 className="progress_title">Adobe Photoshop</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "8%" }}
                                    >
                                        92%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "92%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={95}>
                                <div className="item_in">
                                    <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "5%" }}
                                    >
                                        95%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "95%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={80}>
                                <div className="item_in">
                                    <h3 className="progress_title">WordPress</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "20%" }}
                                    >
                                        80%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "80%" }} />
                                    </div>
                                </div>
                            </div>

                            <div className="progress_item open" data-value={85}>
                                <div className="item_in">
                                    <h3 className="progress_title">Adobe Illustrator</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "15%" }}
                                    >
                                        85%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "85%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Scills */}
        </>);
}
