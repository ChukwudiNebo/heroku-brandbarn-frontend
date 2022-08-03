import react, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../layout/Footer';



const Company = () => {
    return ( 
        <Fragment>
            <div style={{ paddingTop:'10%' }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa minima voluptates recusandae sed, quod vero earum magnam dolorum optio?
            
                
                <Outlet />
            </div>
            <Routes>
                <Route path="/" element={<Footer />} />
            </Routes>
        </Fragment>
    );
}




export default Company;