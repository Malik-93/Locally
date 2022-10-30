import React from "react";

import bannarImage from '../../assets/images/bg/bg-about.webp'
import ourCompany from '../../assets/images/about-2.jpeg'
import people1 from '../../assets/images/people/people-1.jpg'
import people2 from '../../assets/images/people/people-2.jpg'
import people3 from '../../assets/images/people/people-3.jpg'
import people4 from '../../assets/images/people/people-4.jpg'

const About = () => {
    return (
        <>
            <main id="main" className="site-main">
                <div className="page-title page-title--small align-left" style={{ backgroundImage: `url('${bannarImage}')` }}>
                    <div className="container">
                        <div className="page-title__content">
                            <h1 className="page-title__name">About Us</h1>
                            <p className="page-title__slogan">Tell you about us</p>
                        </div>
                    </div>
                </div>
                {/* .page-title */}
                <div className="site-content">
                    <div className="container">
                        <div className="company-info flex-inline">
                            <img src={ourCompany} alt="Our Company" />
                            <div className="ci-content">
                                <span>Our Company</span>
                                <h2>Mission statement</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        {/* .company-info */}
                        <div className="our-team">
                            <div className="container">
                                <h2 className="title align-center">Meet Our Team</h2>
                            </div>
                            <div className="ot-content grid grid-4">
                                <div className="grid-item ot-item hover__box">
                                    <div className="hover__box__thumb">
                                        <img src={people1} alt="" />
                                    </div>
                                    <div className="ot-info">
                                        <h3>Jaspreet Bhamrai</h3>
                                        <span className="job">Co - founder</span>
                                    </div>
                                </div>
                                <div className="grid-item ot-item hover__box">
                                    <div className="hover__box__thumb">
                                        <img src={people2} alt="" />
                                    </div>
                                    <div className="ot-info">
                                        <h3>Justine Robinson</h3>
                                        <span className="job">Marketing Guru</span>
                                    </div>
                                </div>
                                <div className="grid-item ot-item hover__box">
                                    <div className="hover__box__thumb">
                                        <img src={people3} alt="" />
                                    </div>
                                    <div className="ot-info">
                                        <h3>Jeremías Romero</h3>
                                        <span className="job">Designer</span>
                                    </div>
                                </div>
                                <div className="grid-item ot-item hover__box">
                                    <div className="hover__box__thumb">
                                        <img src={people4} alt="" />
                                    </div>
                                    <div className="ot-info">
                                        <h3>Rutherford Brannan</h3>
                                        <span className="job">Mobile developer</span>
                                    </div>
                                </div>
                            </div>
                            {/* .ot-content */}
                        </div>
                        {/* .our-team */}
                        <div className="join-team align-center">
                            <div className="container">
                                <h2 className="title">Join our team</h2>
                                <div className="jt-content">
                                    <p>
                                        We’re always looking for talented individuals and <br /> people who are hungry to do great work.
                                    </p>
                                    <a href="#" className="btn" title="View openings">
                                        View openings
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* .join-team */}
                    </div>
                </div>
                {/* .site-content */}
            </main>
        </>
    );
};

export default About;
