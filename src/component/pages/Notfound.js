import react from 'react';
import page404 from '../../images/404.png'



const Notfound = () =>
{
    return (
        <div className='text-center'>
            <img src={page404} alt="Nothing found" style={{ height: '70vh' }} />
            <div>
                <h3>Something missing??</h3>
                {/* <p>Visit our product category for </p> */}
            </div>
        </div>
    );
}
 
export default Notfound;