import React from 'react';
import { Fragment } from 'react';
import Offerimg from '../../images/undraw_segment_re_a3e7.svg';
import Vault from '../../images/undraw_vault_re_s4my (1).svg';
import Swift from '../../images/undraw_on_the_way_re_swjt.svg';


const WhatBrandbarnOffer = () => {
return ( 
    <Fragment>
<section>
    <div className="container">
        <div className="d-flex justify-content-between" style={{paddingTop: '0px'}}>
            <div className="content-selection">
                <div className="text-center">
                    <img src={Offerimg} alt="*" className="offerimg" />
                </div>
                <div className="text-center">
                    <h5>
                        Top Quality
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda et, veritatis animi ducimus.
                    </p>
                </div>
            </div>
            <div className="customer-incentive">
                <div className="text-center">
                    <img src={Vault} alt="*" className="offerimg" />
                </div>
                <div className="text-center">
                    <h5>
                        Customer incentive
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda et, veritatis animi ducimus.
                    </p>
                </div>
            </div>
            <div className="fast-delivery">
                <div className="text-center">
                    <img src={Swift} alt="*" className="offerimg" />
                </div>
                <div className="text-center">
                    <h5>
                        Fast Delivery
                    </h5>
                    <p>
                        <b>Fast and Reliable Service</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda et, veritatis animi ducimus.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
    </Fragment>
)
}

export default WhatBrandbarnOffer