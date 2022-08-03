import React, { Fragment } from "react";
import {Outlet, Link } from 'react-router-dom';



const SignUpAlert = (props) =>
{
    
    return (props.trigger) ? (
        <Fragment>
            <div className="overlayAlertDiv">
                <div className="d-flex p-4 overlayAlert">
                    
                    <div>
                        <h2 className="pb-2">
                            Welcome to WebTech Diaries
                        </h2>
                        <h3 className="small">
                            Join over <b> 5000 </b> young inspiring and Dominant WebTechies share Their challenges and Thoughts
                        </h3>
                        <br />
                        {/* <p className="text-dark overlayAlertText">
                            Do sign up to share your feelings, work and how you were able land your first job
                        </p> */}
                        <div className="text-center pt-3" onClick={() => { props.setTrigger(false)}}>
                            <Link to="/signUp" className="overlayAlertBtn">
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    <div className="justify-content-end">
                        <div className="signUpam" onClick={() => { props.setTrigger(false)}}>
                            <div className='signupbar1 signUpham'></div>
                            <div className='signupbar2 signUpham'></div>            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ) : "";
}
 
export default SignUpAlert