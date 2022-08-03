import { Fragment } from "react";
import {Outlet, Link } from 'react-router-dom';
import brandbarnlogo from '../../images/brandbarnlogo.jpg';


const Footer = () =>
{
    return ( 
        <Fragment>
            <footer style={{marginTop: '100px'}}>
        <div className="container footerDiv">
        <div className="d-flex justify-content-around footerDiv2">
            <div>
                <ul className="list-unstyled footer-ul">
                    <Link to='/policies'>Policies</Link>
                    <Link to='/blog-post'>Blog post</Link>
                    <Link to='/faqs'>FAQs</Link>
                    <Link to='/intellectual-property'>Intellectual property</Link>
                </ul>
            </div>
            <div>
                <ul className="list-unstyled footer-ul">
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/shipping-rates'>Shipping rates</Link>
                    <Link to='/privacy'>Privacy</Link>
                    <Link to='/service'>Service</Link>
                </ul>
            </div>
            <div>
                <ul className="list-unstyled footer-ul">
                    <Link to='/catalogue'>Catalogue</Link>
                    <Link to='/brands'>Brands</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/terms-of-service'>Terms of service</Link>
                    <Link to='/newsletter'>Newsletter(tentative)</Link>
                </ul>
            </div>
        </div>
    </div>
        <div className="footerBottom">
            <div>
                <div>
                    <div className="brandbarn">
                        <div>
                            <img src={brandbarnlogo} alt="Logo" className="brandbarn-logo"/>
                        </div>
                        <div>
                            <h4 className="pl-1">
                                        Brand<span style={{ color: '#ff5500' }}>Barn</span>
                            </h4>    
                        </div>
                    </div>
                    <div className="text-center pt-2 pb-5 footerBottomParagraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam corrupti corporis dolore odit.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum praesentium itaque maxime dolores, blanditiis non quisquam, sed qui eum ullam
                    </div>
                </div>
                <div>
                    <div className="text-center">
                            <i className="fab fa-facebook-f rounded footer-twitter mx-2"></i>                        
                            <i className="fab fa-twitter rounded footer-twitter mx-2"></i>                        
                            <i className="fab fa-instagram rounded mx-2 footer-twitter"></i> 
                            <i className="fab fa-google rounded mx-2 footer-twitter"></i>
                    </div>
                    <div>
                            <p id="copywrite" className="text-center" style={{fontSize: '13px', color: 'black'}}>Copyright  &copy; 2022 BrandBarn Printing Company</p>
                    </div>
                </div>
            </div>
        </div>
</footer>
        </Fragment>
    );
}
 
export default Footer;