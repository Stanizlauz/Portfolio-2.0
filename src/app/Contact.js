import React from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6u1ppsf', 'template_kh9sg39', e.target, 'user_3Qmrr6MR0vYHh7GiRvOW9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="unslate_co--section" id="contact-section">
                <div className="container">
                    <div className="section-heading-wrap text-center mb-5">
                        <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Get In Touch</span></h2>
                        <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width={76} /></span>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-6">
                            <form onSubmit={sendEmail} className="form-outline-style-v1" >
                                <div className="form-group row mb-0">
                                    <div className="col-lg-6 form-group gsap-reveal">
                                        <label htmlFor="name">Name</label>
                                        <input name="name" type="text" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6 form-group gsap-reveal">
                                        <label htmlFor="email">Email</label>
                                        <input name="user_email" type="email" className="form-control" />
                                    </div>
                                    <div className="col-lg-12 form-group gsap-reveal">
                                        <label htmlFor="message">Write your message...</label>
                                        <textarea name="message" id="message" cols={30} rows={7} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group row gsap-reveal">
                                    <div className="col-md-12 d-flex align-items-center">
                                        <input type="submit" className="btn btn-outline-pill btn-custom-light mr-3"/>
                                        <span className="submitting" />
                                    </div>
                                </div>
                            </form>
                            <div id="form-message-warning" className="mt-4" />
                            <div id="form-message-success">
                                Your message was sent, thank you!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info-v1">
                                <div className="gsap-reveal d-block">
                                    <span className="d-block contact-info-label">Email</span>
                                    <a href="mailto:izukachibuzor4@gmail.com" className="contact-info-val">izukachibuzor4@gmail.com</a>
                                </div>
                                <div className="gsap-reveal d-block">
                                    <span className="d-block contact-info-label">Phone</span>
                                    <a href="tel:+2349053593165" className="contact-info-val">09053593165</a>
                                </div>
                                <div className="gsap-reveal d-block">
                                    <span className="d-block contact-info-label">Phone</span>
                                    <a href="tel:+2348102449681" className="contact-info-val">08102449681</a>
                                </div>
                                <div className="gsap-reveal d-block">
                                    <span className="d-block contact-info-label">Address</span>
                                    <address className="contact-info-val">Ojo, Lagos <br /> Nigeria</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END .unslate_co-site-inner */}

        </>
    )
}
