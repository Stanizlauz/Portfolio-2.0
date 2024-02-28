import React from 'react'

export default function Portfolio() {
    return (
        <>
            <div className="unslate_co--section" id="portfolio-section">
                <div className="container">
                    <div className="relative"><div className="loader-portfolio-wrap"><div className="loader-portfolio" /></div> </div>
                    <div id="portfolio-single-holder" />
                    <div className="portfolio-wrapper">
                        <div className="d-flex align-items-center mb-4 gsap-reveal gsap-reveal-filter">
                            <h2 className="mr-auto heading-h2"><span className="gsap-reveal">Portfolio</span></h2>
                            {/* <a href="#" class="text-white js-filter d-inline-block d-lg-none">Filter</a>
        
        <div class="filter-wrap">
          <div class="filter ml-auto" id="filters">
            <a href="#" class="active" data-filter="*">All</a>
            <a href="#" data-filter=".web">Web</a>
            <a href="#" data-filter=".branding">Branding</a>
            <a href="#" data-filter=".illustration">Illustration</a>
            <a href="#" data-filter=".packaging">Packaging</a>
          </div>
        </div> */}
                        </div>
                        <div id="posts" className="row gutter-isotope-item">
                            <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="portfolio-single-1.html" className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id={1}>
                                    <div className="overlay">
                                        <span className="wrap-icon icon-link2" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Slick design</p>
                                        </div>
                                    </div>
                                    <img src="images/work_1_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item branding packaging illustration col-sm-6 col-md-6 col-lg-4 isotope-mb-2 ">
                                <a href="portfolio-single-3.html" className="portfolio-item ajax-load-page item-portrait isotope-item gsap-reveal-img" data-id={3}>
                                    <div className="overlay">
                                        <span className="wrap-icon icon-link2" />
                                        <div className="portfolio-item-content">
                                            <h3>Modelling, Banner</h3>
                                            <p>Business awareness and adverts</p>
                                        </div>
                                    </div>
                                    <img src="images/work_2_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item branding packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_3_md.jpg" className="portfolio-item isotope-item gsap-reveal-img ajax-load-page" data-id={4}>
                                    <div className="overlay">
                                        <span className="wrap-icon icon-link2" />
                                        <div className="portfolio-item-content">
                                            <h3>Business Logo</h3>
                                            <p>Mockup design</p>
                                        </div>
                                    </div>
                                    <img src="images/work_3_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_4_full.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Watch">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-photo2" />
                                        <div className="portfolio-item-content">
                                            <h3>Logo</h3>
                                            <p>Company preferences</p>
                                        </div>
                                    </div>
                                    <img src="images/work_4_full.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item illustration packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_5_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-photo2" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Cartoon design</p>
                                        </div>
                                    </div>
                                    <img src="images/work_5_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item illustration packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_5_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-photo2" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Face Slice</p>
                                        </div>
                                    </div>
                                    <img src="images/izu.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_6_md.jpg" className="portfolio-item ajax-load-page item-portrait isotope-item gsap-reveal-img" data-id={2}>
                                    <div className="overlay">
                                        <span className="wrap-icon icon-link2" />
                                        <div className="portfolio-item-content">
                                            <h3>Business cards</h3>
                                            <p>Ectatic</p>
                                        </div>
                                    </div>
                                    <img src="images/work_6_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item branding packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_7_a_md.jpg" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-photo2" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Art.</p>
                                        </div>
                                    </div>
                                    <img src="images/work_7_a_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item branding packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_7_a_md.jpg" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-photo2" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Face Slice.</p>
                                        </div>
                                    </div>
                                    <img src="images/bobby.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_8_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Showreel 2019">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-play_circle_filled" />
                                        <div className="portfolio-item-content">
                                            <h3>Magazine Cover</h3>
                                            <p>Beautiful</p>
                                        </div>
                                    </div>
                                    <img src="images/work_8_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_8_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Showreel 2019">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-play_circle_filled" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Model</p>
                                        </div>
                                    </div>
                                    <img src="images/EDITH.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_8_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Showreel 2019">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-play_circle_filled" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Poster</p>
                                        </div>
                                    </div>
                                    <img src="images/art2.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_8_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Showreel 2019">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-play_circle_filled" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Drip</p>
                                        </div>
                                    </div>
                                    <img src="images/drip.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web illustration col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_9_a_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Render Packaging">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-photo2" />
                                        <div className="portfolio-item-content">
                                            <h3>Celebrity Pictures</h3>
                                            <p>Art.</p>
                                        </div>
                                    </div>
                                    <img src="images/work_9_a_md.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                            <div className="item web illustration col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                                <a href="images/work_9_a_md.jpg" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Render Packaging">
                                    <div className="overlay">
                                        <span className="wrap-icon icon-photo2" />
                                        <div className="portfolio-item-content">
                                            <h3>Photoshop</h3>
                                            <p>Cards.</p>
                                        </div>
                                    </div>
                                    <img src="images/deihe.jpg" className="lazyload  img-fluid" alt="Images" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
