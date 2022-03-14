import './error.css';


import Error from '../../../assets/images/error.png';

function Errors() {
    return(
        <>

        <div className='error-list'>
        <img  className='err-img' src={Error} alt="" />
        <h2 className='err-title'>Page not found - 404</h2>
        <p className='err-text'>This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.</p>
        <p className='err-item'>TAKE ME HOME!</p>
        </div>
      
        </>
    )
    
}
export default Errors;