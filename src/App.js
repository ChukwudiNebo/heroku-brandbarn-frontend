import React, { Fragment, useState, useEffect  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Alert from './component/layout/Alert'
import Footer from './component/layout/Footer';
import Company from './component/pages/Company';
import Service from './component/pages/Service';
import Landing from './component/layout/Landing';
import Faqs from './component/pages/Faqs';
import About from './component/pages/About';
import Productcategory from './component/pages/Productcategory';
import SignUp from './component/auth/Register';
import Login from './component/auth/Login';
import ClothTag from './component/pages/eachProduct/ClothTag';
import CallToAction from './component/pages/CallToAction';
import Notfound from './component/pages/Notfound';
import './App.css';
import { BrandLogo } from './component/layout/BrandLogo';
import SignUpAlert from './component/layout/SignUpAlert';
import ArticleSlide from './component/layout/ArticleSlide';
import ScrollToTop from './ScrollToTop';



// Redux
import { Provider } from 'react-redux';
import store from './store';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import Order from './component/pages/eachProduct/Order';
import CustomizeOrder from './component/pages/eachProduct/CustomizeOrder';

if (localStorage.token)
    {
        setAuthToken(localStorage.token);
    }


const App = () =>
{

  useEffect(() =>
  {
    store.dispatch(loadUser());
  }, []);


  const [signUpalert, setSignUpalert] = useState(false);

  useEffect(() =>
  {
    // setTimeout(() => {
    //   setSignUpalert(true);
    // }, 1000);
  }, [])

  return (
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop />
          <Fragment>
            <Navbar />
              <div style={{ marginTop: '70px' }}>
                
            <SignUpAlert trigger={signUpalert} setTrigger={setSignUpalert}/>
                
                <Alert />

                <Routes>
                    <Route path='/' element={<Landing />}/>
                </Routes>
                <Routes>
                    <Route path='/' element={<Productcategory />} />
                </Routes>
                <Routes>
                    <Route path='/' element={<ArticleSlide />} />
                </Routes>
                <Routes>
                    <Route path="/" element={<CallToAction />} />
                </Routes>
                <Routes>
                    <Route path='/' element={<BrandLogo />} />
                </Routes>
              
                <Routes>
                  <Route path='company' element={<Company />} />
                  <Route path="service" element={<Service />} />
                  <Route path="about" element={<About />} />
                  <Route path="faqs" element={<Faqs />} />
                  <Route path="signUp" element={<SignUp />} />
                  <Route path="login" element={<Login />} />
                  <Route path="/clothTagPage" element={<ClothTag />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/customizeOrder" element={<CustomizeOrder/>} />
                  <Route path="*" element={<Notfound/>} />
                  <Route path= "/" element={<Footer/>} />
                </Routes>
            </div>
          </Fragment>
        </BrowserRouter>
    </Provider>

  );
}

export default App;

    {/* // <BrowserRouter>
    //   {/* Navbar section */}
    {/* //   {/* <Navbar /> */}
    {/* //   <Fragment>
    //     <Routes>
    //       {/* <Route  path='/'  element={<Home />} /> */}
    {/* //       <Route path='/' element={<Navbar />} >
    //         {/* <Route index  element={<div>Default page content</div>} /> */}
            
    {/* //         <Route path="/company" element={<Company/>}/>    
    //         <Route  path="service" element={<Service/>}/>
    //         <Route  path="about" element={<About/>} />
    //         <Route  path="faqs" element={<Faqs/>} />
    //         <Route  path="signUp" element={<SignUp/>} />
    //         <Route  path="login" element={<Login/>} />
    //         <Route path="*" element={<Notfound/>} />
    //       </Route> */}
    {/* //     </Routes> */}
    {/* //     <div style={{marginTop: '70px'}}> */}
          {/* Landing page */}
    {/* //       <Routes>
    //         <Route path='landing' element={<Landing />} ></Route>
    //         {/* <Route path='/signUp' element={<SignUp />} /> */}
    {/* //       </Routes>      */}
       {/* </div> */}
    {/* //   </Fragment> */}
    {/* // </BrowserRouter> */}