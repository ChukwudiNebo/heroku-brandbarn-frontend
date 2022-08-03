import React, { useState, Fragment } from 'react';
import {Outlet, Link } from 'react-router-dom';
import brandbarnlogo from '../../images/brandbarnlogo.jpg';
import { connect } from 'react-redux';
import {logout} from '../../actions/auth'
import PropTypes from 'prop-types';


const Navbar = ({auth:{isAuthenticated, loading}, logout}) =>
{

    const [navbarOpen, setNavbar] = useState(false);

    const authLinks = (
        <div className="ul-div d-block">
            <ul className="list-unstyled d-flex">
                <Link to='#!' onClick={logout}>
                    <i className='fas fa-sign-out-alt'></i>{' '}
                <span className="signUp">Logout </span>             
                </Link>
            </ul>
        </div>
    );


    const guestLinks = (
        <div className="ul-div">
                
                <ul className="list-unstyled d-flex ">
                    {/* <li>
                        <a href="">
                            <img src="images/WhatsApp logo.png" id="whatsappBusinessLogo" alt="logo" /> 
                        </a>
                    </li> */}
                    <div className="hamburger d-sm-block d-md-block d-lg-none" onClick={() => setNavbar(!navbarOpen)}>
                        <div className={!navbarOpen? 'bar' : 'bar one'}></div>
                        <div className={!navbarOpen? 'bar' : 'bar two'}></div> 
                        <div className={!navbarOpen? 'bar' : 'bar three'}></div>            
                    </div>
                        <div className="hamburger-list d-md-none d-lg-flex d-none">                                        
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/company">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link to="/service">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/faqs">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="logIn">
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link to="/signUp" className="signUp">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                    {navbarOpen && (
                                    <div className={navbarOpen? 'navbarOpen' : null}>                                        
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/company">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link to="/service">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/faqs">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="logIn">
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link to="/signUp" className="signUp">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                    )}            
                    
                </ul>
            </div>
    )
    

    

    return (
        <Fragment>

            
            <div>
                {/* this is the navbar section */}
    <div className="container-fluid">
        <div className="d-flex align-items-center">
            <div className="brandbarn">
                <div>
                    <img src={brandbarnlogo} className="brandbarn-logo" alt="Logo" />
                </div>
                <div>
                    <h4 className="pl-1">
                        Brand<span style ={{ color: "#ff5500"}}>Barn</span>
                    </h4>    
                </div>
            </div>
                {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </div>
    </div>
            </div>
            <Outlet />

        </Fragment>
    );
}


Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => (
    {
        auth: state.auth
    });



export default connect(mapStateToProps, {logout})(Navbar);