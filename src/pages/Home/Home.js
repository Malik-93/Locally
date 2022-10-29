import React, { useState } from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'

import bannar from '../../assets/images/banner-pic.webp'
import bookingIcon from '../../assets/images/Capture.PNG';
import getApp from '../../assets/images/bg/bg-app-1.jpg'
import appStore from '../../assets/images/assets/app-store.png'
import googleStore from '../../assets/images/assets/google-play.png'
import GuidCard from './components/guidCard';
import Blog from './components/blog';


const Home = ({isLogin}) => {
  const [isShow, setIsShow] = useState('')
  const [location, setLocation] = useState('')

  const openOptions = (type) => {
    setIsShow(type ? 'block' : 'none')
  }

  return (
    <>
        <Navbar isLogin={isLogin}/>

        <main id="main" className="site-main overflow">
          <div className="site-banner" style={{backgroundImage: `url(${bannar})`}}>
            <div className="container">
              <div className="site-banner__content">
                <p className="text-white">The Best Holiday Experience</p>
                <h1 className="site-banner__title text-white">Stay like a local</h1>
                <form action="#" className="site-banner__search layout-02">
                  <div className="field-input">
                    <label htmlFor="s">Find</label>
                    <input className="site-banner__search__input open-suggestion" id="s" type="text" name="s" placeholder="What you are searching for" autoComplete="off" />
                  </div>
                  {/* .site-banner__search__input */}
                  <div className="field-input">
                    <label htmlFor="loca"> Location </label>
                    <input className="site-banner__search__input open-suggestion" value={location} onFocus={()=> openOptions(true)} id="loca" type="text" name="where" placeholder=" Your city" autoComplete="off" />
                    <div className={`search-suggestions location-suggestions d-${isShow}`}>
                      <ul>
                        <li onClick={() => {setLocation('Current'); openOptions(false)}}>
                          <a href="#"><i className="las la-location-arrow" /><span>Current location</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .site-banner__search__input */}
                </form>
                {/* .site-banner__search */}
              </div>
              {/* .site-banner__content */}
            </div>
          </div>
          <section style={{backgroundColor: '#f8f9fa', padding: '100px'}}>
            <div className="container">
              <div className="text-center pb-lg-4">
                <p className="subtitle text-secondary">One-of-a-kind vacation rentals</p>
                <h1 className="mb-2">Booking with us is easy</h1>
              </div>
              <div className="row">
                <div className="mb-3 mb-lg-0 text-center col-lg-4">
                  <div className="px-0 px-lg-3">
                    <div className="icon-rounded bg-primary-light mb-3">
                      <img src={bookingIcon} alt="" />
                    </div>
                    <h3 className="h5">Find the perfect rental</h3>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
                  </div>
                </div>
                <div className="mb-3 mb-lg-0 text-center col-lg-4">
                  <div className="px-0 px-lg-3">
                    <div className="icon-rounded bg-primary-light mb-3">
                      <img src={bookingIcon} alt="" />
                    </div>
                    <h3 className="h5">Book with confidence</h3>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
                  </div>
                </div>
                <div className="mb-3 mb-lg-0 text-center col-lg-4">
                  <div className="px-0 px-lg-3">
                    <div className="icon-rounded bg-primary-light mb-3">
                      <img src={bookingIcon} alt="" />
                    </div>
                    <h3 className="h5">Enjoy your vacation</h3>
                    <p className="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <div className="cities">
            <div className="container">
              <h2 className="cities__title title">Our Guides</h2>
              <div className="cities__content">
                <div className="row">
                  <GuidCard/>
                </div>
              </div>
              {/* .cities__content */}
            </div>
          </div>

        {/* .cities */}
        <div className="banner-apps" style={{backgroundImage: `url(${getApp})`}}>
          <div className="container">
            <div className="banner-apps__content">
              <h2 className="banner-apps__title">Get the App</h2>
              <p className="banner-apps__desc">Download the app and go to travel the world.</p>
              <div className="banner-apps__download">
                <a title="App Store" href="#" className="banner-apps__download__iphone"><img src={appStore} alt="App Store" /></a>
                <a title="Google Play" href="#" className="banner-apps__download__android"><img src={googleStore} alt="Google Play" /></a>
              </div>
            </div>
          </div>
        </div>


        {/* .banner-apps */}
        <div className="news">
          <div className="container">
            <h2 className="news__title title title--more">
              Recent Blogs
              <a title="View more" href="#">
                View more
                <i className="la la-angle-right" />
              </a>
            </h2>
            <div className="news__content">
              <div className="row">
               <Blog/>
              </div>
            </div>
          </div>
        </div>
        {/* .news */}
      </main>

        <Footer/>
        
    </>
  )
}

export default Home