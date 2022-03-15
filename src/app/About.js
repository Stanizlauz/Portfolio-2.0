import React from 'react'

export default function About() {
    return (
        <>
            <div className="unslate_co--section" id="about-section">
                <div className="container">
                    <div className="section-heading-wrap text-center mb-5">
                        <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">About Me</span></h2>
                        <span className="gsap-reveal">
                            <img src="images/divider.png" alt="divider" width={76} />
                        </span>
                    </div>
                    <div className="row mt-5 justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <figure className="dotted-bg gsap-reveal-img ">
                                <img src="images/about_me_pic2.jpg" alt="" className="img-fluid" />
                            </figure>
                        </div>
                        <div className="col-lg-4 pr-lg-5">
                            <h3 className="mb-4 heading-h3"><span className="gsap-reveal">We can make it together</span></h3>
                            <p className="lead gsap-reveal">Bobby hails from Imo state, from the province of Orlu. Resides in Lagos state from the province of Ojo.</p>
                            <p className="mb-4 gsap-reveal"> Certified and trusted work partner... Happy to work with you</p>
                            <p className="gsap-reveal"><a href="Chibuzor izuka.pdf" download="Izuka Chibuzor Bobby" className="btn btn-outline-pill btn-custom-light">Download my Resume</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
