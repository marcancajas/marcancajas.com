import React from 'react';

export default function ModalBox() {
    return (
        <>
            {/* MODALBOX  */}
            <div className="deebo_fn_modalbox">
                <a className="extra_closer" href="#"></a>
                <div className="box_inner">
                    <a className="closer" href="#"><span></span></a>
                    <div className="modal_content">

                        <div className="modal_in">
                            {/* Content comes from JS  */}
                        </div>

                        <div className="fn__nav" data-from="" data-index="">
                            <a href="#" className="prev">
                                <span className="text">Prev</span>
                                <span className="arrow_wrapper"><span className="arrow"></span></span>
                            </a>
                            <a href="#" className="next">
                                <span className="text">Next</span>
                                <span className="arrow_wrapper"><span className="arrow"></span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /MODALBOX   */}
        </>
    );
}
