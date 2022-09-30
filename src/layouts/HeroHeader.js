import React, { useEffect } from 'react';

export default function HeroHeader({ resumeTrueFalse }) {
    useEffect(() => {
        const Typed = require("typed.js");
        new Typed(".is-visible", {
            strings: ["Designer", "Developer", "Freelancer"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 40,
            // time before typing starts
            startDelay: 900,
            // backspacing speed
            backSpeed: 40,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            // loopCount: 5,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
        });
    }, []);
    return (
        <>
            {/* Hero Header */}
            <section id="hero-header" className="section_header">
                <div className="container">
                    <div className="content">
                        <div className="left_hero_header">
                            <div className="circle">
                                <div className="bg_img" style={{ "backgroundImage": "url(img/header/1.jpg)" }}></div>
                                <img src="img/thumb/square.jpg" alt="" />
                                <div className="circle_holder_blue"><span></span></div>
                                <div className="circle_holder_orange"><span></span></div>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a onClick={resumeTrueFalse} href="#" className="person_info">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" className="fn__svg replaced-svg">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="m256,242.4c-63.8,0-115.7-51.9-115.7-115.7 0-63.8 51.9-115.7 115.7-115.7 63.8,0 115.7,51.9 115.7,115.7 0,63.8-51.9,115.7-115.7,115.7zm0-190.6c-41.3,1.42109e-14-74.9,33.6-74.9,74.9 0,41.3 33.6,74.9 74.9,74.9 41.3,0 74.9-33.6 74.9-74.9 0-41.3-33.6-74.9-74.9-74.9z"></path>
                                                </g>
                                                <g>
                                                    <path d="m480.6,501h-449.2c-11.3,0-20.4-9.1-20.4-20.4 0-66.7 26-129.2 73.1-176 30.4-30.2 73.3-47.5 117.6-47.5h108.6c44.4,0 87.2,17.3 117.6,47.5 47.1,46.8 73.1,109.3 73.1,176 0,11.3-9.1,20.4-20.4,20.4zm-427.8-40.8h406.4c-4.6-48-25.6-92.4-60.1-126.6-22.8-22.6-55.2-35.6-88.8-35.6h-108.6c-33.7,0-66,13-88.8,35.6-34.5,34.2-55.5,78.6-60.1,126.6z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="right_hero_header">
                            <div className="my_self">
                                <h4>Hello! I Am</h4>
                                {/* - It is animation title. You can change animation variation by changing extra class to one of next classes: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push. cd-headline class can not be removed.  */}
                                <h2 className="cd-headline clip">
                                    <span className="cd-words-wrapper">
                                        <b className="is-visible"></b>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -/ Hero Header */}
        </>
    )

}
