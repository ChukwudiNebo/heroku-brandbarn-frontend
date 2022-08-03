import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SupportChannels = () => {
  return (
    <Fragment>
        <div>
            <div className='container mt-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h5>Email Support</h5>
                        <div>
                            <i>Email fontawesome</i>
                            <h6>brandBarn@gmail.com</h6>
                        </div>
                    </div>
                    <div>
                        <h5>Phone Support</h5>
                        <div>
                            <i>phone fontawesome</i>
                            <h6>+234 813 4562 834</h6>
                        </div>
                    </div>
                    <div>
                        <h5>Whatsapp Support</h5>
                        <div>
                            <i>Whatsapp fontawesome</i>
                            <br />
                            <Link to='/'>Whatsapp Link</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SupportChannels