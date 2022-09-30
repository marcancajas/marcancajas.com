import React from 'react';

export default function RightBar({toggleTrueFalse}) {
    return (
        <>
            {/* Right Bar  */}
            <div className="deebo_right_bar">
                <div className="right_container">
                    <div className="right_bar_clother">
                        <a onClick={toggleTrueFalse} href="#"></a>
                    </div>
                    <div className="traffic">
                        <h4>Menu</h4>
                        <ul>
                            <li><a onClick={toggleTrueFalse} href="#hero-header">Home</a></li>
                            <li><a onClick={toggleTrueFalse} href="#about">About</a></li>
                            <li><a onClick={toggleTrueFalse} href="#scills">Portfolio</a></li>
                            <li><a onClick={toggleTrueFalse} href="#services">Services</a></li>
                            <li><a onClick={toggleTrueFalse} href="#tips">News &amp; Tips</a></li>
                            <li><a onClick={toggleTrueFalse} href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="deebo_email">
                        <div className="email">
                            <p>Email</p>
                            <a href="mailto:trendycoder.com@gmail.com">trendycoder.com@gmail.com</a>
                        </div>
                        <div className="copyright">
                            <p>Copyright</p>
                            <a href="https://trendycoder.com/" target="_blank">Developed by TrendyCoder</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Right Bar  */}
        </>
    );
}
