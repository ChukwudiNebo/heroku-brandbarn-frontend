import React, { Fragment } from 'react';
import brandLogo1 from '../../images/brandLogo1.jpg';
import brandLogo2 from '../../images/brandLogo2.jpg';
import brandLogo3 from '../../images/brandLogo3.jpg';
import brandLogo4 from '../../images/brandLogo4.jpg';
import brandLogo5 from '../../images/brandLogo5.jpg';
// import  from 'react'

export const BrandLogo = () => {
return (
        <Fragment>
        <section>
                <div className="container" style={{marginTop: '80px'}}>
                    <div>
                        <div className="text-center">
                            <p style={{fontSize: '40px'}}>
                                *<span className="pl-2">*</span><span className="pl-2">*</span>
                            </p>
                        </div>
                        <div className="text-center" style={{color: '#ff5500',letterSpacing: '0.2em'}}>
                            Brands who trust BrandBarn as their Branding agent
                        </div>
                        <div>
                            <ul className="d-flex justify-content-center list-unstyled trustbrand">
                                <li><img src={brandLogo1} alt="" /></li>
                                <li><img src={brandLogo2} alt="" /></li>
                                <li><img src={brandLogo3} alt="" /></li>
                                <li><img src={brandLogo4} alt="" /></li>
                                <li><img src={brandLogo5} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
        </Fragment>
  
    )
}
