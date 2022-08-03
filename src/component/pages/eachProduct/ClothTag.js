import React from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import clothTag from '../../../images/clothTag.jpg'
import Footer from '../../layout/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WhatBrandbarnOffer from '../../layout/WhatBrandbarnOffer';
import Productcategory from '../Productcategory';
import SupportChannels from './SupportChannels';

const ClothTag = () => {
    return (
    <Fragment>
        <div className='container pt-5'>
            <div className='d-flex'>
                <div className=''>
                        <img src={clothTag} alt="" className="card-img-top" style={{width:'550px', height: '400px',borderRadius:'10px'}}/>                                       
                </div>
                <div className='pt-4 ml-5' style={{marginLeft:'50px'}}>
                    <h6 style={{color:'#ff7900'}}>
                        Tags
                    </h6>
                    <h2 style={{color:'black', fontSize:'40px', fontWeight: 'bold'}}>
                        Cloth Tag
                    </h2>
                    <p style={{color:'#777'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione alias laborum dolor sunt cumque magnam explicabo rerum
                    </p>
                    <div className='pt-4'>
                        <h5 style={{color:'black', fontWeight: 'bold'}}>
                            Description
                        </h5>
                        <p style={{color:'#777'}}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt beatae eligendi officia ducimus adipisci expedita possimus deserunt cupiditate
                        </p>
                    </div>
                    <div className='d-flex'>
                        <ul className='d-flex justify-content-between list-unstyled'>
                            <li>
                                    <i class="fab fa-facebook" style={{fontSize: '30px', borderRadius: '100%'}}></i>
                            </li>
                                <li>
                                    <i class="fab fa-twitter" style={{fontSize: '30px', borderRadius: '100%'}}></i>
                            </li>
                                <li>
                                    <i className="fa fa-whatsapp" style={{fontSize: '30px', borderRadius: '100%'}}></i>
                            </li>
                        </ul>
                        <h5>
                            Share
                        </h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='pt-5'>
                            <Link to='/order' className='btn btn-clothTag' type="button">Order</Link>
                        </div>
                        <div className='pt-5'>
                            <Link to='/customizeOrder' className='btn btn-clothTag2' type="button" style={{backgroundColor:'teal'}}>Customize Order</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div  className='d-flex justify-content-between' style={{marginTop:'100px',marginBottom:'100px'}}>
                    <div>
                        <div>
                            <div className='d-flex align-items-center justify-content-between btn-clothTag3' style={{backgroundColor:'teal',paddingRight:'30px'}}>
                                <p className=''>Quantity</p>
                                <div>
                                    <i class="fas fa-angle-down"></i>    
                                </div>
                                {/* <i class="fa-solid fa-arrow-down"></i> */}
                            </div>
                            <form className='form-group pt-2'>
                                <div class="col">
                                    <input type="number" className="form-control" id="amount" placeholder="Enter Amount" name="amount" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex align-items-center justify-content-between btn-clothTag3' style={{backgroundColor:'teal',paddingRight:'30px'}}>
                            <p>Specifications</p>
                            <i class="fas fa-angle-down"></i>
                                {/* <i class="fa-solid fa-arrow-down"></i> */}
                            </div>
                        <div className='pt-2'>
                            <h6>Paper Thickness</h6>
                            {/* <form className='form-group pt-2'>
                                <div class="col">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html">Rounded Edges</label>
                                </div>
                            </form>
                            <p>This will contain radio buttons of what customers want</p> */}
                        </div>
                    </div>
                    <div>
                        <div className='d-flex align-items-center justify-content-between btn-clothTag3' style={{backgroundColor:'teal',paddingRight:'30px'}}>
                            <p>
                                Shipping
                            </p>
                            <i class="fas fa-angle-down"></i>
                            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-down" /> */}
                        </div>
                        <div className="pt-2">
                            <p>
                                <i>Delivery Van img</i>
                                <h6>Delivery</h6>
                                <p>Estimated delivery time 1-4 days <br />(Within and Outside lagos)</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{marginTop:'100px',marginBottom:'100px',backgroundColor: 'rgba(192, 192, 192, 0.467)', padding: '30px'}}>
                <div className='mt-5'>
                    <div className='recDimdiv'>
                        <h6 className='recDim'>
                            Recommended dimensions
                        </h6>                       
                    </div>
                    {/* <hr /> */}
                    {/* this will be a toggle on and off dimension */}
                    <h6 className='recDim' style={{ color: '#616161', textDecoration: 'line-through' }}>
                        <del> Add dimensions</del>
                    </h6>
                </div>
                <table className='table' style={{width:'700px'}}>
                    <thead>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col' style={{color:'#ff7900'}}>Small</th>
                            <th scope='col' style={{color:'#ff7900'}}>Medium</th>
                            <th scope='col' style={{color:'#ff7900'}}>Large</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                            <th className='fw-normal'>Height (cm)</th>
                            <td>10.00</td>
                            <td>20.00</td>
                            <td>30.00</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th className='fw-normal'>Length (cm)</th>
                            <td>20.00</td>
                            <td>24.00</td>
                            <td>26.00</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th className='fw-normal'>Width (cm)</th>
                            <td>13.00</td>
                            <td>18.00</td>
                            <td>24.00</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th className='fw-normal'>Handle heigth (cm)</th>
                            <td>15.00</td>
                            <td>18.00</td>
                            <td>22.00</td>
                        </tr>
                        <tr>
                            <th className='fw-normal'>Handle heigth (cm)</th>
                            <td>2.00</td>
                            <td>3.00</td>
                            <td>4.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            <div className='container'>
                <h4>We got you covered</h4>
                <WhatBrandbarnOffer />
            </div>
            <div>
                <Productcategory />
            </div> 
            <div className='container'>
                <div>
                    {/* <form className='form-group pt-2'>
                        <div class="col">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                        </div>
                    </form> */}
                </div>
            </div>
            <div>
                <SupportChannels />
            </div>
        <Footer/>
    </Fragment>
)
}

export default ClothTag