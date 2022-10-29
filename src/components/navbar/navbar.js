import React, { useRef, useState } from 'react'
import LoginForm from '../../pages/registration/Login';
import SignUpForm from '../../pages/registration/Signup';
import SocialLogin from '../SocialLogin';
import { Link } from 'react-router-dom';
import { sharedSignout } from '../../utils';

import profileImage from '../../assets/images/avatars/male-3.jpg';
import './navbar.css'

const Navbar = ({isLogin}) => {
    const signupFormRef = useRef()
    const loginFormRef = useRef()
    const [loginModal, setloginModal] = useState('');
    const [show, setShow] = useState('none');
    const [isActiveLogin, setisActiveLogin] = useState('');
    const [isActiveSignup, setisActiveSignup] = useState('');
    const [showSidebar, setShowSidebar] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState('');

 

 //  Authentication Modal
 const openModal = (type) =>{
     setloginModal('open')
     setShow('block')
     setShowSidebar('')
     
     setisActiveLogin(type === 'login' ? 'active' : '')
     setisActiveSignup(type === 'login' ? '' : 'active')

    if(type === 'login'){
        loginFormRef.current.classList.add('d-block')
        signupFormRef.current.classList.add('d-none')
        loginFormRef.current.classList.remove('d-none')
        signupFormRef.current.classList.remove('d-block')
    } else {
        loginFormRef.current.classList.add('d-none')
        signupFormRef.current.classList.add('d-block')
        loginFormRef.current.classList.remove('d-block')
        signupFormRef.current.classList.remove('d-none')
    }
}

const closeModal = () =>{
    setloginModal('')
    setShow('none')
    setisActiveLogin('')
    setisActiveSignup('')
    setShowSidebar('')
    loginFormRef.current.classList.add('d-block')
    signupFormRef.current.classList.add('d-none')
}

const sidebarFun = (type) =>{
    setShow(type ? 'block' : 'none')
    setShowSidebar(type ? 'open': '')

}

const openSearch = (type) =>{
    setIsSearchOpen(type ? 'open' : '')
}


  return (
    <>
     <header className="site-header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-5">
                    <div className="site">
                        <div className="site__menu">
                            <a title="Menu Icon" href="#" className="site__menu__icon" onClick={() => sidebarFun(true)}>
                                <i className="las la-bars la-24-black" />
                            </a>
                            <div className={`popup-background d-${show}`} />
                            <div className={`popup popup--left ${showSidebar}`}>
                                <a title="Close" href="#" className="popup__close" onClick={() => sidebarFun(false)}>
                                    <i className="las la-times la-24-black" />
                                </a>
                                {/* .popup__close */}
                                <div className="popup__content">
                                    {
                                        !isLogin?.uId ?
                                            <div className="popup__user popup__box open-form">
                                                <a title="Login" href="#" className="open-login" onClick={()=>openModal('login')}>Login</a>
                                                <a title="Sign Up" href="#" className="open-signup" onClick={()=>openModal('signup')}>Sign Up</a>
                                            </div>
                                        :
                                        <></>
                                    }
                                    {/* .popup__user */}
                                    <div className="popup__destinations popup__box">
                                        <ul className="menu-arrow">
                                            <li>
                                                <Link to='/'>Home</Link>                                                 
                                            </li>
                                            <li>
                                                <a href="#" title="Listings"> About Locally </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Listings"> Listing </a>
                                            </li>
                                            <li>
                                                <a href="#" title="Listings"> Contact Us </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* .popup__menu */}
                                </div>
                                {/* .popup__content */}
                                <div className="popup__button popup__box">
                                    <a title="Add place" href="#" className="btn">
                                        <i className="la la-plus" />
                                        <span>Add place</span>
                                    </a>
                                </div>
                                {/* .popup__button */}
                            </div>
                            {/* .popup */}
                        </div>
                        {/* .site__menu */}
                        <div className="site__brand">
                            <Link to='/app/dashboard'  className="site__brand__logo">
                                <h1>Locally</h1>
                            </Link>
                        </div>
                        {/* .site__brand */}
                    </div>
                    {/* .site */}
                </div>
                {/* .col-md-6 */}
                <div className="col-xl-6 col-7">
                    <div className="right-header align-right">
                        <nav className="main-menu">
                            <ul>
                                <li>
                                    <a href="#" title="Demos"> Home </a>
                                </li>
                                <li>
                                    <a href="#" title="Listings"> About Locally </a>
                                </li>
                                <li>
                                    <a href="#" title="Listings"> Listing </a>
                                </li>
                                <li>
                                    <a href="#" title="Listings"> Contact Us </a>
                                </li>
                            </ul>
                        </nav>
                        {
                            !isLogin?.uId ?
                                <div className="right-header__login">
                                    <a title="Login" className="open-login" onClick={()=>openModal('login')} href="#">Login</a>
                                </div>
                            :
                            <></>
                        }

                        {/* .right-header__login */}
                        <div className={`popup popup-form ${loginModal}`}>
                            <a title="Close" onClick={closeModal} href="#" className="popup__close">
                                <i className="las la-times la-24-black" />
                            </a>
                            {/* .popup__close */}
                            <ul className="choose-form">
                                <li className={`nav-signup ${isActiveSignup}`} onClick={()=>openModal('signup')}><a title="Sign Up" href="#signup">Sign Up</a></li>
                                <li className={`nav-login ${isActiveLogin}`} onClick={()=>openModal('login')}><a title="Log In" href="#login">Log In</a></li>
                            </ul>
                            <SocialLogin/>
                            <p className="choose-or"><span>Or</span></p>
                            <div className="popup-content">
                                <SignUpForm signupRef={signupFormRef}/>
                               <LoginForm loginRef={loginFormRef}/>
                            </div>
                        </div>
                        {/* .popup-form */}
                        <div className="right-header__search">
                            <a title="Search" href="#" className="search-open" onClick={()=> openSearch(true)}>
                                <i className="las la-search la-24-black" />
                            </a>
                            <div className={`site__search ${isSearchOpen}`}>
                                <a title="Close" href="#" className="search__close" onClick={()=> openSearch(false)}>
                                    <i className="la la-times" />
                                </a>
                                {/* .search__close */}
                                <form action="#" className="site__search__form" method="GET">
                                    <div className="site__search__field">
                                        <span className="site__search__icon">
                                            <i className="las la-search la-24-black" />
                                        </span>
                                        {/* .site__search__icon */}
                                        <input className="site__search__input" type="text" name="s" placeholder="Search places, cities" />
                                    </div>
                                    {/* .search__input */}
                                </form>
                                {/* .search__form */}
                            </div>
                            {/* .site__search */}
                        </div>
                        <div className="right-header__button btn">
                            <a title="Add place" href="#">
                                <i className="las la-plus la-24-white" />
                                <span>Add Listing</span>
                            </a>
                        </div>
                        {
                            isLogin?.uId ?
                                <div className='position-relative hover__menu'>
                                    <div>
                                        <img src={profileImage} alt="profile image" width={50} className='rounded-circle'/>
                                    </div>
                                    <div className="hover__menu-content d-none">
                                        <Link to='/app/profile' className='text-center'>
                                            Profile
                                        </Link>
                                        <div className="bg-secondary text-white text-white rounded-pill px-4 mt-2">
                                            <a href="#" onClick={sharedSignout}>
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            :
                            <></>
                        }

                        {
                            console.log(isLogin?.uId)
                        }
                        {/* .right-header__button */}
                    </div>
                    {/* .right-header */}
                </div>
                {/* .col-md-6 */}
            </div>
            {/* .row */}
        </div>
        {/* .container-fluid */}
    </header>

    </>
  )
}

export default Navbar