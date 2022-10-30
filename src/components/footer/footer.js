import React from 'react'
import { Link } from 'react-router-dom'
import appStore from '../../assets/images/assets/app-store.png'
import googleStore from '../../assets/images/assets/google-play.png'


const Footer = () => {
  return (
    <>
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="footer__top__info">
                                <a title="Logo" href="home.html" className="footer__top__info__logo">
                                    <h1>Locally</h1>
                                </a>
                                <p className="footer__top__info__desc">Discover amazing things to do everywhere you go.</p>
                                <div className="footer__top__info__app">
                                    <a title="App Store" href="#" className="banner-apps__download__iphone">
                                      <img src={appStore} alt="App Store" />
                                    </a>
                                    <a title="Google Play" href="#" className="banner-apps__download__android">
                                      <img src={googleStore} alt="Google Play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <aside className="footer__top__nav">
                                <h3>Company</h3>
                                <ul>
                                    <li> <Link to='/about'> About Us</Link> </li>
                                    <li><a title="Blog" href>Blog</a></li>
                                    <li><a title="Faqs" href>Faqs</a></li>
                                    <li><a title="Contact" href>Contact</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-2">
                            <aside className="footer__top__nav">
                                <h3>Support</h3>
                                <ul>
                                    <li><a title="Get in Touch" href="#">Get in Touch</a></li>
                                    <li><a title="Help Center" href="#">Help Center</a></li>
                                    <li><a title="Live chat" href="#">Live chat</a></li>
                                    <li><a title="How it works" href="#">How it works</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3">
                            <aside className="footer__top__nav footer__top__nav--contact">
                                <h3>Contact Us</h3>
                                <p>Email: <a href="#" className="__cf_email__" data-cfemail="07747277776875734763686a666e692964686a" /></p>
                                <p>Phone: 1 (00) 832 2342</p>
                                <ul>
                                    <li className="facebook">
                                        <a title="Facebook" href="#">
                                            <i className="la la-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="twitter">
                                        <a title="Twitter" href="#">
                                            <i className="la la-twitter" />
                                        </a>
                                    </li>
                                    <li className="youtube">
                                        <a title="Youtube" href="#">
                                            <i className="la la-youtube" />
                                        </a>
                                    </li>
                                    <li className="instagram">
                                        <a title="Instagram" href="#">
                                            <i className="la la-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
                {/* .top-footer */}
                <div className="footer__bottom">
                    <p className="footer__bottom__copyright">2022 © <a title="Uxper Team" href="#"> Mini Studio </a>. All rights reserved.</p>
                </div>
                {/* .top-footer */}
            </div>
            {/* .container */}
        </footer>

    </>
  )
}

export default Footer