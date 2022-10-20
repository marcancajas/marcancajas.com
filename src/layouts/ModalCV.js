import React from 'react';
import { SVG_Facebook, SVG_Five_Stars, SVG_Instagram, SVG_Pinterest, SVG_Twitter, SVG_Youtube } from '../../public/svg/svg';

export default function ModalCV({ resumeTrueFalse }) {
    return (
        <>
            {/* Modal CV Card  */}
            <div className="deebo_fn_cv">

                {/* CV Closer  */}
                <a onClick={resumeTrueFalse} href="#" className="closer"></a>
                {/* /CV Closer  */}

                {/* CV Inner  */}
                <div className="deebo_fn__cv">

                    {/* CV Background  */}
                    <div className="cv__bg"></div>
                    <div className="cv__bg2"></div>
                    {/* /CV Background  */}

                    {/* CV Left Side  */}
                    <div className="cv__header">
                        <div className="in">
                            <div className="avatar">
                                <img src="img/header/marcancajas.jpg" alt="Marc Ancajas" />
                            </div>
                            <h3><span>Marc</span> Ancajas</h3>
                            <p>I’m available for a freelance job. Hire me</p>

                            <ul className="social">
                                <li>
                                    <a href="https://twitter.com/marcancajas_" target="_blank" title="twitter.com">
                                        <SVG_Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/mancajas/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_follower_visibility_disclosure=0" target="_blank" title="facebook.com">
                                        <SVG_Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/marcancajas/" target="_blank" title="instagram.com">
                                        <SVG_Instagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /CV Left Side  */}

                    {/* /CV Content Side  */}
                    <div className="cv__content">


                        {/* CV: Biography Section  */}
                        <section id="cv_biography">
                            <div className="section_title">
                                <h3>Biography</h3>
                            </div>
                            <p>A passionate and highly technical engineering professional in the field of software development, general engineering and enterprise architecture. I love building things, analysis and solutions. <a href="https://www.linkedin.com/in/marc-ancajas/" target="_blank"> Visit Linkedin Profile</a></p>
                            <div className="fn_cs_info_items">
                                <ul>
                                    <li><p>Name: <span>Marc Ancajas</span></p></li>
                                    <li><p>Birthday: <span>June 24, 1990</span></p></li>
                                    <li><p>Languages: <span>English, Filipino</span></p></li>
                                    <li><p>Age: <span>32 Years</span></p></li>
                                    <li><p>Nationality: <span>Australian</span></p></li>
                                    <li><p>Address: <span>Perth, WA</span></p></li>
                                    <li><p>Telegram: <span>Available</span></p></li>
                                    <li><p>Phone: <span><a href="tel:0426240161">(06) 426240161</a></span></p></li>
                                    <li><p>Teams: <span>Marc Ancajas</span></p></li>
                                    <li><p>Email: <span><a href="mailto:mancajas@outlook.com">mancajas@outlook.com</a></span></p></li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Biography Section  */}


                        {/* CV: Education Section  */}
                        <section id="cv_education">
                            <div className="section_title">
                                <h3>Education</h3>
                            </div>
                            <div className="fn_cs_boxed_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Curtin University</h5>
                                                <span>( Graduated 2019 )</span>
                                            </div>
                                            <h3>BSc Software Engineering</h3>
                                            <p>Grade: With Distinction</p>
                                            <p>Activities and Societies: Computer Science Students Association, Student Representative</p>
                                            <p>Areas: Software Development, Project Management, Business Analyst, Technology Integration</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Curtin College</h5>
                                                <span>( Graduated 2010 )</span>
                                            </div>
                                            <h3>Diploma of Information Technology</h3>
                                            <p>Fundamentals of computing, binary operations and general computing knowledge.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>University of Western Australia</h5>
                                                <span>( Ended 2021 )</span>
                                            </div>
                                            <h3>Master of Professional Engineering</h3>
                                            <p>Masters degree in engineering topics include advanced mathematics, engineering physics, control systems, digital embedded systems and electrical/electronics operations.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Education Section  */}


                        {/* CV: Experience Section  */}
                        <section id="cv_experience">
                            <div className="section_title">
                                <h3>Experience</h3>
                            </div>
                            <div className="fn_cs_boxed_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Best Performance</h5>
                                                <span>( Nov 2021 — July 2022 )</span>
                                            </div>
                                            <h3>Programmer</h3>
                                            <p>NodeJS, Typescript and ReactJS development with AWS NoSQL dynamodb, appsync, cognito, s3 and amplify.</p><br></br>
                                            <p>Programming in Javascript/Typescript using different AWS SDK libraries such as appsync, cognito and dynamodb to upload, parse and manage data for Ed Companion and Elastik.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>AMI Group</h5>
                                                <span>( November 2015 — July 2017 )</span>
                                            </div>
                                            <h3>Full-Stack Web Developer</h3>
                                            <p>Manage, maintain, update and build websites using Javascript, HTML, CSS. Built rest service on LAMP/ISS servers across AMI Group of Companies.</p><br></br>
                                            <p>Leading and advising the company on web technologies and e-commerce business processes as the lead developer working alongside another developer, sales manager and the marketing coordinator amongst other people in the company.</p><br></br>
                                            <p>This requires strong computer programming skills as it deals with different kinds of scenarios to implement and improve the company's capabilities and presentation in the web using different techniques to sort, optimize, analyze, improve and deliver business data to stakeholders from different sources.</p><br></br>
                                            <p>Search engine optimisation, conversion tracking and analytics/tags tracking Implementation across all digital properties of the company. Analysis, report generation, data filtering of business data across multiple websites and servers. </p><br></br>
                                            <p>Analyze, proposed and built the companies' rest services and service-oriented architecture. </p><br></br>
                                            <p>Working with a wide spectrum of web technology and languages such as php, sql, html, css and javascript. From conception of solutions to design and delivery working closely with the Marketing Coordinator to promote and rebrand our suppliers and the whole of AMI Group.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>303 Lowe</h5>
                                                <span>( July 2015 — Oct 2015 )</span>
                                            </div>
                                            <h3>Frontend Web Developer</h3>
                                            <p>Working closely with art directors in a creative environment, I develop and maintain responsive websites and animated banner ads.</p><br></br>
                                            <p>I also managed the companies' aws hosting account, reviewing external source code from suppliers and giving technical feedback.</p><br></br>
                                            <p>Develop the road safety commission's drink and drive game using javascript/nodejs/html/css and CVCheck's responsive website.</p><br></br>
                                            <p>Front-end Website Development Javascript, HTML, CSS</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Experience Section  */}


                        {/* CV: Skills Section  */}
                        <section id="cv_skills">
                            <div className="section_title">
                                <h3>Professionality</h3>
                            </div>
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
                        </section>
                        {/* /CV: Skills Section  */}


                        {/* CV: Services Section  */}
                        <section id="cv_services">
                            <div className="section_title">
                                <h3>Services</h3>
                            </div>
                            <p>I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.</p>
                            <div className="fn_cs_service_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Websites &amp; platforms</h3>
                                                <p>I build brands through cultural insights &amp; strategic vision. Custom crafted business solutions.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>$450</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Mobile applications</h3>
                                                <p>Custom marketing solutions. Get your business on the next level. I provide worldwide accessible mobile app platforms.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>$400</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Strategy &amp; branding</h3>
                                                <p>Cloud computing (AWS Architecture) and business strategy direction. Get your business on the next level. I help to create great experiences and scalable enterprise architecture.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>$350</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Design conspect</h3>
                                                <p>Design direction for business. Get your business on the next level. I help to realize vision and create great experiences.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>$300</h3>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Services Section  */}

                        {/* CV: Testimonials  */}
                        <section id="cv_testimonials">
                            <div className="section_title">
                                <h3>Recommendations</h3>
                            </div>
                            <div className="fn_cs_testimonials">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <p>I've worked with Marc on several projects. He is a great specialist with a wide understanding of software development and the project management skills. I enjoyed to work with him.</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/alexander.jpg"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Alexander Sysuiev</p>
                                                </div>
                                                <div className="t_rating" data-stars="5">
                                                    <div className="rating_in">
                                                        <div className="rating_active"><SVG_Five_Stars /></div>
                                                        <div className="rating_regular"><SVG_Five_Stars /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <p>I've been working with Marc on two projects. This was a real pleasure for me to deal with a true professional. Marc is highly respected by me personally and by my development team colleagues and skillfully managed the plethora of personalities involved with the projects we worked on together. His enthusiastic, optimistic attitude is contagious and serves to motivate and energize project staff. Marc has superb problem-solving skills as well as exceptional product development skills.</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/viktoria.jpg"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Viktoria Kuznetsova</p>
                                                </div>
                                                <div className="t_rating" data-stars="5">
                                                    <div className="rating_in">
                                                        <div className="rating_active"><SVG_Five_Stars /></div>
                                                        <div className="rating_regular"><SVG_Five_Stars /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                        </section>
                        {/* /CV: Testimonials  */}


                    </div>
                    {/* /CV Content Side  */}

                </div>
                {/* CV Inner  */}

            </div>
            {/* /Modal CV Card  */}
        </>
    );
}
