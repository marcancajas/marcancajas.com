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
                                <img src="img/header/1.jpg" alt="" />
                            </div>
                            <h3><span>Adam</span> Milner</h3>
                            <p>I’m available for a freelance job. Hire me</p>
                            <ul className="social">
                                <li>
                                    <a href="#" target="_blank" title="twitter.com">
                                        <SVG_Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="facebook.com">
                                        <SVG_Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="instagram.com">
                                        <SVG_Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="printerest.com">
                                        <SVG_Pinterest />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="youtube.com">
                                        <SVG_Youtube />
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
                            <p>I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</p>
                            <div className="fn_cs_info_items">
                                <ul>
                                    <li><p>Name: <span>Adam Milner</span></p></li>
                                    <li><p>Birthday: <span>June 14, 1992</span></p></li>
                                    <li><p>Languages: <span>English, Italian, Arabic</span></p></li>
                                    <li><p>Age: <span>29 Years</span></p></li>
                                    <li><p>Nationality: <span>American</span></p></li>
                                    <li><p>Adress: <span>London, UK</span></p></li>
                                    <li><p>Telegram: <span>Available</span></p></li>
                                    <li><p>Phone: <span><a href="tel:+8801674052925">(+880) 1674 052 925</a></span></p></li>
                                    <li><p>Skype: <span>Adam.M</span></p></li>
                                    <li><p>Email: <span><a href="mailto:farhad1009@gmail.com">farhad1009@gmail.com</a></span></p></li>
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
                                                <h5>Frenify University</h5>
                                                <span>( 2014 — 2017 )</span>
                                            </div>
                                            <h3>Computer Science</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Edu University</h5>
                                                <span>( 2011 — 2014 )</span>
                                            </div>
                                            <h3>Master Degree</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Clolumbia College</h5>
                                                <span>( 2007 — 2011 )</span>
                                            </div>
                                            <h3>Bachelor Degree</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                                                <h5>Frenify  LLC</h5>
                                                <span>( 2018 — Today )</span>
                                            </div>
                                            <h3>Sr. Front-end Engineer</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Google  LLC</h5>
                                                <span>( 2016 — 2018 )</span>
                                            </div>
                                            <h3>Front-end Developer</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Twitter  LLC</h5>
                                                <span>( 2016 — 2011 )</span>
                                            </div>
                                            <h3>Graphic Designer</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                                                <h3>$500</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Mobile applications</h3>
                                                <p>Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.</p>
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
                                                <h3>Strategy &amp; branding</h3>
                                                <p>Design direction for business. Get your business on the next level. We help to create great experiences.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>$500</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Design conspect</h3>
                                                <p>Design direction for business. Get your business on the next level. We help to create great experiences.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>$450</h3>
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
                                <h3>References</h3>
                            </div>
                            <p>A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. We respect each client and help everyone with all our might.</p>

                            <div className="fn_cs_testimonials">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <p>One of the best. It works quite well for software development also. The design and ease of installation and customizing is exceptional. Many plaudits to the developers!</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/1.jpg"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>OldPhot</p>
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
                                                <p>Very good design and code quality. The costumer support is excellent. They respond within minutes and solve problems on the fly. I sincerely recommend!</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/2.jpg"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Wuoh</p>
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
                                                <p>I Like the whole Theme, the design, customizability, features, etc. The support has been absolutely fantastic and friendly, helping me to solve any issue I was having.</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/3.jpg"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Bartolo</p>
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
                                                <p>The best theme in the world ; Really love it. Support is amazing, and they always help me with my problems. To be honest - I have earlier other theme, but this is so good, that why I choose it</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/4.jpg"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Przemeknorek</p>
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
