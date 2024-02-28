import React from 'react'

export default function Nav() {
    return (
        <>
            <nav className="unslate_co--site-nav site-nav-target">
                <div className="container">
                    <div className="row align-items-center justify-content-between text-left">
                        <div className="col-md-5 text-right">
                            <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                                <li className="has-children">
                                    <a href="#home-section" className="nav-link">Home</a>
                                    {/* <ul className="dropdown">
                                        <li>
                                            <a href="index.html">Hero Image BG</a>
                                        </li>
                                        <li>
                                            <a href="index-video.html">Video BG</a>
                                        </li>
                                        <li>
                                            <a href="index-hero-slider.html">Hero Slider</a>
                                        </li>
                                        <li>
                                            <a href="index-sidebar-menu.html">Sidebar Menu</a>
                                        </li>
                                        <li>
                                            <a href="index-right-menu.html">Right Menu</a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li><a href="#about-section" className="nav-link">About</a></li>
                                {/* <li><a href="#services-section" className="nav-link">Services</a></li> */}
                            </ul>
                        </div>
                        <div className="site-logo pos-absolute">
                            <a href="index.html" className="unslate_co--site-logo">Welcome<span>.</span></a>
                        </div>
                        <div className="col-md-5 text-right text-lg-left">
                            <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                                <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
                                {/* <li><a href="#skills-section" className="nav-link">Skills</a></li> */}
                                {/* <li><a href="#testimonial-section" className="nav-link">Testimonial</a></li> */}
                                {/* <li><a href="#journal-section" className="nav-link">Journal</a></li> */}
                                <li><a href="#contact-section" className="nav-link">Contact</a></li>
                            </ul>
                            <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                                <li><a href="#" className="js-menu-toggle">Menu</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* END nav */}


            <div className="cover-v1 jarallax" style={{ backgroundImage: 'url("images/bobbybg.jpg")' }} id="home-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 mx-auto text-center">
                            <h1 className="heading gsap-reveal-hero">Bobbie_Arts</h1>
                            <h2 className="subheading gsap-reveal-hero">A graphic designer and web developer</h2>
                        </div>
                    </div>
                </div>
                <a href="#portfolio-section" className="mouse-wrap smoothscroll">
                    <span className="mouse">
                        <span className="scroll" />
                    </span>
                    <span className="mouse-label">Scroll</span>
                </a>
            </div>
            {/* END .cover-v1 */}


        </>
    )
}
