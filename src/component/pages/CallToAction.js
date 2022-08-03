import React, { Fragment } from 'react';
// import { Fragment } from 'react';

const callToAction = () => {
return (
    <Fragment>
        {/* Call to action */}
        <section>
            <div className="callToActionBG">
                <div className="text-center call-to-action-div">               
                    <div>
                        <h3 className='call-to-action-heading'>
                            How can we help you? <u>Call Us Today.</u>
                        </h3>    
                    </div>
                    <div>
                        <p className="mt-4 mb-4 call-to-action-paragraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam aliquid aliquam nam ad pariatur quo. Sapiente ipsam nulla itaque iste sequi exercitationem illum natus aspernatur.
                        </p>
                    </div>
                    <div>
                        <button type="button" className="btn mt-3 btn-call-to-action">Contact us</button>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default callToAction