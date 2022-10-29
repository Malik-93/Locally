import React from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

import profileImg from '../../assets/images/avatars/male-3.jpg'
import listImage1 from '../../assets/images/listing/01.jpg'
import listImage2 from '../../assets/images/listing/02.jpg'
import listImage3 from '../../assets/images/listing/03.jpg'
import listImage4 from '../../assets/images/listing/04.jpg'
import listImage5 from '../../assets/images/listing/06.jpg'

const Profile = ({isLogin}) => {
  return (
    <>
        <Navbar isLogin={isLogin}/>

        <div className="owner-top">
            <div className="container">
                <div className="owner-top-inner">
                    <div className="owner-top-info">
                        <div className="avatar"><img src={profileImg} alt="Roman" /></div>
                        <div className="info">
                            <h3>Jack<span className="verified">(Verified)</span></h3>
                            <p>12 places, 33 reviews</p>
                        </div>
                    </div>
                    <div className="owner-top-button">
                        <h1>Hello, I'm Jack!</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="owner-page-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="owner-page-content">
                            <h2>Jack's Listing</h2>
                            <div className="area-places layout-3col">
                                <div className="place-item layout-02 place-hover" data-maps="tartine_manufactory">
                                    <div className="place-inner">
                                        <div className="place-thumb">
                                            <a className="entry-thumb" href="#"><img src={listImage1} alt="" /></a>
                                            <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist" data-place-id="{185}">
                                                <span className="icon-heart">
                                                    <i className="la la-bookmark large" />
                                                </span>
                                            </a>
                                            <a className="entry-category rosy-pink" href="#"> <i className="las la-utensils" /><span>Restaurant</span> </a>
                                            <a href="#" className="author" title="Author"><img src={profileImg} alt="Author" /></a>
                                        </div>
                                        <div className="entry-detail">
                                            <div className="entry-head">
                                                <div className="place-type list-item">
                                                    <span>Restaurant</span>
                                                </div>
                                                <div className="place-city">
                                                    <a href="#">Paris</a>
                                                </div>
                                            </div>
                                            <h3 className="place-title"><a href="#">Mattone Restaurant</a></h3>
                                            <div className="open-now"><i className="las la-door-open" />Open now</div>
                                            <div className="entry-bottom">
                                                <div className="place-preview">
                                                    <div className="place-rating">
                                                        <span>5.0</span>
                                                        <i className="la la-star" />
                                                    </div>
                                                    <span className="count-reviews">(2 Reviews)</span>
                                                </div>
                                                <div className="place-price">
                                                    <span>$$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="place-item layout-02 place-hover" data-maps="manly_beach">
                                    <div className="place-inner">
                                        <div className="place-thumb">
                                            <a className="entry-thumb" href="#"><img src={listImage2} alt="" /></a>
                                            <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist" data-place-id="{185}">
                                                <span className="icon-heart">
                                                    <i className="la la-bookmark large" />
                                                </span>
                                            </a>
                                            <a className="entry-category blue" href="#"> <i className="las la-dumbbell" /><span>Gym</span> </a>
                                            <a href="#" className="author" title="Author"><img src={profileImg} alt="Author" /></a>
                                        </div>
                                        <div className="entry-detail">
                                            <div className="entry-head">
                                                <div className="place-type list-item">
                                                    <span>Gym</span>
                                                </div>
                                                <div className="place-city">
                                                    <a href="#">Bordeaux</a>
                                                </div>
                                            </div>
                                            <h3 className="place-title"><a href="#">Retro Fitness</a></h3>
                                            <div className="open-now"><i className="las la-door-open" />Open now</div>
                                            <div className="entry-bottom">
                                                <div className="place-preview">
                                                    <div className="place-rating">
                                                        <span>5.0</span>
                                                        <i className="la la-star" />
                                                    </div>
                                                    <span className="count-reviews">(2 Reviews)</span>
                                                </div>
                                                <div className="place-price">
                                                    <span>$$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="place-item layout-02 place-hover" data-maps="bondi_beach">
                                    <div className="place-inner">
                                        <div className="place-thumb">
                                            <a className="entry-thumb" href="#"><img src={listImage3} alt="" /></a>
                                            <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist" data-place-id="{185}">
                                                <span className="icon-heart">
                                                    <i className="la la-bookmark large" />
                                                </span>
                                            </a>
                                            <a className="entry-category purple" href="#"> <i className="las la-spa" /><span>Massage</span> </a>
                                            <a href="#" className="author" title="Author"><img src={profileImg} alt="Author" /></a>
                                        </div>
                                        <div className="entry-detail">
                                            <div className="entry-head">
                                                <div className="place-type list-item">
                                                    <span>Massage</span>
                                                </div>
                                                <div className="place-city">
                                                    <a href="#">Lyon</a>
                                                </div>
                                            </div>
                                            <h3 className="place-title"><a href="#">Renew Body Spa</a></h3>
                                            <div className="open-now"><i className="las la-door-open" />Open now</div>
                                            <div className="entry-bottom">
                                                <div className="place-preview">
                                                    <div className="place-rating">
                                                        <span>5.0</span>
                                                        <i className="la la-star" />
                                                    </div>
                                                    <span className="count-reviews">(2 Reviews)</span>
                                                </div>
                                                <div className="place-price">
                                                    <span>$$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="place-item layout-02 place-hover" data-maps="coogee_beach">
                                    <div className="place-inner">
                                        <div className="place-thumb">
                                            <a className="entry-thumb" href="#"><img src={listImage4} alt="" /></a>
                                            <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist" data-place-id="{185}">
                                                <span className="icon-heart">
                                                    <i className="la la-bookmark large" />
                                                </span>
                                            </a>
                                            <a className="entry-category charcoal-purple" href="#"> <i className="las la-shopping-bag" /><span>Clothing Shop</span> </a>
                                            <a href="#" className="author" title="Author"><img src={profileImg} alt="Author" /></a>
                                        </div>
                                        <div className="entry-detail">
                                            <div className="entry-head">
                                                <div className="place-type list-item">
                                                    <span>Clothing Shop</span>
                                                </div>
                                                <div className="place-city">
                                                    <a href="#">Nantes</a>
                                                </div>
                                            </div>
                                            <h3 className="place-title"><a href="#">Antoinette</a></h3>
                                            <div className="open-now"><i className="las la-door-open" />Open now</div>
                                            <div className="entry-bottom">
                                                <div className="place-preview">
                                                    <span className="no-reviews">(no reviews)</span>
                                                </div>
                                                <div className="place-price">
                                                    <span>$$$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="place-item layout-02 place-hover" data-maps="cronulla_beach">
                                    <div className="place-inner">
                                        <div className="place-thumb">
                                            <a className="entry-thumb" href="#"><img src={listImage5} alt="" /></a>
                                            <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist" data-place-id="{185}">
                                                <span className="icon-heart">
                                                    <i className="la la-bookmark large" />
                                                </span>
                                            </a>
                                            <a className="entry-category green" href="#"> <i className="las la-film" /><span>Cinema</span> </a>
                                            <a href="#" className="author" title="Author"><img src={profileImg} alt="Author" /></a>
                                        </div>
                                        <div className="entry-detail">
                                            <div className="entry-head">
                                                <div className="place-type list-item">
                                                    <span>Restaurant</span>
                                                </div>
                                                <div className="place-city">
                                                    <a href="#">Paris</a>
                                                </div>
                                            </div>
                                            <h3 className="place-title"><a href="#">Kathay Cinema</a></h3>
                                            <div className="close-now"><i className="las la-door-closed" />Close now</div>
                                            <div className="entry-bottom">
                                                <div className="place-preview">
                                                    <span className="no-reviews">(no reviews)</span>
                                                </div>
                                                <div className="place-price">
                                                    <span>$$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <div className="pagination__numbers">
                                    <span>1</span>
                                    <a title="{2}" href="#">2</a>
                                    <a title="{3}" href="#">3</a>
                                    <a title="Next" href="#">
                                        <i className="la la-angle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="sidebar">
                            <aside className="widget widget-text">
                                <h3 className="widget-title">About</h3>
                                <div className="widget-content">
                                    <p>
                                        Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. He must have tried it a hundred times, shut his
                                        eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.
                                    </p>
                                    <p className="info"><span>Email: </span><a href="../cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="7d0f12101c133d1a101c1411531e1210">[email&nbsp;protected]</a></p>
                                    <p className="info"><span>Website: </span>https://www.abc.com</p>
                                    <ul>
                                        <li>
                                            <a title="Facebook" href="#">
                                                <i className="la la-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Twitter" href="#">
                                                <i className="la la-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Youtube" href="#">
                                                <i className="la la-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Instagram" href="#">
                                                <i className="la la-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer/>
    </>
  )
}

export default Profile