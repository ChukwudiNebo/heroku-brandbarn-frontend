import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Outlet, Link } from 'react-router-dom';
import ldCarousel from '../../images/ldCarousel.jpg';
import ldCarousel2 from '../../images/ldCarousel2.jpg';
import ldCarousel3 from '../../images/ldCarousel3.jpg';

const Landing = () =>
{
    return (
        <Fragment>
            <div>   
                <div className='landingBG'>
                    <div className='container landingContainer'>
                    <div className="row justify-content-between align-items-start">
                        <div className="col-12 col-lg-6 landingPageText">
                            <h3>
                                Way To Go
                            </h3>
                            <p className="word">
                                <span> Join over <b>100+</b> Brands and individuals who trust and choose <b>BrandBarn</b> as their online printing and branding company.</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque sequi aliquid veritatis cupiditate ipsam minus eum recusandae! Blanditiis?</span>
                                <span>Loonem blanditiis iure tenetur deleniti a voluptatibus placeat, nam earum. Veritatis!</span>
                            </p>
                            <button type="button" className="btn btn-lg btn-block ldButton">
                                <Link to="/signUp" className='ldButtonLink'>Sign Up</Link>
                            </button>
                        </div>
                        <div className="col-12 col-lg-6 pt-5">
                            <Carousel>
                                
                                    <Carousel.Item>
                                        <img src={ldCarousel} alt="." className="landingPageimg d-block" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                            <img src={ ldCarousel2 } alt="." className="landingPageimg d-block" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                            <img src={ldCarousel3} alt="." className="landingPageimg d-block" />
                                    </Carousel.Item>
                                {/* <span aria-hidden = "true" className="carousel-control-prev-icon"/> */}
                            </Carousel>
                        </div>
                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

            </div>
            <Outlet />
        </Fragment>
    );
}


export default Landing;