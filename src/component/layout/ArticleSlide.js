import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from "react-slideshow-image";
import brandLogo2 from '../../images/brandLogo2.jpg';
import brandLogo5 from '../../images/brandLogo5.jpg';



const ArticleSlide = () =>
{
    
    const style = {
        textAlign: 'center',
        padding: '50px 0px',
        width: '300px'
        // fontSize: '30px'
    };
    const properties = {
        duration: 3000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        indicators: false,
        responsive: [
            {
                breakpoint: 1024,
                setting: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

  return (
    <Fragment>
        <div className='articleSlide'>
            <div>
                <div className="articleHeading text-center">
                    <h1>
                        Innovative Product Categories
                    </h1>
                    <p className='text-center pt-3'>
                        Perfectly outlined innovative categories that fits into your Personal and Business Printing Demand
                    </p>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='topSearch'>
                        <h3 className='m-3'>Top Product Search</h3>
                    </div>
                    <div className="seeMore">
                        <Link to='/'>
                            See more →
                        </Link>  
                    </div>
                </div>
                <Slide {...properties}>
                    <div style={style}>
                        <div className='card card-div'>
                            <img src={brandLogo2} alt=".." className='articleSlideImage card-img-top'/>
                            <div className="card-body">
                                <h3 className='card-title'>
                                    Banner
                                </h3>
                                <p className='card-text'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptatibus illo, ipsa, aliquam reicien
                                iat deleniti voluptate earum iste delectus animi?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={style}>
                        <div className='card card-div'>
                            <img src={brandLogo5} alt=".." className='articleSlideImage' />
                            <div className="card-body">
                                <h3 className='card-title'>
                                    Cheque
                                </h3>
                                <p className='card-text'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptatibus illo, ipsa, aliquam reicien
                                iat deleniti voluptate earum iste delectus animi?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={style}>
                        <div className='card card-div'>
                            <img src={brandLogo2} alt=".." className='articleSlideImage card-img-top'/>
                            <div className="card-body">
                                <h3 className='card-title'>
                                    Banner
                                </h3>
                                <p className='card-text'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptatibus illo, ipsa, aliquam reicien
                                iat deleniti voluptate earum iste delectus animi?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={style}>
                        <div className='card card-div'>
                            <img src={brandLogo5} alt=".." className='articleSlideImage' />
                            <div className="card-body">
                                <h3 className='card-title'>
                                    Cheque
                                </h3>
                                <p className='card-text'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptatibus illo, ipsa, aliquam reicien
                                iat deleniti voluptate earum iste delectus animi?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={style}>
                        <div className='card card-div'>
                            <img src={brandLogo2} alt=".." className='articleSlideImage card-img-top'/>
                            <div className="card-body">
                                <h3 className='card-title'>
                                    Banner
                                </h3>
                                <p className='card-text'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptatibus illo, ipsa, aliquam reicien
                                iat deleniti voluptate earum iste delectus animi?
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>



    </Fragment>
)
}

export default ArticleSlide