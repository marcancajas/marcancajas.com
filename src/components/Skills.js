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
                            <p>For almost half a decade, I've helped businesses craft their websites, web and mobile applications with honesty, emotional experiences backed by expertise in cloud computing AWS.</p>
                        </div>
                    </div>
                    <div className="container narrow2">
                        <div className="fn_cs_progress_bar">
                            <div className="progress_item open" data-value={92}>
                                <div className="item_in">
                                    <h3 className="progress_title">Javascript / Typescript, Html, CSS</h3>
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
                                    <h3 className="progress_title">AWS, NodeJS, ReactJS</h3>
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
                                    <h3 className="progress_title">RDS Relational and NoSQL Databases</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "13%" }}
                                    >
                                        87%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "87%" }} />
                                    </div>
                                </div>
                            </div>

                            <div className="progress_item open" data-value={85}>
                                <div className="item_in">
                                    <h3 className="progress_title">Versioning Control (GIT), Wireframing, UML, BPMN Process </h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "10%" }}
                                    >
                                        90%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "90%" }} />
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
