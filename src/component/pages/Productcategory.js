import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import clothTag from '../../images/clothTag.jpg';
import billboard from '../../images/Bill board.jpg';
import rollUpStand from '../../images/Roll up Stand.jpg';
import xBanner from '../../images/X banner.jpg';
import teardropBanner from '../../images/Teardrop banner.jpg';


const Productcategory = () => {
  return (
    <Fragment>
           {/* Photo gallery */}         
<section style={{backgroundColor: "whitesmoke", paddingTop: '50px', paddingBottom:'90px'}}>
    <div className="container">
        <div className='pt-5'>
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <h3>
                        Top Rated Products
                    </h3>
                </div>
                <div>
                    <a href="">See more </a>
                </div>
            </div>

        </div>
    </div>
        <Slide autoplay={false} slidesToShow={1}>
            <div className="container card-container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className='each-slide-effect'>
                        <Link to='/clothTagPage' className="card mb-4 card1">
                            <img src={clothTag} alt="" className="card-img-top"/>
                            <div className="row card-body1">
                                <div className="col-8">
                                    <h5 className='clothTag-h5'>
                                        Cloth Tag
                                    </h5>                              
                                    <span className="clothTag-pieces">
                                        30-50 pcs
                                    </span> 
                                </div>
                            
                                <div className="col-4 clothTag-amount">
                                    <h5>
                                        <b> $19</b>
                                    </h5>
                                </div>
                                
                                <div className="col-12 mt-2">
                                        <button className="btn btn-block my-1 btn-clothTag" type="button">
                                            Add to cart <i className="fa fa-shopping-cart ml-4"></i> 
                                        </button>
                                    </div>            
                            </div>
                        </Link>
                    </div>
                    <div className='each-slide-effect ml-5'>
                        <Link to='/billboard' className="card mb-4 card1">
                            <img src={billboard} alt="" className="card-img-top" />
                            <div className="row card-body1">
                                <div className="col-8">
                                    <h5 className='clothTag-h5'>
                                        Billboard Printing
                                    </h5>                              
                                    <span className="clothTag-pieces">
                                        3-5 pcs
                                    </span> 
                                </div>
                            
                                <div className="col-4 clothTag-amount">
                                    <h5>
                                         <b>$49</b>
                                    </h5>
                                </div>
                                
                                <div className="col-12 mt-2">
                                        <button className="btn btn-block my-1 btn-clothTag" type="button">
                                            Add to cart<i className="fa fa-shopping-cart ml-4"></i> 
                                        </button>
                                    </div>            
                            </div>
                        </Link>
                    </div>
                    <div className='each-slide-effect ml-5'>
                        <Link to='/rollUpStand' className="card mb-4 card1">
                            <img src={rollUpStand} alt="" className="card-img-top" />
                            <div className="row card-body1">
                                <div className="col-8">
                                    <h5 className='clothTag-h5'>
                                        Roll Up Stand
                                    </h5>                              
                                    <span className="clothTag-pieces">
                                        10-50 pcs
                                    </span> 
                                </div>
                            
                                <div className="col-4 clothTag-amount">
                                    <h5>
                                        <b>$39</b>
                                    </h5>
                                </div>
                                
                                <div className="col-12 mt-2">
                                        <button className="btn btn-block my-1 btn-clothTag" type="button">
                                            Add to cart<i className="fa fa-shopping-cart ml-4"></i> 
                                        </button>
                                    </div>            
                            </div>
                        </Link>
                    </div>
                    <div className='each-slide-effect ml-5'>
                        {/* <div className="card mb-4 card1">
                            <img src={xBanner} alt="" className="card-img-top" />
                            <div className="row card-body1">
                                <div className="col-8">
                                    <h5 className='clothTag-h5'>
                                        X Banner Printing
                                    </h5>                              
                                    <span className="clothTag-pieces">
                                        15-40 pcs
                                    </span> 
                                </div>
                            
                                <div className="col-4 clothTag-amount">
                                    <h5>
                                        <b>$35</b>
                                    </h5>
                                </div>
                                
                                <div className="col-12 clothTag">
                                        <button className="btn btn-block my-1 btn-clothTag" type="button">
                                            Add to cart<i className="fa fa-shopping-cart ml-4"></i> 
                                        </button>
                                    </div>            
                            </div>
                        </div> */}
                    </div>
                    <div className='each-slide-effect'>                        
                        {/* <div className="card mb-4 card1">
                            <img src={teardropBanner} alt="" className="card-img-top" />
                            <div className="row card-body1">
                                <div className="col-8">
                                    <h5 className='clothTag-h5'>
                                        Teardrop Banner Printing
                                    </h5>                              
                                    <span className="clothTag-pieces">
                                        15-50 pcs
                                    </span> 
                                </div>
                            
                                <div className="col-4 clothTag-amount">
                                    <h5>
                                        <b>$39</b>
                                    </h5>
                                </div>
                                
                                <div className="col-12 clothTag">
                                        <button className="btn btn-block my-1 btn-clothTag" type="button">
                                            Add to cart<i className="fa fa-shopping-cart ml-4"></i> 
                                        </button>
                                </div>            
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Slide>                    
</section>
    </Fragment>
)
}

export default Productcategory