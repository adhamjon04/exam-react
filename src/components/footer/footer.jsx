import './footer.css';
import {Link} from 'react-router-dom';


//footer images...
import Footerimg from '../../assets/images/footerlogo.png'


function Footer() {

    return(
        <>
        <div className='footer'>
            <Link to={'/'} className='logo'>
                <div>
                    <img className='logo-img' src={Footerimg} alt="" />
                </div>
                <h1 className='footer-name'>BoburBlog</h1>
            </Link>
            <ul className='footer-list'>
                <li className='footer-item'>
                    <h3 className='footer-text'>FIGHT WITH ME ON:</h3>
                    <Link className='footer-link' to={'/all'}><p>Twitter</p></Link>
                    <Link className='footer-link underline' to={'/all'}><p>Instagram</p></Link>
                    <Link className='footer-link' to={'/all'}><p>Telegram</p></Link>
                    <Link className='footer-link' to={'/all'}><p>YouTube</p></Link>
                    <Link className='footer-link' to={'/all'}><p>Figma</p></Link>
                </li>
                <li className='footer-item'>
                    <h3 className='footer-text'>WHAT I HAVE DONE:</h3>
                    <Link className='footer-link' to={'/all'}><p>Xalq Kutubxonasi</p></Link>
                    <Link className='footer-link underline' to={'/all'}><p>Websitee</p></Link>
                    <Link className='footer-link' to={'/all'}><p>Website</p></Link>
                    <Link className='footer-link' to={'/all'}><p>Play Market</p></Link>
                    <Link className='footer-link' to={'/all'}><p>App Store</p></Link>
                </li>
                <li className='footer-item'>
                    <Link className='footer-link' to={'/all'}><p>Contact</p></Link>
                    <Link className='footer-link underline' to={'/all'}><p>Blog</p></Link>
                    <Link className='footer-link' to={'/all'}><p>Dribbble</p></Link>
                    <Link className='footer-link' to={'/all'}><p>Behance</p></Link>
                </li>
            </ul>
            
        </div>
        
        </>
    )
    
}
export default Footer;