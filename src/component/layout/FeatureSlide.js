import React, {Fragment} from 'react'

function FeatureSlide() {
  return (
    <Fragment>
           <div className='featureSlide'>
            <div>
                <div className="featureHeading text-center">
                    <h3>
                        Website Features
                    </h3>
                    <p className='text-center'>
                        WebTech lets you Explore these amazing features
                    </p>
                </div>
            </div>
            <div className='container'>
                <Slide {...properties}>
                    <div style={style}>
                        <img src={brandLogo2} alt=".." className='featureSlideImage'/>
                    </div>
                    <div style={style}>
                        <img src={brandLogo5} alt=".." className='featureSlideImage'/>
                    </div>
                    <div style={style}>
                        <img src={brandLogo2} alt=".." className='featureSlideImage'/>
                    </div>
                    <div style={style}>
                        <img src={brandLogo5} alt=".." className='featureSlideImage'/>
                    </div>
                    <div  style={style}>
                        <img src={brandLogo2} alt=".." className='featureSlideImage'/>
                    </div>
                </Slide>
            </div>
        </div>
    </Fragment>
  )
}

export default FeatureSlide