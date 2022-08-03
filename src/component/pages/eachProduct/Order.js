import React, { Fragment } from 'react';
import WhatBrandbarnOffer from '../../layout/WhatBrandbarnOffer';
import Footer from '../../layout/Footer';
import SupportChannels from './SupportChannels';


const Order = () => {
  return (
    <Fragment>
      <div className="container" style={{marginTop: '130px'}}>
        <div>
          <div>
            <h2>Upload your Two-sided Business Cards</h2>
          </div>
            <div className='' style={{paddingTop: '50px'}}>
              <h5>Drag and drop your design in the upload section</h5>
            </div>
        </div>
        <div className='uploadDiv1'>
            <div className='uploadDiv'>
              <div className="card card1">
                <div className='text-center pt-5'>
                  <button type='button' className='btn  btn-clothTag'>Upload</button>
                </div>
                <div className="upload-body">
                  <p className='text-center'>
                    Click upload or drag your design into this space.
                    <br />
                      PNG,JPEG,PSD e.t.c
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* <div className='container' style={{marginTop: '30%'}}>
        <h4>We got you covered</h4>
          <WhatBrandbarnOffer />
      </div> */}
      <div style={{marginTop: '30%'}}>
        <SupportChannels />
      </div>
      <div>
        <Footer />
      </div> 
    </Fragment>
  )
}

export default Order